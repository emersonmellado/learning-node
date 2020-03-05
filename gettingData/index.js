const express = require('express')
const path = require('path')
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/users', (req, res) => {
    res.send(`
        Your username is: ${req.query.userName} 
        - First name: ${req.query.firstName} 
        - Last name: ${req.query.lastName}
        <br>
        Bio: ${req.query.bio}
    `)
})

app.listen(port);