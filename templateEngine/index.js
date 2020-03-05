const express = require('express')
const port = 3000;
const app = express();
const joker = require('one-liner-joke')

app.set('view engine', 'pug');
//call it like this: http://localhost:3000/IT?title=Testing&message=hello friends
app.get('/:tag', (req, res) => {
    const joke = joker.getRandomJokeWithTag(req.params.tag);
    res.render('index', {
        title:req.query.title, 
        message:req.query.message,
        joke: joke.body
    })
})

app.listen(port);