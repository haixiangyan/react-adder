const express = require('express');

const recordRouter = require('./routes/record');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/records', recordRouter);

module.exports = app;
