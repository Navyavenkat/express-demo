const express=require('express')
const aboutRouter=express.Router()

aboutRouter.get('/',(request,response)=>{
    response.send("this is about")
})

module.exports=aboutRouter