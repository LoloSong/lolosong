const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const MongooseDB = require('./utils/MongooseDB')
const { dbURL } = require('./config/dbConfig')
const router = require('./router/allRouter')

const app = new Koa()

// database
const db = new MongooseDB()
db.connect(dbURL)

// Access-Control-Allow-Origin
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
})

app.use(bodyParser())
app.use(static(`${__dirname}/views`))

// route
app.use(router.routes()).use(router.allowedMethods)

// listen err
app.on('error', () => {
  console.log('server error')
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})