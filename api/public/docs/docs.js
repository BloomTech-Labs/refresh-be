const router = require('express').Router()

router
  .get('/',(req,res)=>{
    //console.log("Available Routes",req.routes)
    res.render('index',{user: "Great User",title:"homepage",routes:req.routes});
})

module.exports=router
