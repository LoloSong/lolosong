const Router = require('koa-router')
const blogAdmin = new Router()

const {
  login,
  getInfo,
  addCategory,
  deleteCategory,
  editCategory,
  getCategory,
  createArticle,
  deleteArticle,
  editArticle,
  getOneArticle,
  getArticleList,
  addFriend,
  deleteFriend,
  editFriend,
  getFriend
} = require('../controller/blogAdmin')

// 登录
blogAdmin.post('/user/login', async (ctx) => {
  const { username, password } = ctx.request.body
  ctx.body = await login({ username, password })
})

// 用户信息
blogAdmin.get('/user/getInfo', async (ctx) => {
  const { token } = ctx.request.query
  ctx.body = await getInfo(token)
})

// 添加类别
blogAdmin.post('/category/addCategory', async (ctx) => {
  const { category } = ctx.request.body
  ctx.body = await addCategory(category)
})

// 删除类别
blogAdmin.post('/category/deleteCategory', async (ctx) => {
  const { categoryID } = ctx.request.body
  ctx.body = await deleteCategory(categoryID)
})

// 编辑类别
blogAdmin.post('/category/editCategory', async (ctx) => {
  const { categoryID, category } = ctx.request.body
  ctx.body = await editCategory({ categoryID, category })
})

// 获取类别
blogAdmin.get('/category/getCategory', async (ctx) => {
  ctx.body = await getCategory()
})

// 添加友情链接
blogAdmin.post('/friend/addFriend', async (ctx) => {
  const { friendName, friendUrl } = ctx.request.body
  ctx.body = await addFriend({ friendName, friendUrl })
})

// 删除友情链接
blogAdmin.post('/friend/deleteFriend', async (ctx) => {
  const { id } = ctx.request.body
  console.log(id)
  ctx.body = await deleteFriend(id)
})

// 编辑友情链接
blogAdmin.post('/friend/editFriend', async (ctx) => {
  const { id, friendName, friendUrl } = ctx.request.body
  ctx.body = await editFriend({ id, friendName, friendUrl })
})

// 获取友情链接
blogAdmin.get('/friend/getFriend', async (ctx) => {
  ctx.body = await getFriend()
})

// 创建文章
blogAdmin.post('/article/createArticle', async (ctx) => {
  const { title, category, describe, content, contentToMarked } = ctx.request.body
  ctx.body = await createArticle({
    title,
    category,
    describe,
    content,
    contentToMarked
  })
})

// 删除文章
blogAdmin.post('/article/deleteArticle', async (ctx) => {
  const { articleID } = ctx.request.body
  ctx.body = await deleteArticle(articleID)
})

// 编辑文章
blogAdmin.post('/article/editArticle', async (ctx) => {
  const { articleID, title, describe, category, content, contentToMarked } = ctx.request.body
  ctx.body = await editArticle({
    articleID,
    title,
    describe,
    category,
    content,
    contentToMarked
  })
})

// 获取文章
blogAdmin.get('/article/getOneArticle', async (ctx) => {
  const { articleID } = ctx.request.query
  ctx.body = await getOneArticle(articleID)
})

// 获取文章列表
blogAdmin.get('/article/getArticleList', async (ctx) => {
  const { page, limit } = ctx.request.query
  ctx.body = await getArticleList({ page, limit })
})

module.exports = blogAdmin 