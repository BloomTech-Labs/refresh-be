module.exports = async (req, res, next) => {
    const errors = [];
    const question_groups = req.body;
  
    const cleaner = async question_group => {
      const cleanQuestionGroup = {};
      const addProp = (prop, value) => {
        cleanQuestionGroup[prop] = value;
      };
  
      !!question_group.name
        ? addProp("name", question_group.name)
        : errors.push({ name: "Name is Required" });
  
      !!question_group.description 
        ? addProp("description", question_group.description)
        : addProp("description", "null")
  
      let blankDate = new Date()
      blankDate.setFullYear(0000,00,00)
        !!question_group.expires
        ? addProp("expires", question_group.expires)
        : addProp("expires", blankDate)
  
      !!question_group.question_ids
        ? addProp("question_ids", question_group.question_ids)
        : errors.push({ question_ids: "Question ID's Are Required" });
  
      if (!!cleanQuestionGroup.question_ids) {
        for (let i = 0; i < cleanQuestionGroup.question_ids.length; i++) {
          if (Number(cleanQuestionGroup.question_ids[i])) {
            //verifiy is a question
          } else {
            await questionsModel
              .add({ question: cleanQuestionGroup.question_ids[i] })
              .then(([id]) => (cleanQuestionGroup.question_ids[i] = id));
          }
        }
      }
    
      return cleanQuestionGroup;
    };
  
    req.body = await cleaner(question_groups);
    errors.length > 0 ? next(errors) : next();
  };
  