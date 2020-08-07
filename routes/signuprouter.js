const express      = require("express");
const signuprouter = express.Router();
const nunjucks = require("nunjucks");
const user         = require("../models/user");

signuprouter.get("/",(req,res)=>{
    res.render("registration.html");
})









module.exports = signuprouter;
