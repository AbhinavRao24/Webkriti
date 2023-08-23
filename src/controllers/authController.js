const user = require('../models/user');

const authController = {
    signup: (req, res) => {
      console.log(req.body);
      const myData = new user(req.body);
      myData.save()
      .then(() => {
        res.send('signed up successfully!');
      })
      .catch(() => {
        res.send('cant signup.');
      });
    },
  
    login: (req, res) => {
      user.findOne({username:req.body.username,password:req.body.password})
      .then((user)=>{
        if(user){
          console.log(user);
          res.send("login successful");
        } else {
          res.send("incorrect login details");
        }
      })
      .catch(()=>{
        res.send("incorrect login details");
      })
    }
  };
  
  module.exports = authController;
  