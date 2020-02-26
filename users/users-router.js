const express = require('express')

const Users = require('./users-model.js');

const router = express.Router();

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
            res.status(500).json({ message: "Failed to get user" });
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

module.exports = router;