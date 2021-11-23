// =========== General ===================================
const express = require('express');                                   
const path = require('path');   

// =========== Express app ===================================
const app = express()

// =========== Routing ===================================
const productRoute = require('./routes/productRoute.js');

app.use('/products', productRoute);
