const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfiq = require('../Middlewares/multerMiddleware')



const router =new express.Router()

// register api
router.post('/register',userController.register)

//login api
router.post('/login',userController.login)

//add project api
router.post('/add-project',jwtMiddleware,multerConfiq.single('projectImage'),projectController.addProject)


//get  home project api
router.get('/get-home-project',projectController.getHomeProject)

//get  all project api
router.get('/get-all-project',jwtMiddleware,projectController.getAllProject)

//get  user project api
router.get('/get-user-project',jwtMiddleware,projectController.getUserProject)

//remove Project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)








//exporting router
module.exports=router