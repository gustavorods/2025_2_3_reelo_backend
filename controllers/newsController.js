const newsService = require("../services/newsService");

async function getNews(req, res) {
  try {
    let news = await newsService.getNews();     
    let translatedNews = await newsService.transleteNews(news);

    if (!translatedNews || translatedNews.length === 0) {
     throw new Error("Erro ao traduzir as notícias");
    }

    res.json(translatedNews);
  } catch (error) {
    console.error(`Error to get the news or translate the news \n ERROR: ${error}`);  
    res.status(500).send('Erro interno no servidor');
    }
}


module.exports = { getNews } ;