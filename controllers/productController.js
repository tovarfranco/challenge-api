// =========== General ==============================
const fs = require('fs');                                                        // Para la lectura y escritura de archivos.
const path = require('path'); 

// =========== Read BBDD ===========================
let productListPath = path.join(__dirname, "../database/productsList.json");    // Ruta del archivo BBDD.
const products = JSON.parse(fs.readFileSync(productListPath, 'utf-8'));
let productList = products["products"]


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
// productList.forEach(product => {
//     if (product.category == 'boots'){
//         discount(product, 0.3)
//     }
//     else if(product.sku == 000003){
//         discount(product, 0.15)
//     }
//     else{
//         no_discount(product)
//     }
// });


// let filterProductsBy = (productList, param) => {
//     return productList.filter(product => {
//         return product[Object.keys(param)] == param[Object.keys(param)]
//     });
// }

// =========== Controller ============================
const productController = {
    index: (req,res) => {

        // if(Object.keys(req.query).length == 0){
        //     res.send(productList)
        // }
        // else{
        //     if (req.query){
        //         let filteredList = filterProductsBy(productList, req.query)
        //         res.send(filteredList)
        //     }
        //     else{
        //         filteredList = productList
        //         res.send(filteredList)
        //     }
        // }

        let filteredProducts = []

        if (req.query.category){
            filteredProducts = productList.filter((product) => {
                return product.category == req.query.category
            })
            res.send(filteredProducts)
        }
        else if (req.query.priceLessThan){
            filteredProducts = productList.filter((product) => {
                return product.price < req.query.priceLessThan
            })
            res.send(filteredProducts)
        }
        else{
            filteredProducts = productList
            res.send(filteredProducts)
        }
    }
}

// =========== Export Controller ===========================
module.exports = productController 