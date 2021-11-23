// =========== General ==============================
const express = require('express');                                            
const router = express.Router();  

// =========== Controladores ==========================
const productController = require('../controllers/productController.js'); 


router.get('/', productController.index)

// =========== Export Router =========================
module.exports = router;  