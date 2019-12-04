const router = require("express").Router();
const dbModel = require("./profileModle");
const profileScrubber = require("./profileScrubber");

router.get("/", (req, res) => {
  const id = req.user.user_id
  return dbModel
    .findByUserId(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, profile:{...p} });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

// Not sure if we need a .post with profileScrubber?

router.put("/", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  return dbModel
    .editByUserId(req.user.user_id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

module.exports = router;
