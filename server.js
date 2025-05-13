const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const COUNTERS_FILE = path.join(__dirname, 'counters.json');

let counters = {};

function loadCounters() {
    if (fs.existsSync(COUNTERS_FILE)) {
        const data = fs.readFileSync(COUNTERS_FILE, 'utf8');
        try {
            counters = JSON.parse(data);
        } catch (err) {
            console.error('Ошибка парсинга JSON:', err);
            counters = {};
        }
    } else {
        counters = {};
    }
}

function saveCounters() {
    fs.writeFileSync(COUNTERS_FILE, JSON.stringify(counters, null, 2), 'utf8');
}

loadCounters();

function incrementCounter(route) {
    return (req, res, next) => {
        if (!counters[route]) {
            counters[route] = 0;
        }
        counters[route]++;
        saveCounters();
        next();
    };
}

app.get('/', incrementCounter('/'), (req, res) => {
    const count = counters['/'];
    res.send(`<h1>Главная страница</h1><p>Количество просмотров: ${count}</p>`);
});

app.get('/about', incrementCounter('/about'), (req, res) => {
    const count = counters['/about'];
    res.send(`<h1>Страница "О нас"</h1><p>Количество просмотров: ${count}</p>`);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});