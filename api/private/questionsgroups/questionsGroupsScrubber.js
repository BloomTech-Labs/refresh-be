module.exports = async (req, res, next) => {
  const errors = [];
  const question_groups = req.body;

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

  req.body = cleaner(question_groups);
  errors.length > 0 ? next(errors) : next();
};
