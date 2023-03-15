const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config=require('../config/config.env');

const connectDB=async()=>{
    return new Promise((res,rej)=>{
     mongoose.connect(process.env.DB_CONNECTION_URL,(err)=>{
        if(err){
            console.log('error in connecting database');
            return rej(err);
        }
        console.log('connected to database');
        res()
     })
    })
}

module.exports={connectDB}

