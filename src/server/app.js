const express = require('express');

const resultsRouter = require('./routes/results');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/results', resultsRouter);

module.exports = app;
