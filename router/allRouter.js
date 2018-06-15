const Router = require('koa-router')
const router = new Router()

const blog = require('./blog')
const blogAdmin = require('./blogAdmin')

router.use('/api/blog', blog.routes())
router.use('/api/admin', blogAdmin.routes())

module.exports = router