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
    image: `${req.protocol}://${req.get('host')}/images/articles/${req.file.filename}`,
    publishedAt: Date.now()
  })
  article.save((err, article)=>{
    if(err){
      Category.find()
      .then((categories)=>{
        res.render('add-article', {categories: categories, error:"Error occurred."})
      })
      .catch(()=>{
        res.redirect('/')
      });
    } else {
      Category.find()
      .then((categories)=>{
        res.render('add-article', {categories: categories, success:"Success!."})
      })
      .catch(()=>{
        res.redirect('/')
      })
    }
  })
}