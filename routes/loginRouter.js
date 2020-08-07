const express     = require("express");
const loginrouter = express.Router();
const nunjucks = require("nunjucks");
const user        = require("../models/user");


loginrouter.get("/",(req,res)=>{
    res.render("login.html");
})











module.exports = loginrouter;