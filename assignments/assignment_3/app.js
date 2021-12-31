const express = require("express");
const app = express();
const faker = require("faker");
var bodyParser = require("body-parser");

app.set("views","./views");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));

var users = [];
for (let i=0; i<3; i++){
    users.push({
        name:faker.name.findName(),
        email:faker.internet.email()
    })
}


app.get('/',(req,res)=>{
    res.render("index",{users})
})
app.listen(3000)

app.get('/form',(req,res)=>{
    res.render("form")
})

app.post('/user/add',(req,res)=>{
    users.push({
        name:req.body.name,
        email:req.body.email
    })
    res.redirect('/');
})

app.post('/add',(req,res)=>{
    res.redirect('form')
})