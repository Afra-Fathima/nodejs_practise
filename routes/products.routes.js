const express= require('express');
const Product=require('../models/products');
const { createProducts, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/products.controllers');

const router=express.Router();

router.post('/',createProducts);
router.get('/',getProducts);
router.get('/:id',getProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports=router;