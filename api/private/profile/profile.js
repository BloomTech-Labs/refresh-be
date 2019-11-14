const router = require("express").Router();
const dbModel = require("./profileModle");

router.get("/", (req, res) => {
  console.log(req.user)
  return dbModel
    .findByUserId(req.user.id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});


router.put("/", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  return dbModel
    .editById(req.user.id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

module.exports = router;
