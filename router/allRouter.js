const Router = require('koa-router')
const router = new Router()

const blog = require('./blog')
const blogAdmin = require('./blogAdmin')

router.use('/blog', blog.routes())
router.use('/admin', blogAdmin.routes())

module.exports = router