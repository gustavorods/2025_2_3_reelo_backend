const express = require('express');
const router = express.Router();
const newsController = require("../controllers/newsController")

// Rota para pegar as notícias
router.get("/get-news", newsController.getNews)

module.exports = router