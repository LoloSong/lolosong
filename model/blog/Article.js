const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  category: String,
  describe: String,
  content: String,
  contentToMarked: String,
  views: {type: Number, default: 0},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article