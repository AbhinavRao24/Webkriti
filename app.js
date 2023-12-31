const express = require("express");
const app = express();
// const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
})
.catch(error => {
    console.error('MongoDB connection error:', error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/foodreview'));


const authRoutes = require('./src/routes/auth');


app.use('/', authRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});

