// =========== General ===================================
const express = require('express');                                   
const path = require('path');   

// =========== Express app ===================================
const app = express()

// =========== Routing ===================================
const productsRoute = require('./routes/productsRoute.js');

app.use('/products', productRoute);
