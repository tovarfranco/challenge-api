// =========== General ==============================
const express = require('express');                                            
const router = express.Router();  

// =========== Controladores ==========================
const productController = require('../controllers/productController.js'); 


router.get('/', productController.list)

// =========== Export Router =========================
module.exports = router;  