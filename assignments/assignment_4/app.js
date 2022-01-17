const express = require("express");
const app = express();
// const faker = require("faker");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/assignment_4');
const User = require("./model/user")
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("views","./views");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',async(req,res)=>{
    const users= await User.find();
    res.render("index",{users})
})
app.listen(3000)

app.get('/form',(req,res)=>{
    res.render("form");
})

app.post('/user/add',async(req,res)=>{
    newuser = {
        name: req.body.name,
        email: req.body.email,
        isPromoted: null
    };
    await User.create(newuser);
    res.redirect('/');
})

app.post('/add',(req,res)=>{
    res.redirect('form')
})

app.put("/users/:id/", async (req, res) => {
    await User.updateOne({ _id: req.params.id }, [
        { $set: { isPromoted: { $not: "$isPromoted" } } },
    ]);
    res.redirect("/");
});

app.delete("/users/:id/", async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.redirect("/");
});