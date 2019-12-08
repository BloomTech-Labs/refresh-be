module.exports = async (req, res, next) => {
  const errors = [];
  const questions = req.body;

  const cleaner = question => {
    const cleanQuestion = {};
    const addProp = (prop, value) => {
      cleanQuestion[prop] = value;
    };

    !!question.question
      ? addProp("question", question.question)
      : errors.push({ question: "Question is Required" });

    return cleanQuestion;
  };

    req.body = cleaner(questions);
    errors.length > 0 ? next(errors) : next();
};
