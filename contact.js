const express=require('express')
const contactRouter=express.Router()

contactRouter.get('/',(request,response)=>
{
    response.send("to contact us")
})

module.exports=contactRouter