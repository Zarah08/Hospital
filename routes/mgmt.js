let express = require('express')
let router = express.Router()
let userModel = require('../models/schema')


router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/about',(req,res)=>{
    res.render('about')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})
router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.get('/appointment',(req,res)=>{
    res.render('appointment')
})
router.post('/signup',(req,res)=>{
    
    let users=new userModel({
        username:req.body.username,
        email:req.body.email,
        password: req.body.password
    })
    users.save()
    res.redirect('/')
})

module.exports=router