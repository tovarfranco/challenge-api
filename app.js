// =========== General ===================================
const express = require('express');                                   
const path = require('path');   

// =========== Express app ===================================
const app = express()

// =========== Routing ===================================
const productsRoute = require('./routes/productsRoute.js');

app.use('/products', productsRoute);


app.use((req,res) => {                                  
    res.status(404).render('error');
})

// =========== Export App ======================
module.exports = app;  
