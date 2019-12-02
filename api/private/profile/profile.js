const router = require("express").Router();
const dbModel = require("./profileModle");

router.get("/", (req, res) => {
  const id = req.user.user_id
  return dbModel
    .findByuser_id(id)
    .then(p => {
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
    .editByuser_id(req.user.user_id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

module.exports = router;
