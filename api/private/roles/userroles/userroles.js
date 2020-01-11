const router = require('express').Router()
const dbModel = require('./userrolesModel')
const profileModel = require('../../profile/profileModle')

router.get("/", (req, res) => {
    return dbModel
        .findUserRolesByUserId(req.user.user_id)
        .then(userRoles => {
            res.status(200).json({ message: `Success`, user_roles:userRoles });
        })
        .catch(e => {
            res.status(404).json({ message: "Problem finding roles", ...e });
        });
});

router.post("/", (req, res) => {
    const {user_id} = req.user
    const {role_id} = req.body
    console.log(user_id)
    return dbModel
        .addUserRole({user_id,role_id})
        .then(async userRoles => {
            const profile = await profileModel.findByUserId(user_id);
            res.status(200).json({ message: `Success`,user_profile:profile});
        })
        .catch(e => {
            res.status(404).json({ message: "Problem finding roles", ...e });
        });
});


router.routes = [
    { route: '/roles/userroles', method: "GET", expects: {headers: "Authorization: Token"} },
    { route: '/roles/userroles', method: "POST", expects: {role_id:"1-4, the Higher The more power you get"} },
]

module.exports=router
