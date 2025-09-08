const gemini = require("./gemini.js");
require("dotenv").config();

// This function return all the news
async function getNews() {
    try {
        const req = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.GNEWS_API_KEY}`);
        const news = await req.json();
        return news.articles;        
    } catch(error) {
        console.log(`Error making request to GNews API \n ERROR: ${error}`);
    }    
}

// This function translate the news (In the futere we can uptade this function to specify the language)
async function transleteNews(news) {
    try {
        let translantedNews = await gemini(
              "Translate all these news items into Portuguese and return only valid JSON, no explanations, no markdown.", 
            JSON.stringify(news));


        return cleanAndParse(translantedNews);
    } catch (error) {
        console.log(`Error to tranlete the news \n ERROR: ${error}`)
    }
}

// This function removes the markdawn tags and transforms the string into json
function cleanAndParse(jsonString) {
  // remove ```json ... ```
  const cleaned = jsonString
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

module.exports = {getNews, transleteNews};

