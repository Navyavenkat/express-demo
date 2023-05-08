const express=require('express')
const serviceRouter=express.Router()

serviceRouter.get('/',(request,response)=>
{
    response.send("this is our serrvices")
})

module.exports=serviceRouter