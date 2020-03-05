const express = require('express')
const path = require('path')
const port = 3000;
const app = express();

//Piece of code to parse body post data
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
//end here

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/users', urlencodedParser, (req, res) => {
    res.send(`
        Your username is: ${req.body.userName} 
        - First name: ${req.body.firstName} 
        - Last name: ${req.body.lastName}
        <br>
        Bio: ${req.body.bio}
        <br>
        Github: ${req.body.gitHub}
    `)
})

app.listen(port);