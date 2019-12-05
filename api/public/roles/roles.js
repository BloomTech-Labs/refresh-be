const router = require("express").Router();
const dbModel = require("./roles-model");

router.get("/", (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "Problem finding roles", ...e });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllRolesById(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "Unable to find the user's role", ...e });
    });
});

router.post("/", (req, res) => {
  const { body } = req;
  return dbModel
    .add(body)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
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
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "Error updating user's role", ...e });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  return dbModel
    .remove(id)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "Problem removing user's role", ...e });
    });
});
const docse = async () =>{
 console.log()
}
router.routes = [
  {route:'/roles', method:"GET", expects:{}, returns:{}},
  {route:'/roles/:id', method:"GET", expects:{}, returns:{}},
  {route:'/roles', method:"POST", expects:{}, returns:{}},
  {route:'/roles/:id', method:"PUT", expects:{}, returns:{}},
  {route:'/roles/:id', method:"DELETE", expects:{}, returns:{}},
]

module.exports = router;
