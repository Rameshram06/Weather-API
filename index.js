// This file will be the root of our website
//In this file, We need to require some of the dependencies that we will be working with and we also need to set up our server.
// IN this file i imported express,axios,body-parser.
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));

// It is used to assign the setting name to value.we can store any value that you want,but certain names can be used to configure the behavior of the server.

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));

// It is a section of code that directs http requests to specific functions.
const weatherRouter = require('./src/routes/weather');

app.use('/',weatherRouter);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});