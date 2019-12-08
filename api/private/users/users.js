const router = require("express").Router();
const dbModel = require("./userModel");
const usersScrubber = require("./usersScrubber");

router.get("/", (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, roles: [...p] });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
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
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.post("/", usersScrubber, (req, res) => {
  const { body } = req;
  return dbModel
    .add(body)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
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
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
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
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.routes = [
  { route: "/users", method: "GET", expects: {}, returns: {} },
  { route: "/users/:id", method: "GET", expects: {}, returns: {} },
  { route: "/users", method: "POST", expects: {}, returns: {} },
  { route: "/users/:id", method: "PUT", expects: {}, returns: {} },
  { route: "/users/:id", method: "DELETE", expects: {}, returns: {} }
];
module.exports = router;
