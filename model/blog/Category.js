const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  category: String,
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category