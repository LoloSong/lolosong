const mongoose = require('mongoose')
const Schema = mongoose.Schema

const managerSchema = new Schema({
  username: String,
  password: String,
  authority: Array,
})

const Manager = mongoose.model('Manager', managerSchema)

module.exports = Manager