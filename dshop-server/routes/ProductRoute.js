const express=require('express');
const { getAllProducts } = require('../controllers/ProductControllers');
const router=express.Router();
router.route('/product').get(getAllProducts)

module.exports=router