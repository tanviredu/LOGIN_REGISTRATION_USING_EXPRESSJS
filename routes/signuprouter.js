const express      = require("express");
const signuprouter = express.Router();
const mongoose     = require("mongoose");
const nunjucks     = require("nunjucks");
const user         = require("../models/user");

signuprouter.get("/",(req,res)=>{
    res.render("registration.html");
})

// get the data from he 
signuprouter.post("/", async (req,res)=>{
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;

    cred = {'fullname':fullname,'username':username,'password':password};
    var u = new user(cred);
    try{
        console.log("[+] Data is good condition");
        await u.save();
        res.redirect("/login");
    }catch(err){
        console.log(err);
        res.redirect("/")
    }

})









module.exports = signuprouter;
