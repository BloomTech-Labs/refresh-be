const router = require('express').Router()
const dbModel = require('./pointsModel')
router
  .get('/',(req,res)=>{
    return dbModel.findAll()
    .then(p=>{res.status(200).json({message:`Success`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
router
  .get('/:id',(req,res)=>{
    const {id}=req.params
    return dbModel.findById(id)
    .then(p=>{res.status(200).json({message:`Success`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
  
router
  .post('/',(req,res)=>{
    const {body}=req
    return dbModel.add(body)
    .then(p=>{res.status(201).json({message:`Success`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
router
  .put('/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    return dbModel.editById(id,body)
    .then(p=>{res.status(200).json({message:`Success`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
router
  .delete('/:id',(req,res)=>{
    const {id}=req.params
    
    return dbModel.remove(id)
    .then(p=>{res.status(201).json({message:`Success`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})

router.routes = [{
    route: "/points",
    method: "GET",
    expects: { headers: "Authorization: Token" },
    returns: {}
},
{ route: "/points/:id", method: "GET", expects: { headers: "Authorization: Token" }, returns: {} },
{ route: "/points", method: "POST", expects: {}, returns: {} },
{ route: "/points/:id", method: "PUT", expects: {}, returns: {} },
{ route: "/points/:id", method: "DELETE", expects: {}, returns: {} }
];
module.exports=router
