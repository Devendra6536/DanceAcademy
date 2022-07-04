const express = require("express");
const path = require("path");
const app = express();
const port = 8000;


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
app.get("/contact", (req, res)=>{ 
    const param = { };
    res.status(200).render("contact.pug",param);
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});