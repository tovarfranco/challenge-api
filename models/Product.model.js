// =========== General ==============================
const fs = require('fs');
const path = require('path');  

// =========== Modelo =================================
const Product = {

    /*** DB Name ***/
	fileName: path.join(__dirname, "../database/productsList.json"),                

    /*** DB Read ***/
	readData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))["products"];
	},

    /*** All products ***/
	findAll: function () {
		return this.readData();
	},

    /*** Look by field ***/
	findByField: function (param) {
		let filteredProducts = []
		let productList = this.findAll();
		if (param.category){
            filteredProducts = productList.filter((product) => {
                return product.category == param.category
            })
        }
        else if (param.priceLessThan){
            filteredProducts = productList.filter((product) => {
                return product.price < param.priceLessThan
            })
        }
		return filteredProducts;
	}
}

// =========== Export Model =========================
module.exports = Product;