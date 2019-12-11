const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { routes: req.routes });
});

module.exports = router;
