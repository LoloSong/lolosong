const Koa = require('koa')
const xmlParser = require('koa-xml-body')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const MongooseDB = require('./libs/MongooseDB')
const { dbConfig } = require('./config/index')
const router = require('./router/allRouter')

const app = new Koa()

// middleware
app.use(xmlParser({
  encoding: 'utf8',
  xmlOptions: {
    explicitArray: false
  }
}))
app.use(bodyParser())
app.use(static(`${__dirname}/views`))

// database
const db = new MongooseDB()
db.connect(dbConfig.dbURL)

// Access-Control-Allow-Origin
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
})

// route
app.use(router.routes()).use(router.allowedMethods)

// listen err
app.on('error', () => {
  console.log('server error')
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})