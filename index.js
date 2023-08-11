const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const User = require('./models/userModel');
const cors = require("cors");
const path = require("path");

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT ;
const mongoUri = process.env.MONGODB;

app.use(cors());

app.get("/",async (req,res)=>{
    
    const data =await User.find();
    res.json(data);

});

app.post("/inserting",async(req,res)=>{
    
    const data = new User(req.body);
    await data.save();

})
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



mongoose.connect(mongoUri).then(()=>{
    app.listen(PORT,()=>{
        console.log("app started",PORT);
    })
})