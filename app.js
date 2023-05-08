const express=require('express')
const app=express()
const usersRouter=require('./users.js')
const homePage=require('./home.js')
const aboutRouter=require('./about.js')
const serviceRouter=require('./service.js')
const contactRouter=require('./contact.js')

app.use(express.static('public'))

app.set('view engine','ejs')
app.get('/',(request,response)=>{
    //response.send("hi")
    //reponse.sendStatus(404)
    //response.render('index')
    response.render('index')

   
})


app.use('/users',usersRouter)
app.use('/home',homePage)
app.use('/about',aboutRouter)
app.use('/service',serviceRouter)
app.use('/contact',contactRouter)
app.listen(3500)