//Loads .env file contents into process.env
require('dotenv').config()
const express =require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/Connection')

//express server
const bbserver=express()


//use cors in server
bbserver.use(cors())

//use json parse
bbserver.use(express.json())

//available file / folder from server to other app
bbserver.use('/uploads',express.static('./uploads'))

// use router
bbserver.use(router)


const PORT=3002

//to host bbserver : localhost:3002
bbserver.listen(PORT,()=>{
    console.log(`Blood Bank server started a port:${PORT}`);
})

// to resolve get http request to http://localhost:3002/
bbserver.get('/',(req,res)=>{
    res.send(`<h1 style=color:red>Blood Bank server started....<span style=color:green> and waiting for client request</span></h1>`)
})


// bbserver.post('/',(req,res)=>{
//     res.send("POST Request")
// })