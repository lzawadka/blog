const Article = require('../models/article.model');
const Category = require('../models/category.model')

exports.list = (req, res)=>{
  Article.find()
  .then((articles)=>{
    res.render('index', { title: 'Express', 'articles': articles });
  })
  .catch((err)=>{
    res.status(400).json(err)
  });
}

exports.show = (req, res)=>{
  Article.findOne({_id: req.params.id})
  .then((article)=>{
    res.render('single-article', { 'article': article });
  })
  .catch((err)=>{
    res.redirect("/");
  })
}

exports.add = (req, res)=>{
  Category.find()
  .then((categories)=>{
    res.render('add-article', {categories: categories});
  })
  .catch(()=>{
    res.redirect("/")
  })
}

exports.addOne = (req, res)=>{
  var article = new Article({
    ...req.body,
    publishedAt: Date.now()
  })
  console.log(article);
  article.save()
  .then(()=>{
    res.render('add-article', {success: "Added"});
  })
  .catch((err)=>{
    res.render('add-article', {error: err});
  })
}