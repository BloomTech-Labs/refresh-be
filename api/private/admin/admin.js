const router = require("express").Router();
const dbModel = require("./adminModel");

router.get("/", (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "Problem getting the administrators", ...e });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllById(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "Unable to locate that administrator", ...e });
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
      res.status(404).json({ message: "Problem creating that administrator", ...e });
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
      res.status(404).json({ message: "Problem editing the entry", ...e });
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
      res.status(404).json({ message: "Administrator removed", ...e });
    });
});

router.routes = [
  {route:'/admin', method:"GET",  expects:{}, returns:{}},
  {route:'/admin/:id', method:"GET",  expects:{}, returns:{}},
  {route:'/admin', method:"POST", expects:{}, returns:{}},
  {route:'/admin', method:"PUT",  expects:{}, returns:{}},
  {route:'/admin/:id', method:"DELETE", expects:{}, returns:{}},
]
module.exports = router;
