const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:emai,
        require:true
    },
   Mobile:{
    type:Number,
    require:true
   },
   password:String,
   timestamps:true
})

const userModel=mongoose.model('user',userSchema);

module.exports={userModel};
