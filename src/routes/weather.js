const express = require('express');
const weatherRouter = express.Router();
const axios = require ('axios');
const bodyParser = require('body-parser');

const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
const APIkey = "74ebcd11815cef6d45c5d07f3da91f94";

// It is designed to route HTTP Get request to the specified path,associating them with designated callback functions.
weatherRouter.get('/', (req, res) => {
    res.render('index', {info: ''});
});

// In this we can send a data to my server body.
weatherRouter.post("/", async (req, res,next) => {
    try {
        let search = req.body.search
        const url = `${API_URL}q=${search}&appid=${APIkey}&units=metric`;
        const weatherGet =await axios.get(url);
        
        res.render('search',{info:weatherGet.data});
        console.log(weatherGet.data);
    } catch(error) {
        if (error.response) {
            res.render('search', { info : null });
           
        } else if (error.request) {
            res.render('search', { info : null });
           
        } else {
            res.render('search', { info : null });
            
        }
        console.log(error.config);
    };
});

module.exports = weatherRouter