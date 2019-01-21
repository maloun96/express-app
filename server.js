const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./routes/user.route');

mongoose.connect('mongodb://127.0.0.1/jwtauth');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
});

app.use('/user', user);

const PORT = 3000;

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});