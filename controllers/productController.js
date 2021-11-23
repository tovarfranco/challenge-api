// =========== General ==============================
const fs = require('fs');                                                        // Para la lectura y escritura de archivos.
const path = require('path'); 

// =========== Read BBDD ===========================

let discount = (product, discount) =>{
    product.price = {
        original : product.price,
        final : product.price * discount,
        discount_percentage: (discount*100).toString() + '%',
        currency: "EUR"
    }
}

let no_discount = (product) =>{
    product.price = {
        original : product.price,
        final : product.price,
        discount_percentage: null,
        currency: "EUR"
    }
}

let calculateDiscount = (products) => {
    products.forEach(product => {
        if (product.category == 'boots'){
            discount(product, 0.3)
        }
        else if(product.sku == 000003){
            discount(product, 0.15)
        }
        else{
            no_discount(product)
        }
    })
    return products

}

// =========== Controller ============================
const productController = {
    index: (req,res) => {
        let productListPath = path.join(__dirname, "../database/productsList.json");    // Ruta del archivo BBDD.
        const products = JSON.parse(fs.readFileSync(productListPath, 'utf-8'));
        const productList = products["products"]
        
        let filteredProducts = []

        if (req.query.category){
            filteredProducts = productList.filter((product) => {
                return product.category == req.query.category
            })
            res.send(calculateDiscount(filteredProducts))
        }
        else if (req.query.priceLessThan){
            filteredProducts = productList.filter((product) => {
                return product.price < req.query.priceLessThan
            })
            res.send(calculateDiscount(filteredProducts))
        }
        else{
            filteredProducts = productList
            res.send(calculateDiscount(filteredProducts))
        }
    }
}

// =========== Export Controller ===========================
module.exports = productController 