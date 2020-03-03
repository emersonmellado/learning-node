// Create the express router to handle our products requests
var express = require('express');
var router = express.Router();
//CRUD
router.get('/', function(req, res) { //RETRIEVE
  res.send('On this call we show a list of products');
});

router.post('/:id', function(req, res) { //CREATE
  res.send('On this call we create a product with id: ' + req.params.id);
});

router.put('/:id', function(req, res) { //UPDATE
  res.send('On this call we update a product with id: ' + req.params.id);
});

router.delete('/:id', function(req, res) { //DELETE
  res.send('On this call we delete a product with id: ' + req.params.id);
});

module.exports = router;
