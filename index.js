import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import fs from 'fs/promises';

let json = JSON.parse(await fs.readFile('./allBlogs.json', 'utf8'));
console.log(json);
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req, res)=>{
    res.render("index.ejs");
});

app.post("/add",(req,res)=>{
    console.log("in add");
    console.log(req.body);
    let newBlogId = Object.keys(json).length;
    json[newBlogId] = { title:req.body['title'], blog: req.body['blog'] };
    let updatedJson = JSON.stringify(json, null, 2);
    console.log(updatedJson);
    fs.writeFile('./allBlogs.json', updatedJson);
    res.redirect('/');
});
app.post("/new",(req,res)=>{
    console.log("test");
    res.render("./newBlog.ejs");
    
});

app.listen(port,()=>{
    console.log(`You are listening to ${port}`);
});