const express = require('express');
const Logger = require('logplease')
const app = express();
const logger = Logger.create('server')
var oneLinerJoke = require('one-liner-joke');
const path = require('path');

app.get('/:tag1/:tag2', (req, res) => {
    var getRandomJoke1 = oneLinerJoke.getRandomJokeWithTag(req.params.tag1.toUpperCase())
    var getRandomJoke2 = oneLinerJoke.getRandomJokeWithTag(req.params.tag2)

    const response = {
        tag1: req.params.tag1,
        tag2: req.params.tag2,
        joke1: getRandomJoke1.body,
        joke2: getRandomJoke2.body
    }

    res.json(response)
});

app.get('/', (request, response)=>{
    logger.info(__dirname);
    response.sendFile(path.join(__dirname, 'html/index.html'));
})

app.listen(3000, () => logger.info('Example app listening on port 3000!'));