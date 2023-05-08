const express=require('express')
const usersRouter=express.Router()

usersRouter.get('/',(request,response)=>{
    response.send("this is userspage")
})






module.exports=usersRouter