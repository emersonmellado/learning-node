const express = require('express')
const path = require('path')
const port = 3000;
const app = express();

app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/test.html'))
})

app.listen(port)