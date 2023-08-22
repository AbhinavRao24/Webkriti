const express = require('express');
const router = express.Router();
const path = require('path');
// const authController = require('../controllers/authController');


// router.post('/register', authController.register);
// router.post('/login', authController.login);
router.get('/register',(req,res)=>{
    const Path = path.join(__dirname, '../foodreview/html/signup.html');
    res.sendFile(Path);
})

router.get('/signin',(req,res)=>{
    const Path = path.join(__dirname, '../foodreview/html/login.html');
    res.sendFile(Path);
})

module.exports = router;