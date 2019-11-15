exports.up = function(knex) {
  return knex.schema
    .createTable("questions", tbl => {
      tbl.increments();
      tbl.string("question", 500);
    })
    .createTable("answers", tbl => {
      tbl.increments();
      tbl.string("answer", 500);
      tbl.dateTime("answered_at");
    })
    .createTable("user_answers", tbl => {
      tbl.increments();
      tbl
        .integer("question_id")
        .references("id")
        .inTable("questions")
        .unsigned();
      tbl
        .integer("answer_id")
        .references("id")
        .inTable("answers")
        .unsigned();
    })

    .createTable("points", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users")
        .unsigned();
      tbl.integer("points");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("points")
    .dropTableIfExists("user_answers")
    .dropTableIfExists("answers")
    .dropTableIfExists("questions");
};
