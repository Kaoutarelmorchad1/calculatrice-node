const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Exemple : route addition
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const sum = a + b;
    res.json({ result: sum });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});