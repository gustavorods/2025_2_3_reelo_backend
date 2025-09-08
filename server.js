const express = require('express');
const app = express();
const port = 3000;

// Permite receber JSON
app.use(express.json());

// Importar rotas
const newsRoutes = require('./routes/newsRoutes');
const auth = require('./middlewares/auth'); 

app.use("/api/news", newsRoutes);
app.use("/api/news", auth.checkApiKey, newsRoutes);

// Ver resposta do servidor
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});