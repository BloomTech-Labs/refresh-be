const express = require('express')

const Teams = require('./teams-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const AllTeams = await Teams.getAllTeams()
        res.status(200).json(AllTeams)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not retrieve teams from the database' })
    }
})

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Teams.getTeamById(id)
        .then(team => {
            if (team) {
                res.json(team);
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
    const team = req.body;
    try {
        if(team) {
            const AddedTeam = await Teams.addTeam(team)
            res.status(200).json(AddedTeam)
        } else {
            res.status(400).json({ error: 'Please provide a team' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not add team to the database' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const DeleteTeam = await Teams.deleteTeam(id)
        if(DeleteTeam) {
            res.status(200).json( {message: 'Deleted Team Successfully', count: DeleteTeam} )
        } else {
            res.status(400).json({ error: 'Team with specified ID does not exist' })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Could not remove team from the database' });
    }
})

router.put('/:id', async (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    try {
        const UpdatedTeam = await Teams.updateTeam(id, changes)
        if(UpdatedTeam) {
            res.status(200).json({ message: 'Update Successful', result: UpdatedTeam })
        } else {
            res.status(400).json({ error: 'Please make sure you filled out all required fields' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not update team in database' })
    }
})




module.exports = router;