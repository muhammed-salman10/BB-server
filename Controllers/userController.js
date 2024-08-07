const users=require('../Modals/userModel')

const jwt=require('jsonwebtoken')



// register
exports.register=async(req,res)=>{
    console.log("Inside REGISTER API");
    const{username,email,password}=req.body 
    console.log(username,email,password);
    try{
         const existingUser = await users.findOne({ email})
         console.log(existingUser);
if(existingUser)
{
    res.status(406).send("Account Already Exists... Please Login !!!")
}
else{
    //add user to collection
    const newUser=new users({
       username,email,password,profile:""
       
    })
   await newUser.save()
    res.status(200).send(newUser)
}
       
    }
    catch(err){
        res.status(401).json(err)
    }





}

//login
exports.login=async(req,res)=>{
    console.log("Inside LOGIN API");
    const{email,password}=req.body 
    console.log(email,password);
    try{
         const existingUser = await users.findOne({ email,password})
         console.log(existingUser);
if(existingUser)
{
    const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY)
    res.status(200).json({existingUser,token})
}
else{

    res.status(404).json("Invalid Email/Password !!! ")
    
}
       
    }
    catch(err){
        res.status(401).json(err)
    }
}