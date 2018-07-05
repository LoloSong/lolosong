const crypto = require('crypto')
const axios = require('axios')
const util = require('./util') 

class Wechat {
  constructor (config) {
    this.token = config.token
    this.appID = config.appID
    this.appSecret = config.appSecret
    this.prefix = config.prefix
    this.access_token = ''
    this.expires_in = ''
    this.ticket = ''
    this.ticket_expires_in = ''
    this.api = {
      accessToken: this.prefix + 'token?grant_type=client_credential',
      ticket: this.prefix + 'ticket/getticket?type=jsapi',
      semantic: 'https://api.weixin.qq.com/semantic/semproxy/search',
      user: {
        info: this.prefix + 'user/info',
      }
    }
    this._getAccessToken()
  }

  /**
   * 微信接入验证
   * @param {Object}: signature, timestamp, nonce
   * @return {Boolean}
   */
  auth ({ signature, timestamp, nonce }) {
    let ret = ''
    const token = this.token
    // sha1加密
    let params = [token, timestamp, nonce].sort().join('')
    params = crypto.createHash('sha1').update(params).digest('hex')
    if (params === signature) {
      ret = true
    } else {
      ret = false
    }
    return ret
  }

  /**
   * 获取用户信息
   */
  async getUserInfo (openid) {
    const url = `${this.api.user.info}?access_token=${this.access_token}&openid=${openid}&lang=zh_CN` 
    let json = await axios.get(url)
    return json.data
  }

  /**
   * 获取sdk配置信息
   */
  async getSdkConfig (url) {
    const nonceStr = Math.random().toString(36).substr(2, 15)
    const timestamp = parseInt(new Date().getTime() / 1000).toString()
    const ticket = await this._getTicket()
    const signature = this._sdksign({nonceStr, timestamp, ticket, url})
    return {
      appId: this.appID,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature
    }
  }

  /**
   * 获取网页授权的access_token和openid
   */
  async getWebUserInfo (code) {
    const AccessTokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${this.appID}&secret=${this.appSecret}&code=${code}&grant_type=authorization_code`
    let AccessTokenJson = await axios.get(AccessTokenUrl)
    const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${AccessTokenJson.data.access_token}&openid=${AccessTokenJson.data.openid}&lang=zh_CN`
    let userInfoJson = await axios.get(userInfoUrl)
    return userInfoJson.data
  }

  /**
   * 消息自动回复
   */
  // 文本回复
  replyTxt (msg, content) {
    return `<xml>
      <ToUserName><![CDATA[${msg.FromUserName}]]></ToUserName>
      <FromUserName><![CDATA[${msg.ToUserName}]]></FromUserName>
      <CreateTime>${msg.CreateTime}</CreateTime>
      <MsgType><![CDATA[text]]></MsgType>
      <Content><![CDATA[${content}]]></Content>
    </xml>`
  }
  // 图文回复
  replyImgTxt (msg, array) {
    let articles = array.map((item) => {
      return `
        <item>
          <Title><![CDATA[${item.title}]]></Title> 
          <Description><![CDATA[${item.description}]]></Description>
          <PicUrl><![CDATA[${item.picUrl}]]></PicUrl>
          <Url><![CDATA[${item.url}]]></Url>
        </item>
      `
    })
    return `<xml>
      <ToUserName><![CDATA[${msg.FromUserName}]]></ToUserName>
      <FromUserName><![CDATA[${msg.ToUserName}]]></FromUserName>
      <CreateTime>${msg.CreateTime}</CreateTime>
      <MsgType><![CDATA[news]]></MsgType>
      <ArticleCount>${array.length}</ArticleCount>
      <Articles>
        ${articles.join()}
      </Articles>
    </xml>`
  }

  /**
   * 从文件获取微信access_token
   */
  async _getAccessToken () {
    let data
    try {
      data = await util.readFile(`config/accessToken/${this.appID}.txt`)
      data = JSON.parse(data)
      this.access_token = data.access_token
      this.expires_in = data.expires_in
    } catch (err) {
      data = await this._updateAccessToken()
    }
    
    if (!this._isValidAccessToken()) {
      data = await this._updateAccessToken()
    }
    await this._saveAccessToken(data)
    return data
  }

  /**
   * 验证access_token是否过期
   */
  _isValidAccessToken () {
    const now = new Date().getTime()
    if (this.access_token && now < this.expires_in) {
      return true
    } else {
      return false
    }
  }

  /**
   * 保存access_token存入文件
   */
  async _saveAccessToken (data) {
    data = JSON.stringify(data)
    util.writeFile(`config/accessToken/${this.appID}.txt`, data)
  }

  /**
   * 更新AccessToken
   */
  async _updateAccessToken () {
    const url = `${this.api.accessToken}&appid=${this.appID}&secret=${this.appSecret}` 
    let data = await axios.get(url)
    data = data.data
    const now = new Date().getTime()
    // 讲过期时间7200秒改为7180秒
    const expires_in = now + (data.expires_in - 20) * 1000
    data.expires_in = expires_in
    this.access_token = data.access_token
    this.expires_in = data.expires_in
    return data
  } 

  /**
   * 从文件获取微信Ticket临时票据
   */
  async _getTicket () {
    let data
    try {
      data = await util.readFile(`config/ticket/${this.appID}.txt`)
      data = JSON.parse(data)
      this.ticket = data.ticket
      this.ticket_expires_in = data.expires_in
    } catch (err) {
      data = await this._updateTicket()
    }
    if (!this._isValidTicket()) {
      data = await this._updateTicket()
    }
    await this._saveTicket(data)
    return data.ticket
  }

  /**
   * 验证Ticket是否过期
   */
  _isValidTicket () {
    const now = new Date().getTime()
    if (this.ticket && now < this.ticket_expires_in) {
      return true
    } else {
      return false
    }
  }

  /**
   * 保存Ticket存入文件
   */
  async _saveTicket (data) {
    data = JSON.stringify(data)
    util.writeFile(`config/ticket/${this.appID}.txt`, data)
  }

  /**
   * 更新Ticket
   */
  async _updateTicket () {
    const url = `${this.api.ticket}&access_token=${this.access_token}` 
    let data = await axios.get(url)
    data = data.data
    const now = new Date().getTime()
    // 讲过期时间7200秒改为7180秒
    const expires_in = now + (data.expires_in - 20) * 1000
    data.expires_in = expires_in
    this.access_token = data.access_token
    this.expires_in = data.expires_in
    return data
  }

  /**
   * jssdk签名加密
   */
  _sdksign ({nonceStr, timestamp, ticket, url}) {
    var params = [
      'noncestr=' + nonceStr,
      'jsapi_ticket=' + ticket,
      'timestamp=' + timestamp,
      'url=' + url
    ]
    var str = params.sort().join('&')
    str = crypto.createHash('sha1').update(str).digest('hex')
    return str
  }
}

module.exports = Wechat