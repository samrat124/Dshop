 const app=require('./app')
 const dotenv=require('dotenv');


 dotenv.config({path:'dshop-server/config/config.env'})



 app.listen((process.env.PORT),()=>{
    console.log(`server started on port${process.env.PORT}`)
 })