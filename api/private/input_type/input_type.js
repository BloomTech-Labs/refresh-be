const router = require('express').Router()
const dbModel = require('./inputTypeMode')
router
    .get('/', (req, res) => {
        return dbModel.findAll()
            .then(p => { res.status(200).json({ message: `Success`, ...p }) })
            .catch(e => { res.status(404).json({ message: 'SOMEMESSAGE', ...e }) })
    })
router
    .get('/:id', (req, res) => {
        const { id } = req.params
        return dbModel.findById(id)
            .then(p => { res.status(200).json({ message: `Success`, ...p }) })
            .catch(e => { res.status(404).json({ message: 'SOMEMESSAGE', ...e }) })
    })

router
    .post('/', (req, res) => {
        const { body } = req
        return dbModel.add(body)
            .then(p => { res.status(201).json({ message: `Success`, ...p }) })
            .catch(e => { res.status(404).json({ message: 'SOMEMESSAGE', ...e }) })
    })
router
    .put('/:id', (req, res) => {
        const { id } = req.params
        const { body } = req

        return dbModel.editById(id, body)
            .then(p => { res.status(200).json({ message: `Success`, ...p }) })
            .catch(e => { res.status(404).json({ message: 'SOMEMESSAGE', ...e }) })
    })
router
    .delete('/:id', (req, res) => {
        const { id } = req.params

        return dbModel.remove(id)
            .then(p => { res.status(201).json({ message: `Success`, ...p }) })
            .catch(e => { res.status(404).json({ message: 'SOMEMESSAGE', ...e }) })
    })

router.routes = [{
        route: "/inputtypes",
        method: "GET",
        expects: { headers: "Authorization: Token" },
        returns: {}
    },
    {
        route: "/inputtypes/:id",
        method: "GET",
        expects: { headers: "Authorization: Token" },
        returns: {}
    },
    {
        route: "/inputtypes",
        method: "POST",
        expects: { type: "string" },
        returns: {}
    },
    {
        route: "/inputtypes/:id",
        method: "PUT",
        expects: { type: "string" },
        returns: {}
    },
    { route: "/inputtypes/:id", method: "DELETE", expects: {}, returns: {} }
];
module.exports = router;