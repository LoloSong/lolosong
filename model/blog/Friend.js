const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friendSchema = new Schema({
  friendName: String,
  friendUrl: String,
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})

const Friend = mongoose.model('Friend', friendSchema)

module.exports = Friend