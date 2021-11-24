let chai = require("chai")
let chaiHttp = require("chai-http")
let server = require("../app")

//Assertion Style
chai.should();

chai.use(chaiHttp)

describe("Products Api", () => {

    //Test : GET Route

    describe("GET /products", () => {
        
        it("It should get all the products", (done) => {
            chai.request(server)
                .get("/products")
                .end((err,response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(5)
                done();
                })
        })

        it("The products should be with the correct structure", (done) => {
            chai.request(server)
                .get("/products")
                .end((err,response) => {
                    response.body.forEach(element => {
                        element.should.be.a('object')
                        element.should.have.property('sku')
                        element.should.have.property('name')
                        element.should.have.property('category')
                        element.should.have.property('price')
                        element.sku.should.be.a('string')
                        element.name.should.be.a('string')
                        element.category.should.be.a('string')
                        element.price.should.be.a('object')
                        element.price.should.have.property('original')
                        element.price.should.have.property('final')
                        element.price.should.have.property('discount_percentage')
                        element.price.should.have.property('currency')
                        element.price.original.should.be.a('number')                  
                        element.price.final.should.be.a('number')
                        element.price.currency.should.be.a('string')
                        if (element.price.discount_percentage){
                            element.price.discount_percentage.should.be.a('string')
                        }
                    });
                done();
                })
        })

        it("It should not get all the products", (done) => {
            chai.request(server)
                .get("/product")
                .end((err,response) => {
                    response.should.have.status(404);
                done();
                })
        })

    })


    describe("GET /products?category=boots", () => {
        
        it("It should get all products by category boots", (done) => {
            const category = 'boots'
            chai.request(server)
                .get("/products?category="+category)
                .end((err,response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    let res = response.body
                    response.body.forEach(element => {
                        element.should.be.a('object')
                        element.should.have.property('sku')
                        element.should.have.property('name')
                        element.should.have.property('category').eq('boots')
                        element.should.have.property('price')
                        element.price.should.be.a('object')
                    });
                done();
                })
        })
    })

    describe("GET /products?category=sneakers", () => {
        
        it("It should get all products by category sneakers", (done) => {
            const category = 'sneakers'
            chai.request(server)
                .get("/products?category="+category)
                .end((err,response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    let res = response.body
                    response.body.forEach(element => {
                        element.should.be.a('object')
                        element.should.have.property('sku')
                        element.should.have.property('name')
                        element.should.have.property('category').eq('sneakers')
                        element.should.have.property('price')
                        element.price.should.be.a('object')
                    });
                done();
                })
        })
    })

    describe("GET /products?category=sandals", () => {
        
        it("It should get all products by category sandals", (done) => {
            const category = 'sandals'
            chai.request(server)
                .get("/products?category="+category)
                .end((err,response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    let res = response.body
                    response.body.forEach(element => {
                        element.should.be.a('object')
                        element.should.have.property('sku')
                        element.should.have.property('name')
                        element.should.have.property('category').eq('sandals')
                        element.should.have.property('price')
                        element.price.should.be.a('object')
                    });
                done();
                })
        })
    })


    describe("GET /products?priceLessThan=90000", () => {
        
        it("It should get all products with price less than 90000", (done) => {
            const priceLessThan = '90000'
            chai.request(server)
                .get("/products?priceLessThan="+priceLessThan)
                .end((err,response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    let res = response.body
                    response.body.forEach(element => {
                        element.should.be.a('object')
                        element.should.have.property('sku')
                        element.should.have.property('name')
                        element.should.have.property('category')
                        element.should.have.property('price')
                        element.price.should.be.a('object')
                    });
                done();
                })
        })
    })


})
