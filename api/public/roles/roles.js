const router = require("express").Router();
const dbModel = require("./roles-model");

router.get("/", (req, res) => {
    return dbModel
        .findAll()
        .then(userRoles => {
            res.status(200).json({ message: `SUCCESS`, ...userRoles });
        })
        .catch(e => {
            res.status(404).json({ message: "Problem finding roles", ...e });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    return dbModel
        .findAllRolesById(id)
        .then(userRoles => {
            res.status(200).json({ message: `SUCCESS`, ...userRoles });
        })
        .catch(e => {
            res.status(404).json({ message: "Unable to find the user's role", ...e });
        });
});

router.post("/", (req, res) => {
    const { body } = req;
    return dbModel
        .add(body)
        .then(userRoles => {
            res.status(201).json({ message: `SUCCESS`, ...userRoles });
        })
        .catch(e => {
            res.status(404).json({ message: "Problem creating user's role", ...e });
        });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;

    return dbModel
        .editById(id)
        .then(userRoles => {
            res.status(200).json({ message: `SUCCESS`, ...userRoles });
        })
        .catch(e => {
            res.status(404).json({ message: "Error updating user's role", ...e });
        });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    return dbModel
        .remove(id)
        .then(userRoles => {
            res.status(201).json({ message: `SUCCESS`, ...userRoles });
        })
        .catch(e => {
            res.status(404).json({ message: "Problem removing user's role", ...e });
        });
});

router.routes = [
    { route: '/roles', method: "GET", expects: {} },
    { route: '/roles/:id', method: "GET", expects: {} },
    { route: '/roles', method: "POST", expects: {} },
    { route: '/roles/:id', method: "PUT", expects: {} },
    { route: '/roles/:id', method: "DELETE", expects: {} },
    { route: '/roles/:id', method: "DELETE", expects: {} },
]
module.exports = router;