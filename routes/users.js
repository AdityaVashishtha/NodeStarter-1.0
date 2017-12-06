const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('USERS HOME PAGE');
});

router.get('/login',(req,res)=>{
    res.render('login',{title:'Login'});
});

router.get('/signup',(req,res)=>{
    res.render('signup',{title:'Sign Up'});
});

router.post('/login',(req,res)=>{
    res.send('Login authenticate');
});

module.exports = router