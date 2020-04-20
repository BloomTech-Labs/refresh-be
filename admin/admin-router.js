const router = require('express').Router();
const Admin = require('./admin-model.js');
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets.js')
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {
    let admin = req.body;
    const hash = bcrypt.hashSync(admin.password, 8);
    admin.password = hash;

    try {
        if(admin) {
            const AddAdmin = await Admin.addAdmin(admin)
            const token = signToken(admin)
            res.status(201).json({ message: `Thank you for registering, admin!`, add: AddAdmin, token: token })
        } else {
            res.status(400).json({ errorMessage: 'Please fill out all required fields' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ errorMessage: 'Error adding user to the database' })
    }
})

router.post('/login', (req, res) => {
    let { email, password } = req.body;
    Admin.getAdminBy({ email })
        .first()
        .then(admin => {
            if(admin && bcrypt.compareSync(password, admin.password)) {
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