require('dotenv').config();

function checkApiKey(req, res, next) {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey || apiKey !== process.env.AUTH_KEY) {
        return res.status(403).json({ error: "Forbidde: Invalid API Key"});
    }
    next();
}

module.exports = { checkApiKey };