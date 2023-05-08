const express=require('express')
const homePage=express.Router()

homePage.get('/',(request,response)=>{
    response.send("welcome to Homepage")
})



module.exports=homePage