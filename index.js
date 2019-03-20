const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');
const router = require('./route/router');

const app = express();

app.use(router);
const port = config.server.port;

app.get('/', (req, res) => {
    res.send('Welcome to this test application');
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});