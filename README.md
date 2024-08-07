  
  
  
    --------- server Using Express JS ---------

 1. create a folder for server
 2. create package.jason file : using npm init -y
 3. install external packages to create server : using npm , npm i express cors dotenv
 4. create .env file : to hold environmental variable 
 5. create .gitignore file , and add node_modules , .env
 6. create index.js file
 7. create express server in index.js
    - import dotenv package, call config method : To load content of .env file into process.env
    - import express to a variable
    - import cors to a variable
    - create express server : call express()
    - use cors in express server : 
    - create a port to host server app 
    - server must listen the port for client request 
    - to resolve client request (http get/post/put/delete request)    
      - server.httpMethod(path,request handler function (req,res)=>{})
    - create controllers folder in server app
      - create js  file for user management
       - Define logic for each request handles 
    - create a routes folder in server app
       - create a router.js file inside the folder
          - import express
          - to set up routes for express use router class


 8. To run server app : use command , node index.js and also update it as start command in package .json script     