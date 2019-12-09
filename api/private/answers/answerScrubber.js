module.exports = async (req, res, next) => {
  const errors = [];
  const answers = req.body;
  const cleaner = answer => {
    const cleanAnswer = {};
    const addProp = (prop, value) => {
      cleanAnswer[prop] = value;
    };
    !!answer.answer
      ? addProp("answer", answer.answer)
      : errors.push({ answer: "Answer is Required" });
    !!answer.question_id
      ? addProp("question_id", answer.question_id)
      : errors.push({ question_id: "Question Id is Required" });
    !!req.user.user_id
      ? addProp("user_id", req.user.user_id)
      : errors.push({
          user_id: "User Id is Required, something is a bit shifty here..."
        });
    errors.length < 1 && addProp("answer_date", new Date());
    return cleanAnswer;
  };
  if (Array.isArray(answers)) {
    req.body = [];
    answers.forEach(a => {
      req.body.push(cleaner(a));
    });
  } else {
    req.body = cleaner(answers);
  }
  errors.length > 0 ? next(errors) : next();
};
