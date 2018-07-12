const Router = require('koa-router')
const router = new Router()
const util = require('../libs/util')
const blog = require('./blog')
const blogAdmin = require('./blogAdmin')
const page1 = require('./page1')

<<<<<<< HEAD
// 微信
router.use('/wechat/page1', page1.routes())

// 博客后台
router.use('/api/admin', blogAdmin.routes())
router.get('/admin/*', async (ctx) => {
  let data = await util.readFile('./views/admin/index.html')
  ctx.body = data
})

// 博客
router.use('/api/blog', blog.routes())
router.get('/*', async (ctx) => {
  let data = await util.readFile('./views/blog/index.html')
  ctx.body = data
})
=======
// admin
router.get('/admin/*', async (ctx) => {
  let data = await util.readFile('./views/admin/index.html')
  ctx.body = data
})
router.use('/api/admin', blogAdmin.routes())

// 微信
router.use('/wechat/page1', page1.routes())

// blog(放在最后)
router.get('/', async (ctx) => {
  let data = await util.readFile('./views/blog/index.html')
  ctx.body = data
})
router.use('/api/blog', blog.routes())

>>>>>>> 0692d904a646684448f3c8181f1c528ba58af940
module.exports = router