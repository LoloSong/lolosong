const Router = require('koa-router')
const blog = new Router()

const {
  getCategory,
  getOneArticle,
  getArticleList,
  getHotArticleList,
  getArticleListByCategory,
  addviews,
  getFriend
} = require('../controller/blog')

// 获取类别
blog.get('/category/getCategory', async (ctx) => {
  ctx.body = await getCategory()
})

// 获取文章
blog.get('/article/getOneArticle', async (ctx) => {
  const {articleID} = ctx.request.query
  ctx.body = await getOneArticle(articleID)
})

// 获取文章列表
blog.get('/article/getArticleList', async (ctx) => {
  const {page, limit} = ctx.request.query
  ctx.body = await getArticleList({page, limit})
})

// 获取热门文章列表
blog.get('/article/getHotArticleList', async (ctx) => {
  const {page, limit} = ctx.request.query
  ctx.body = await getHotArticleList({page, limit})
})

// 通过标签获取文章列表
blog.get('/articleList/getArticleListByCategory', async (ctx) => {
  const {page, limit, category} = ctx.request.query
  console.log(123)
  ctx.body = await getArticleListByCategory({page, limit, category})
})

// 增加阅读量
blog.post('/article/addviews', async (ctx) => {
  const {articleID} = ctx.request.body
  ctx.body = await addviews(articleID)
})

// 获取友情链接
blog.get('/friend/getFriend', async (ctx) => {
  ctx.body = await getFriend()
})

module.exports = blog 