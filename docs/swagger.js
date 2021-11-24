const swaggerJsDoc = require('swagger-jsdoc')

// Extended : https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info:{
            title: "Products API",
            description: "Products API details",
            contact: {
                name: "Franco Tovar"
            },
            servers: ["https:localhost:3000"]
        }
    },

    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = swaggerDocs