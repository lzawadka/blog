const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  image: String,
  publishedAt: Date
})

module.exports = mongoose.model('Article', articleSchema)