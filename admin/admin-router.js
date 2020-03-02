const router = require('express').Router();
const Admin = require('../admin/admin-model');
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets.js')

router.post('/login', (req, res) => {
    let { email, password } = req.body;
    Admin.getAdminBy({ email })
        .first()
        .then(admin => {
            if(admin) {
                const token = signToken(admin)

                res.status(200).json({ message: 'Admin login sucessful', token: token })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not login admin' })
        })
})

function signToken(user) {
    const payload = {
        user
    }

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;