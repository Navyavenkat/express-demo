const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("User Page")
})

router.get('/:id([0-9])',(req,res)=>{
res.send(req.user.name)
 
})


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

router.param('id',(req,res,next,id)=>{
  req.user=users[id]
  next();
})
// const UsersArrayLength=users.length;
module.exports=router;