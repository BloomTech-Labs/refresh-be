module.exports = async (req, res, next) => {
    const errors = [];
    const question_groups = req.body;
  
    //Create your Clean Object
  
    const cleaner = question_group => {
      const cleanQuestionGroup = {};
      const addProp = (prop, value) => {
        cleanQuestionGroup[prop] = value;
      };
  
      !!question_group.group
        ? addProp("group", question_group.group)
        : errors.push({ group: "Group is Required" });

      !!question_group.question_ids
        ? addProp("question_ids", question_group.question_ids)
        : errors.push({ question_ids: "Question ID's Are Required" });

      return cleanQuestionGroup;
    };

    if (Array.isArray(question_groups)) {
        req.body = [];
        question_groups.forEach(qg => {
          req.body.push(cleaner(qg));
        });
      } else {
        req.body = cleaner(question_groups);
      }
    
      if (errors.length > 0) {
        next(errors);
      } else {
        next();
      }
}