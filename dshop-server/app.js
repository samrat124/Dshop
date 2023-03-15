const express=require('express');
const app=express();
const product=require('./routes/ProductRoute')
app.use('/product',product)


module.exports=app;