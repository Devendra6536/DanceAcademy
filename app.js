const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser")
const port = process.env.PORT || 8000;
require("dotenv").config();
const pug=require("pug");
var mongoose = require('mongoose');


mongoose.connect(process.env.MONGOOSE_URL_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>
console.log("connected successfully")).catch((err)=>
console.log(err));
// creating the schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

const Contact = mongoose.model('contact', contactSchema);


app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 

app.get("/", (req, res)=>{ 
    const con = "this is the  best content on my website";
    const param = {'title':'Cricket is the best game', 'content':con};
    res.status(200).render("home.pug",param);
});

app.get("/about", (req, res)=>{ 
    const param = { };
    res.status(200).render("about.pug",param);
});
app.get("/service", (req, res)=>{ 
    const param = { };
    res.status(200).render("service.pug",param);
});
app.get("/class", (req, res)=>{ 
    const param = { };
    res.status(200).render("contactAlert.pug",param);
});
app.get("/contact", (req, res)=>{ 
    const param = { };
    res.status(200).render("contact.pug",param);
});

app.post("/contact",async (req, res)=>{
    var myData = new Contact(
        {
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            desc:req.body.desc
        });
        await Contact.create(myData).then(()=>{
            res.status(200).render("contactAlert.pug");
        }).catch(()=>{
            res.status(400).send("item was not saved to the database")
        })
    // myData.save().then(()=>{
    //     res.send("This item has been saved to the database")
    // })
    // res.status(200).render("contactAlert.pug");
    // res.end("<h1>404 Not Found</h1> ");
});
app.listen(port, () =>{
    console.log(`The application started successfully on port ${port}`);
});