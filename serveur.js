const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Route GET racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur la calculatrice Nodejs !');
});

// Route POST addition
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const sum = a + b;
    res.json({ result: sum });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});