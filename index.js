import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { createRequire } from 'module';
import { title } from "process";
import fs from 'fs/promises';

let json = fs.readFile('./allBlogs.json');
console.log(json);
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req, res)=>{
    res.render("index.ejs");
});

app.post("/post",(req,res)=>{
    res.render("newBlog.ejs",{
        title: req.body["title"],
        blogText : req.body["blog"],
    });
    json.title.push(title);
    json.blogs.push(blogText);
    json.ids.push(json.blogs.length -1);
});

app.listen(port,()=>{
    console.log(`You are listening to ${port}`);
});