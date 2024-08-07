const projects=require('../Modals/projectModel')

//add project
exports.addProject=async(req,res)=>{
    console.log("Inside add project API");
    const userId=req.payload
    const {name,address,district,age,group,phone}=req.body
    const projectImage=req.file.filename
    console.log(name,address,district,age,group,phone,projectImage,userId);

    try{
        const existingProject=await projects.findOne({phone})
        if(existingProject)
        {
            res.status(406).json("project Phone number is Already exists !!! please try another....")
        }
        else{
           const newProject=new projects({
            name,address,district,age,group,phone, projectImage,userId
           })
           await newProject.save()
           res.status(200).json(newProject)

        }
    }
    catch(err)
    {
       res.status(401).json(err)
    }



    // res.status(200).json("Add project request recived!!!")
}

//get home project
exports.getHomeProject=async(req,res)=>{
    try{
       const homeProjects=await projects.find().limit(3)
       res.status(200).json(homeProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//get all project

exports.getAllProject=async(req,res)=>{
    const searchKey=req.query.search
    const query={
        group:{
            $regex:searchKey,$options:"i"
        }

    }
    try{
       const allProjects=await projects.find(query)
       res.status(200).json(allProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}


//get user project

exports.getUserProject=async(req,res)=>{
    const userId=req.payload
    try{
       const userProjects=await projects.find({userId})
       res.status(200).json(userProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//remove project

exports.removeProject=async (req,res)=>{
    console.log("Inside Remove Project ");
    const {pid}=req.params

    try{
         const projectDetails = await projects.findByIdAndDelete({_id:pid})
         res.status(200).json(projectDetails)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}
