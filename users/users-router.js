const express = require('express')
const router = express.Router();
const Users = require('./users-model.js');
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets')
const bcrypt = require('bcryptjs');

// Register/ Login Code
router.post('/register', async(req,res)=>{
    let user = req.body;
    const hash = bcrypt.hashSync(user.password,8);
    user.password=hash;
    try {
        if(user) {
            const AddUser= await Users.addUser(user)
            const token = signToken(user)
            res.status(201).json({message: `Thank you for registering, ${user.first_name}!`, add: AddUser, token:token})
        } else {
            res.status(400).json({errorMessage: 'Please fill out all required fields'})
        }
    } catch( error){
        console.log(error)
        res.status(500).json({ errorMessage: 'Error adding user to the database' })
    }
})
router.post('/login', (req, res) => {
    let { email, password } = req.body;
    Users.getUserBy({ email })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = signToken(user)
                res.status(200).json({ message: `User login successful${user}`, token: token })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not login user' })
        })
})



router.get('/', async (req, res) => {
    try {
        const AllUsers = await Users.getUsersProfiles()
        res.status(200).json(AllUsers)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not retrieve users from the database' })
    }
})

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Users.getUserProfileById(id)
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({
                    message: "Could not find user with given id.",
                });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Failed to get user" });
        });
});

router.get("/:id/team", (req, res) => {
    const { id } = req.params;

    Users.getUserTeamName(id)
        .then(name => {
            if (name) {
                res.json(name);
            } else {
                res.status(404).json({
                    message: "Could not find team with given id.",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get team" });
        });
});


router.post('/', async (req, res) => {
    const user = req.body;
    try {
        if(user) {
            const AddedUser = await Users.addUser(user)
            res.status(200).json(AddedUser)
        } else {
            res.status(400).json({ error: 'Please provide a user' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not add user to the database' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const DeleteUser = await Users.deleteUser(id)
        if(DeleteUser) {
            res.status(200).json( {message: 'Deleted User Successfully', count: DeleteUser} )
        } else {
            res.status(400).json({ error: 'User with specified ID does not exist' })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Could not remove user from the database' });
    }
})

router.put('/:id', async (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    try {
        const UpdatedUser = await Users.updateUser(id, changes)
        if(UpdatedUser) {
            res.status(200).json({ message: 'Update Successful', count: UpdatedUser })
        } else {
            res.status(400).json({ error: 'Please make sure you filled out all required fields' })
        }
    } catch(error) {
        console.log(error)
        console.log(error)
        res.status(500).json({ error: 'Could not update user in database' })
    }
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