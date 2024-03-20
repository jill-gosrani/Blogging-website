import express from 'express';
import 'dotenv/config';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();
const PORT = 3000 || process.env.PORT;


app.use(express.static('public'))

app.use(expressEjsLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.send("Hello!");
});
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
});




