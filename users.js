const express=require('express')
const usersRouter=express.Router()

const users=[{
    idno:1,
    name:'web'
  },
  {
    idno:2,
    name:'DataScience'
  },
  {
    idno:3,
    name:'ML engineer'
  },
  {
    idno:4,
    name:'Ai engineer'
  }]

usersRouter.get('/',(request,response)=>{
    response.send("this is userspage")
})

usersRouter.get('/new',(request,response)=>{
    response.render('users/new')
})

usersRouter.post('/',(request,response)=>{
    //console.log(request.body.FirstName)
    users.push({name:request.body.FirstName})
    response.redirect(`/users/${users.length}`)
})
usersRouter.get('/html',(request,response)=>{
    response.render('contact')
})
module.exports=usersRouter