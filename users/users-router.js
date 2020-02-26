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

module.exports = router;