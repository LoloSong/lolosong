const Category = require('../model/blog/Category')
const Article = require('../model/blog/Article')
const Manager = require('../model/blog/Manager')
const Friend = require('../model/blog/Friend')

exports.login = async ({ username, password }) => {
  let ret = {}
  if (!username || !password) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let managerDB = await Manager.findOne({ username })
      if (managerDB && managerDB.password === password) {
        ret.code = 0
        ret.msg = '用户名密码正确',
          ret.data = {
            token: managerDB._id
          }
      } else {
        ret.code = 1
        ret.msg = '用户名或密码错误'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '登录失败'
    }
  }
  return ret
}

exports.getInfo = async (token) => {
  let ret = {}
  if (!token) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let managerDB = await Manager.findOne({ _id: token })
      if (managerDB) {
        ret.code = 0
        ret.msg = '用户信息获取成功'
        ret.data = {
          name: managerDB.username,
          avatar: 'http://img.souche.com/20161230/png/8bb4f0fd45ed6ae26533eadd85f0f7ea.png',
          roles: managerDB.authority
        }
      } else {
        ret.code = 1
        ret.msg = '用户信息获取失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '用户信息获取失败'
    }
  }
  return ret
}

exports.addCategory = async (category) => {
  let ret = {}
  if (!category) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let categoryDB = await Category.findOne({ category })
      if (categoryDB && categoryDB.category === category) {
        ret.code = 1
        ret.msg = '类别已存在'
      } else {
        try {
          await new Category({ category }).save()
          ret.code = 0
          ret.msg = '类别添加成功'
        } catch (err) {
          ret.code = 1
          ret.msg = '数据连接错误'
          ret.data = err
        }
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '数据连接错误'
      ret.data = err
    }
  }
  return ret
}

exports.deleteCategory = async (categoryID) => {
  let ret = {}
  if (!categoryID) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let result = await Category.remove({ _id: categoryID })
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '类别删除成功'
      } else {
        ret.code = 1
        ret.msg = '类别删除失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '类别删除失败'
    }
  }
  return ret
}

exports.editCategory = async ({ categoryID, category }) => {
  let ret = {}
  if (!categoryID || !category) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let result = await Category.update({ _id: categoryID }, { $set: { category: category, updated: Date.now() } })
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '类别修改成功'
      } else {
        ret.code = 1
        ret.msg = '类别修改失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '类别修改失败'
    }
  }
  return ret
}

exports.getCategory = async () => {
  let ret = {}
  try {
    let categoryDB = await Category.find()
    categoryDB = categoryDB.map((item) => {
      let { _id, category } = item
      return {
        created: item.updated.getTime(),
        updated: item.updated.getTime(),
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

exports.addFriend = async ({ friendName, friendUrl }) => {
  let ret = {}
  if (!friendName || !friendUrl) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      await new Friend({ friendName, friendUrl }).save()
      ret.code = 0
      ret.msg = '类别添加成功'
    } catch (err) {
      ret.code = 1
      ret.msg = '数据连接错误'
      ret.data = err
    }
  }
  return ret
}

exports.deleteFriend = async (friendID) => {
  let ret = {}
  if (!friendID) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let result = await Friend.remove({ _id: friendID })
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '友情链接删除成功'
      } else {
        ret.code = 1
        ret.msg = '友情链接删除失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '友情链接删除失败'
    }
  }
  return ret
}

exports.editFriend = async ({ friendID, friendName, friendUrl }) => {
  let ret = {}
  if (!friendID || !friendName || !friendUrl) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let result = await Friend.update({ _id: friendID }, { $set: { friendName: friendName, friendUrl: friendUrl, updated: Date.now() } })
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '友情链接修改成功'
      } else {
        ret.code = 1
        ret.msg = '友情链接修改失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '友情链接修改失败'
    }
  }
  return ret
}

exports.getFriend = async () => {
  let ret = {}
  try {
    let friendDB = await Friend.find()
    friendDB = friendDB.map((item) => {
      let { _id, friendName, friendUrl } = item
      return {
        created: item.updated.getTime(),
        updated: item.updated.getTime(),
        friendName,
        friendUrl,
        _id
      }
    })
    ret.code = 0
    ret.msg = '查询友情链接成功'
    ret.data = friendDB
  } catch (err) {
    ret.code = 1
    ret.msg = '查询友情链接失败'
  }
  return ret
}

exports.createArticle = async ({ title, category, describe, content, contentToMarked }) => {
  let ret = {}
  if (!title || !category || !describe || !content || !contentToMarked) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      await new Article({ title, category, describe, content, contentToMarked }).save()
      ret.code = 0
      ret.msg = '文章创建成功'
    } catch (err) {
      ret.code = 1
      ret.msg = '文章创建失败'
    }
  }
  return ret
}

exports.deleteArticle = async (articleID) => {
  let ret = {}
  if (!articleID) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let result = await Article.remove({ _id: articleID })
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '文章删除成功'
      } else {
        ret.code = 1
        ret.msg = '文章删除失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '文章删除失败'
    }
  }
  return ret
}

exports.editArticle = async ({ articleID, title, category, describe, content, contentToMarked }) => {
  let ret = {}
  if (!articleID || !title || !category || !describe || !content || !contentToMarked) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let result = await Article.update({ _id: articleID }, {
        $set: {
          title,
          category,
          describe,
          content,
          contentToMarked,
          updated: Date.now()
        }
      })
      if (result.n === 1) {
        ret.code = 0
        ret.msg = '文章修改成功'
      } else {
        ret.code = 1
        ret.msg = '文章修改失败'
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '文章修改失败'
    }
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
      let articleDB = await Article.findOne({ _id: articleID })
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

exports.getArticleList = async ({ page, limit }) => {
  let ret = {}
  if (!page || !limit) {
    ret.code = 1
    ret.msg = '参数错误'
  } else {
    try {
      let articleListDB = await Article.find().skip((Number(page) - 1) * Number(limit)).limit(Number(limit))
      let articleCount = await Article.count()
      articleListDB = articleListDB.map((item) => {
        let { _id, title, category, views } = item
        return {
          created: item.created.getTime(),
          updated: item.updated.getTime(),
          _id,
          title,
          category,
          views
        }
      })
      ret.code = 0
      ret.msg = '文章列表信息获取成功'
      ret.data = {
        list: articleListDB,
        articleCount: articleCount,
        currentPage: page
      }
    } catch (err) {
      ret.code = 1
      ret.msg = '文章列表信息获取失败'
    }
  }
  return ret
}