const Router = require('koa-router')
const page1 = new Router()
const Wechat = require('../libs/Wechat')
const { page1Config } = require('../config/index')

const wechat = new Wechat(page1Config)

/**
 * 微信签名验证
 */
page1.get('/', async (ctx, next) => {
  const { signature, echostr, timestamp, nonce } = ctx.request.query
  let sign = wechat.auth({ signature, timestamp, nonce })
  if (sign) {
    ctx.body = echostr
  } else {
    ctx.body = 'Invalid signature'
  }
  await next()
})

/**
 * 微信推送事件
 */
page1.post('/', async (ctx) => {
  const { signature, timestamp, nonce } = ctx.request.query
  let sign = wechat.auth({ signature, timestamp, nonce })
  if (sign) {
    const message = ctx.request.body.xml
    // 关注公众号
    if (message.MsgType === 'event' && message.Event === 'subscribe') {
      ctx.body = wechat.replyTxt(message, '欢迎关注洛洛微讯')
    }
    // 文本消息自动回复
    if (message.MsgType === 'text') {
      if (message.Content === '1') {
        // 输入1获取图文信息
        ctx.body = wechat.replyImgTxt(message, [{
          title: '测试标题一',
          description: '测试描述一',
          picUrl: 'http://res.cloudinary.com/moveha/image/upload/v1441184110/assets/images/Mask-min.png',
          url: 'https://github.com'
        },{
          title: '测试标题二',
          description: '测试标题二',
          picUrl: 'http://res.cloudinary.com/moveha/image/upload/v1431337192/index-img2_fvzeow.png',
          url: 'nodejs.org'
        }])
      } else if (message.Content === '2') {
        // 输入2获取用户信息
        let content = await wechat.getUserInfo(message.FromUserName)
        ctx.body = wechat.replyTxt(message, JSON.stringify(content))
      } else {
        // 返回用户输入的文本
        ctx.body = wechat.replyTxt(message, message.Content)
      }
    }
  } else {
    // 签名错误 
    ctx.body = 'Invalid signature'
  }
})

/**
 * 微信JSSDK配置获取
 */
page1.get('/getsdk', async (ctx) => {
  let { url } = ctx.request.query
  let data = await wechat.getSdkConfig(url)
  ctx.body = data
})

/**
 * 网页授权获取openid
 */
page1.get('/getUserInfo', async (ctx) => {
  let code = ctx.request.query.code
  let json = await wechat.getWebUserInfo(code)
  ctx.body = json
})

module.exports = page1 