const express  = require("express");
const mongoose = require("mongoose");
const config   = require("./config");
const nunjucks = require("nunjucks");
const user     = require("./models/user");
const app      = express();
const PORT     = 8000;



const loginrouter  = require("./routes/loginRouter");
const signuprouter = require("./routes/signuprouter"); 

app.use('/static',express.static("public"));
app.use(express.urlencoded({extended:true}));

nunjucks.configure('views',{
    autoescape : true,
    express    : app
});

app.use("/login",loginrouter);
app.use("/register",signuprouter);








const url     = config.mongourl;
const connect = mongoose.connect(url);
connect.then(()=>{
    app.listen(PORT);
    console.log(`SERVER STARTED AT PORT ${PORT}`);
})
