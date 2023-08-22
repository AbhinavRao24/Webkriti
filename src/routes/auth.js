const express = require('express');
const router = express.Router();
const path = require('path');
// const authController = require('../controllers/authController');


// router.post('/register', authController.register);
// router.post('/login', authController.login);
router.get('/register',(req,res)=>{
    const loginPath = path.join(__dirname, '../foodreview/html/login.html');
    res.sendFile(loginPath);
})

module.exports = router;