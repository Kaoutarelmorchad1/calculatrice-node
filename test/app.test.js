// test/app.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

// Routes comme dans serveur.js
app.get('/', (req, res) => res.send('Bienvenue sur la calculatrice Nodejs !'));
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
});

describe('Tests API calculatrice', () => {
    test('GET / doit retourner bienvenue', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Bienvenue sur la calculatrice Nodejs !');
    });

    test('POST /add doit additionner a et b', async () => {
        const res = await request(app).post('/add').send({ a: 5, b: 3 });
        expect(res.body.result).toBe(8);
    });
});