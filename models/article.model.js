const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  image: {type: String, required: true},
  publishedAt: {type: String, required: true}
})

module.exports = mongoose.model('Article', articleSchema)