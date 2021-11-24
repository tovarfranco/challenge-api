// =========== General ===================================
const express = require('express');                                   

// =========== Express app ===================================
const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// =========== Routing ===================================
const productsRoute = require('./routes/productsRoute.js');

app.use('/products', productsRoute);


app.use((req,res) => {                                  
    res.status(404).send('Route not Found');
})

// =========== Export App ======================
module.exports = app;  

