const express = require('express');
const Logger = require('logplease')
const app = express();
const logger = Logger.create('server')

app.get('/', (request, response) => response.send('Hello Node.js World!'));
app.get('/about', (request, response) => response.send('This is my about page'));
app.get('/contact', (request, response) => response.send('Ths is my contact page'));

app.listen(3000, () => logger.info('Example app listening on port 3000!'));