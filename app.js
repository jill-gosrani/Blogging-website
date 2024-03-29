import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import dotenv from 'dotenv';
import mainRouter from './server/routes/main.js';
dotenv.config();


const app = express();
const PORT = 3000 || process.env.PORT;


app.use(express.static('public'))

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', mainRouter);
    
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
});




