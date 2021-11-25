// =========== General ==============================
const fs = require('fs');          //Read and write files           
const path = require('path');      //Paths manage

// =========== Models ============================
const Product = require('../models/Product.model.js');

/*** Calcultate the given discount for a given product ***/
let discount = (product, discount) =>{
    product.price = {
        original : product.price,
        final : Math.round(product.price * (1-discount)),
        discount_percentage: discount !== 0 ? (discount*100).toString() + '%' : null,
        currency: "EUR"
    }
}

/*** Calcultate the discounts for a list of products ***/
let calculateDiscount = (products) => {
    products.forEach(product => {
        if (product.category == 'boots'){
            discount(product, 0.3)
        }
        else if(product.sku == 000003){
            discount(product, 0.15)
        }
        else{
            discount(product, 0)
        }
    })
    return products

}

// =========== Controller ============================
const productController = {
    list: (req,res) => {
        try {
            if (Object.keys(req.query).length === 0){                     //if no params are sent:
                res.json(calculateDiscount(Product.findAll()).slice(0,5)) //fillAll products
            }
            else(                                                         //else findByField product         
                res.json(calculateDiscount(Product.findByField(req.query)).slice(0,5))
            )
        } catch(error){
            res.status(500).json({ data: null, error: error, success: false }); //catch error
        }
    }
}

// =========== Export Controller ===========================
module.exports = productController    //export the controller