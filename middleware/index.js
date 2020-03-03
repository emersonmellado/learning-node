const express = require('express');
const logger = require('morgan');
const app = express();

const myMiddleware = function (req, res, next) {
    // We set a new property in the request object
    req.someValue = 'This is a value to test the Middleware';
    console.log("Hi from middleware");
    // We call the next middleware
    next();
}
app.use(logger('Hi from logger', {immediate:true}))
app.use(myMiddleware)

app.get('/', (req, res) => {
    console.log("This is the main runtime");
    const responseMessage = req.someValue; // We get the request value that we setted from the middleware

    res.send(responseMessage);
});

app.listen(3000);