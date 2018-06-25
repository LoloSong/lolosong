const Category = require('../model/blog/Category')
const Article = require('../model/blog/Article')

exports.getCategory = async () => {
  let ret = {}
  try {
    let categoryDB = await Category.find()
    categoryDB = categoryDB.map((item) => {
      let {_id, category} = item
      return {
        category,
        _id
      }
    })
    ret.code = 0
    ret.msg = '查询类别成功'
    ret.data = categoryDB
  } catch (err) {
    ret.code = 1
    ret.msg = '查询类别失败'
  }
  return ret
}

exports.getOneArticle = async (articleID) => {
  let ret = {}
  if (!articleID) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let articleDB = await Article.findOne({_id: articleID})
      ret.code = 0
      ret.msg = '文章信息获取成功'
      ret.data = articleDB
    } catch (err) {
      ret.code = 1
      ret.msg = '文章信息获取失败'
    }
  }
  return ret
}

exports.getArticleList = async ({page, limit}) => {
  let ret = {}
  if (!page || !limit) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let articleListDB = await Article.find().skip((Number(page) - 1) * Number(limit)).limit(Number(limit)).sort({created: -1})
      let articleCount = await Article.count()
      articleListDB = articleListDB.map((item) => {
        let {_id, title, category, views, describe} = item
        return {
          created: item.created.getTime(),
          updated: item.updated.getTime(),
          _id,
          title,
          category,
          views,
          describe
        }
      })
      ret.code = 0
      ret.msg = '文章列表信息获取成功'
      ret.data = {
        list: articleListDB,
        articleCount:articleCount,
        currentPage: page
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '文章列表信息获取失败'
    }
  }
  return ret
}

exports.getHotArticleList = async ({page, limit}) => {
  let ret = {}
  if (!page || !limit) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let articleListDB = await Article.find().skip((Number(page) - 1) * Number(limit)).limit(Number(limit)).sort({views: -1})
      let articleCount = await Article.count()
      articleListDB = articleListDB.map((item) => {
        let {_id, title, category, views, describe} = item
        return {
          created: item.updated.getTime(),
          updated: item.updated.getTime(),
          _id,
          title,
          category,
          views,
          describe
        }
      })
      ret.code = 0
      ret.msg = '文章列表信息获取成功'
      ret.data = {
        list: articleListDB,
        articleCount:articleCount,
        currentPage: page
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '文章列表信息获取失败'
    }
  }
  return ret
}

exports.getArticleListByCategory = async ({page, limit, category}) => {
  let ret = {}
  if (!page || !limit || !category) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let articleListDB = await Article.find({category}).skip((Number(page) - 1) * Number(limit)).limit(Number(limit)).sort({created: -1})
      let articleCount = await Article.find({category}).count()
      articleListDB = articleListDB.map((item) => {
        let {_id, title, category, views, describe} = item
        return {
          created: item.updated.getTime(),
          _id,
          title,
          category,
          views,
          describe
        }
      })
      ret.code = 0
      ret.msg = '文章列表信息获取成功'
      ret.data = {
        list: articleListDB,
        articleCount:articleCount,
        currentPage: page
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '文章列表信息获取失败'
    }
  }
  return ret
}

exports.addviews = async (articleID) => {
  let ret = {}
  if (!articleID) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let ArticleDB = await Article.findOne({_id: articleID})
      let ArticleViews = ArticleDB.views + 1
      let result = await Article.update({_id: articleID}, {$set: {views: ArticleViews}})
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '阅读数增加成功'
      } else {
        ret.code = 1
      ret.msg = '阅读数增加失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '阅读数增加失败'
    }
  }
  return ret
}