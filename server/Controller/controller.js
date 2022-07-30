 const{User1,validate}  = require('../model/schema')
 const bcrypt = require('bcrypt');
 const jwt=require('jsonwebtoken');
//  const mongoose=require("mongoose");
//  const mongoObjectId = mongoose.Types.ObjectId();



//signup controller
exports.signup=async(req,res)=>{
    console.log("signup reached");
    console.log(req.body)
    try{
        // const {error}=validate(req.body);
        // if(error){
        //     return res.status(400).send({message:error.details[0].message});
        // }
        const user=await User1.findOne({email:req.body.email})
        if(user){
            return res.status(409).send({message:"user with given email already exists"})
        }
        const hashPassword=await bcrypt.hash(req.body.password,10);
        await new User1({...req.body,password:hashPassword}).save();
        res.status(200).send({message:"User created successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).send({message:"Internal server error"})
    }
}
exports.login=async (req,res)=>{
    console.log("login reached")
    console.log(req.body)
    try{
        // const {error}=validate(req.body);
        // if(error){
        //     return res.status(400).send({message:error.details[0].message});
        // }
        const user= await User1.findOne({email:req.body.email})
        if(user.blockStatus){
            return res.status(401).send({data:"Blocked" ,message:"Blocked"})
        }

        if(!user){
            return res.status(401).send({ data:"Invalid", message:"Invalid Email or Password"})
        }
        const validPassword= await bcrypt.compare(req.body.password,user.password)
        if(!validPassword){
            return res.status(401).send({ data:"Invalid",message:"Invalid Email or Password"});
        }
        const token=user.generateAuthToken();
       
        res.status(200).send({data:token,message:"Loggen in successfully"})
    } 

    catch(error){
        console.log(error)
        res.status(500).send({message:"internal Server Error"})
    }

}

exports.home=async (req,res)=>{

}


exports.adminLogin=async(req,res)=>{
    adminCredentials={
        email:"admin@gmail.com",
        password:"admin123"
    }
    if(req.body.email==adminCredentials.email && req.body.password==adminCredentials.password){
        const adminToken=jwt.sign({_id:adminCredentials.email},"secret",{expiresIn:"7d"});
       
        res.status(200).send({data:adminToken,message:"Admin Logged  successfully"});
    }
}

exports.adminHome= async (req,res)=>{
     const users= await User1.find();
    res.status(200).send({data:users,message:"User data fetched succefully"})

}

exports.deleteUser= async (req,res)=>{
    console.log(req.body)
   await  User1.deleteOne({_id:req.body.user})
    res.status(200).send({data:[]})
}

exports.blockUser= async (req,res)=>{
    
   await  User1.updateOne({_id:req.body.user},{$set:{blockStatus:true}})
    res.status(200).send({data:[]})

}

exports.unblockUser= async (req,res)=>{
    
    await  User1.updateOne({_id:req.body.user},{$set:{blockStatus:false}})
     res.status(200).send({data:[]})
 
 
 }