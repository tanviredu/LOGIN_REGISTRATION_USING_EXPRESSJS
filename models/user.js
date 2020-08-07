const mongoose = require("mongoose");
const user     = new mongoose.Schema({
    
    fullname:{
        type:String
    },
    username:{
        type : String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
})
module.exports = mongoose.model('user',user);
