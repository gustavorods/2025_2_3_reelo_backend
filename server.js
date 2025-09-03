const express = require('express');
const app = express();
const port = 3000;

// Permite receber JSON
app.use(express.json());

// Importar rotas
const newsRoutes = require('./routes/newsRoutes');
app.use("api/news", newsRoutes);

// Ver resposta do servidor
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});