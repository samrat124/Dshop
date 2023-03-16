
const product=require('../model/productModel')

exports.getAllProducts=async(req,res,next)=>{

    const products=await product.find()
    res.status(200).json({message:'server is working',
    success:true,
    products,
})
}