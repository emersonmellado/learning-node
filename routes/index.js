const express = require('express');
const app = express();

// Routers
const home = require('./home.js');
const products = require('./products.js');
const apartment = require('./apartment.js')

app.use('/', home);
app.use('/products', products);
app.use('/apartment', apartment)

app.listen(3000, () => console.log('Example app listening on port 3000!'));