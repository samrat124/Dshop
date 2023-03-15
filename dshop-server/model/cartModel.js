const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
    products:[{
        _id:mongoose.Types.ObjectId,
        title: String,
        image: String,
        category: String,
        price: Number,
        ratings: Number,
        quantity: { type: Number, default: 1 }
    }],
    subtotal: { type: Number, default: 0 },
    userId: mongoose.Types.ObjectId
}, {
    timestamps: true
})

const cartModel=mongoose.model('cart',cartSchema);

module.exports={cartModel};