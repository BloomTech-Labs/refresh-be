const router = require('express').Router()
const dbModel = require('./teamModel')
router//Get Current Users Teams
  .get('/',(req,res)=>{
    return dbModel.findAll(req.user.user_id)
    .then(p=>res.status(200).json({message:`Success`,my_teams:[...p]}))
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
    body.team_lead = req.user.user_id //set user id
    return dbModel.add(body)
    .then(p=>{
      console.log("package",p)
      res.status(201).json({message:`Success`,...p})
    })
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
    route: "/teams",
    method: "GET",
    expects: { headers: "Authorization: Token" },
    returns: {}
},
{ route: "/teams/:id", method: "GET", expects: { headers: "Authorization: Token" }, returns: {} },
{ route: "/teams", method: "POST", expects: {team_name:"Avengers"}, returns: { id: 23, team_name: 'Avengers', team_lead: 1 } },
{ route: "/teams/:id", method: "PUT", expects: {team_name:"Mario Karters"}, returns: {} },
{ route: "/teams/:id", method: "DELETE", expects: {}, returns: {} }
];
module.exports=router
