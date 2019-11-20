const router = require("express").Router();
const dbModel = require("./answersModel");
const answerScrubber = require("./answerScrubber");

router.get("/", (req, res) => {
  return dbModel.find()
  .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
});
new Date
// router.get("/", (req, res) => {
//   const id = req.user.userId;
//   if(req.startDate && req.endDate){
//     //THIS SHOULD BE A POST {startDate:'2019-01-01'; endDate:'2019-02-02'};
//     return dbModel.findBYDateRange(req.body.startDate, req.body.endDate)
//     .then(p => {
//       res.status(200).json({ message: `SUCCESS`, ...p });
//     })
//     .catch(e => {
//       res.status(404).json({ message: "SOMEMESSAGE", ...e });
//     });
//   }else{
//   return dbModel
//     .findByUserId(id)
//     .then(p => {
//       res.status(200).json({ message: `SUCCESS`, ...p });
//     })
//     .catch(e => {
//       res.status(404).json({ message: "SOMEMESSAGE", ...e });
//     });
//   }
// });

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllQuestionId(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(200).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.post("/", answerScrubber, (req, res) => {
  const { body } = req;
  console.log('heresdafpkoasjdfpja',req.body)
  return dbModel
    .add(body)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(200).json({ message: "SOMEMESSAGE", ...e,...body });
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
module.exports = router;
