const mongoose=require("mongoose")

const projectSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    group:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    projectImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }

})

const projects=mongoose.model("projects",projectSchema)
module.exports=projects