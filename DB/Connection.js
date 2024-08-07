const mongoose=require('mongoose')


const connectionString = process.env.CONNECTION_STRING


mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb Atlas connected Successfully with BBserver");
}).catch((reason)=>{
    console.log(reason);
    console.log("MongoDb connection Failed !!!");
})