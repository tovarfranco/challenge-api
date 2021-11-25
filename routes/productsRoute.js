// =========== General ==============================
const express = require('express');                                            
const router = express.Router();  

// =========== Controllers ==========================
const productController = require('../controllers/productController.js'); 

// =========== Routes ==========================
router.get('/', productController.list)

// =========== Export Router =========================
module.exports = router;  