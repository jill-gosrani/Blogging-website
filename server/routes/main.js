import express from 'express';
const router = express.Router();

router.get("/",(req,res)=>{
    res.render('index',{
        title:"NodeJS Blog",
    });
});

router.get("/about",(req,res)=>{
    res.render('about',{
        title: "about",
    });
});
// module.exports = router;
export default router;
