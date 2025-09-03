const gemini = require("./gemini.js");
require("dotenv").config();

async function getNews() {
    try {
        const req = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.GNEWS_API_KEY}`);
        const news = await req.json();
        return news.articles        
    } catch(error) {
        console.log(`Error making request to GNews API \n Error: ${error}`);
    }    
}
