
const express = require('express');
const ejs = require('ejs')
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')))

const images =["public/1200px-Flag_of_Brazil.svg.png", "ar-flag.webp", "brazil", "germany", "Flag-Spain", "Flag_of_Italy"]


app.get("/", (req, res)=>{
    res.render("index")

})

app.get("/home", (req,res)=>{
    res.render("home")
})

app.listen(3000, ()=>{
    console.log("We are up and running")
})