// Create the express router to handle our home requests
var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'apartment.html'));
});

module.exports = router;