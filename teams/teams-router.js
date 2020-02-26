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




module.exports = router;