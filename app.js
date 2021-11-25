// =========== General ===================================
const express = require('express');                                   

// =========== Express app ===================================
const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// =========== Swagger Docs ===================================
const swaggerDocs = require('./docs/swagger.js')
const swaggerUi = require('swagger-ui-express')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// =========== Routing ===================================
const productsRoute = require('./routes/productsRoute.js');

/**
 * @swagger
 * /products:
 *  get:
 *      description: Use to request all products
 *      parameters:
 *       - in: query
 *         name: category
 *         type: string
 *         required: false
 *         description: description of parameter
 *       - in: query
 *         name: priceLessThan
 *         type: string
 *         required: false
 *         description: description of parameter
 *      responses: 
 *          '200':
 *              description: A successfull response
 */
app.use('/products', productsRoute);


app.use((req,res) => {                                  
    res.status(404).send('Route not Found');
})

// =========== Export App ======================
module.exports = app;  

