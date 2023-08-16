const express = require("express");
const app = express();
const bodyParser = require('body-parser');

var path = require("path");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const mySchema = new mongoose.Schema({
    username: String,
    password: String
  });

  const MyModel = mongoose.model('MyModel', mySchema);
  app.use('/',bodyParser.urlencoded({ extended: true }));

  app.use('/',express.static('foodreview'));

  app.get('/', (req, res) => {
    res.sendFile(__dirname+"/foodreview/html/login.html");
  })
  
  app.post('/', (req, res) => {
    const myData = new MyModel(req.body);
    myData.save()
      .then(() => {
        res.send('Data saved successfully!');
      })
      .catch(() => {
        res.send('Error saving data.');
      });
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});


