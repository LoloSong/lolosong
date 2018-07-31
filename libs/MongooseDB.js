const mongoose = require('mongoose')

class MongooseDB {
  connect (url) {
    // 链接数据库
    mongoose.connect(url)

    let maxConnectTimes = 3 // 最大重连次数

    // 断开重连
    mongoose.connection.on('disconnected', (err) => {
      console.log('**********数据库断开**********')
      if (maxConnectTimes >= 0) {
        maxConnectTimes--
        mongoose.connect(url)
      } else {
        throw new Error(err)
      }
    })

    // 错误重连
    mongoose.connection.on('err', (err) => {
      console.log('**********数据库错误**********')
      if (maxConnectTimes >= 0) {
        maxConnectTimes--
        mongoose.connect(url)
      } else {
        throw new Error(err)
      }
    })

    // 数据库开启信息
    mongoose.connection.once('open', () => {
      maxConnectTimes = 3
      console.log('MongoDB connected successfully')
    })
  }
}

module.exports = MongooseDB