const router = require("express").Router();
const dbModel = require("./defaultMissionsModel");
const defaultMissionsScrubber = require("./defaultMissionsScrubber");

router.get("/", (req, res) => {
  return dbModel
    .findAll()
    .then(defaultMissions => {
      res.status(200).json({ message: `SUCCESS`, ...defaultMissions });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllById(id)
    .then(defaultMissions => {
      res.status(200).json({ message: `SUCCESS`, ...defaultMissions });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.post("/", defaultMissionsScrubber, (req, res) => {
  const { body } = req;
  return dbModel
    .add(body)
    .then(defaultMissions => {
      res.status(201).json({ message: `SUCCESS`, ...defaultMissions });
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
    .then(defaultMissions => {
      res.status(200).json({ message: `SUCCESS`, ...defaultMissions });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  return dbModel
    .remove(id)
    .then(defaultMissions => {
      res.status(201).json({ message: `SUCCESS`, ...defaultMissions });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});
module.exports = router;
