const router = require("express").Router();
const dbModel = require("./answersModel");
const answerScrubber = require("./answerScrubber");

router.get("/", (req, res) => {
  const id = req.user.user_id;
  return dbModel
    .findAllByUserId(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllQuestionId(req.user.user_id, id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(200).json({ message: "SOMEMESSAGE", ...e });
    });
});

//Expects {"startDate":"2019-11-20", "endDate":"2019-11-21"}
router.post("/datefilter", (req, res) => {
  const id = req.user.user_id;
  const { startDate, endDate } = req.body;

  return dbModel
    .findByDateRange(id, startDate, endDate)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.post("/", answerScrubber, (req, res) => {
  const { body } = req;

  return dbModel
    .add(body)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(200).json({ message: "SOMEMESSAGE", ...e, ...body });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  const { body } = req;

  return dbModel
    .editById(user_id, id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(200).json({ message: "SOMEMESSAGE", ...e });
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
      res.status(200).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.routes = [
  { route: "/answers", method: "GET", expects: {}, returns: {} },
  { route: "/answers/:id", method: "GET", expects: {}, returns: {} },
  { route: "/answers", method: "POST", expects: {}, returns: {} },
  { route: "/answers", method: "PUT", expects: {}, returns: {} },
  { route: "/answers/:id", method: "DELETE", expects: {}, returns: {} }
];
module.exports = router;
