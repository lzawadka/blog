var express = require('express');
const Article = require('../models/article.model');
var router = express.Router();
const articleController = require("../controllers/article.controller")

router.get('/', articleController.list);
router.get('/article/:id', articleController.show)
router.get('/add-article', articleController.add)

router.post('/add-article', articleController.addOne)

module.exports = router;
