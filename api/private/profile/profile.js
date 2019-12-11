const router = require("express").Router();
const dbModel = require("./profileModle");

router.get("/", (req, res) => {
  const id = req.user.user_id;
  return dbModel
    .findByUserId(id)
    .then(profile => {
      res.status(200).json({ message: `SUCCESS`, profile: { ...profile } });
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
    .then(profile => {
      res.status(200).json({ message: `SUCCESS`, ...profile });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.routes = [
  { route: "/profile", method: "GET", expects: {}, returns: {} },
  { route: "/profile", method: "PUT", expects: {}, returns: {} }
];

module.exports = router;
