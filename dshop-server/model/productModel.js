const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title: String,
    image: String,
    category: String,
    price: Number,
    ratings: Number
})

const productModel=mongoose.model('product',productSchema)

module.exports={productModel};