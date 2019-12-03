module.exports = async (req, res, next) => {
    const errors = [];
    const questions = req.body;
  
    //Create your Clean Object
  
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

    if (Array.isArray(questions)) {
        req.body = [];
        questions.forEach(a => {
          req.body.push(cleaner(q));
        });
      } else {
        //Answer
        req.body = cleaner(questions);
      }
    
      if (errors.length > 0) {
        next(errors);
      } else {
        next();
      }
}