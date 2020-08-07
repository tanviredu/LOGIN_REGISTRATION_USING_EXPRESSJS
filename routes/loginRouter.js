const express     = require("express");
const loginrouter = express.Router();
const mongoose    = require("mongoose")
const nunjucks = require("nunjucks");
const user        = require("../models/user");


loginrouter.get("/",(req,res)=>{
    res.render("login.html");
})




// getting data from the login
loginrouter.post("/",async(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    u = {'username':username,'password':password};
    var result = await user.collection.findOne(u);
    console.log(result);
    if (result == null){
        console.log("user not found");
        res.redirect("/")
    }else{
        console.log("welcome  "+result.username);
    }
    
})









module.exports = loginrouter;