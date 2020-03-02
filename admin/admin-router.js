const router = require('express').Router();
const Admin = require('../admin/admin-model');
const jwt = require('jsonwebtoken')


// add in more validation
router.post('/register', async (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    try {
        if(user) {
            const AddUser = await Users.addUser(user)
            const token = signToken(user)
            res.status(201).json({ message: `Thank you for registering, ${user.first_name}!`, add: AddUser, token: token })
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

    return jwt.sign(payload, process.env.SECRET, options)
}

module.exports = router;