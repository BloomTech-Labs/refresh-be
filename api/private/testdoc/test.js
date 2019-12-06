const router = require('express').Router()
const dbModel = require('./testModel')
router
  .get('/',(req,res)=>{
    return dbModel.findAll()
    .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
router
  .get('/:id',(req,res)=>{
    const {id}=req.params
    return dbModel.findAllById(id)
    .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
  
router
  .post('/',(req,res)=>{
    const {body}=req
    return dbModel.add(body)
    .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
router
  .put('/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    return dbModel.editById(id)
    .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
router
  .delete('/:id',(req,res)=>{
    const {id}=req.params
    
    return dbModel.remove(id)
    .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})

router.routes = [
    {route:'/test', method:"GET", expects:{}, returns:{}},
    {route:'/test/:id', method:"GET", expects:{}, returns:{}},
    {route:'/test', method:"POST", expects:{}, returns:{}},
    {route:'/test', method:"PUT", expects:{}, returns:{}},
    {route:'/test/:id', method:"DELETE", expects:{}, returns:{}},
  ]
module.exports=router
