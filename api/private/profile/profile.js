const router = require("express").Router();
const dbModel = require("./profileModle");

router.get("/", (req, res) => {
  const id = req.user.userId
  return dbModel
    .findByUserId(id)
    .then(p => {
      console.log(p)
      res.status(200).json({ message: `SUCCESS`, profile:{...p} });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});


router.put("/", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  return dbModel
    .editByUserId(req.user.userId)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

module.exports = router;
