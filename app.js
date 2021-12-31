const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public/'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/index.html'));
});


app.get('/button', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/button.html'));
});

app.get('/sample', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/sample.html'));
});

app.get('/cards', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/card.html'));
});

app.get('/typography', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/typog.html'));
});

app.get('/bootimages', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/bootimages.html'));
});

app.get('/utilities', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/utilities.html'));
});

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
});
