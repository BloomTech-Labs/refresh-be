exports.up = function(knex) {
  return knex.schema.createTable("answers", col => {
    col.increments();
    col.string("answer", 3000);
    col.dateTime("answer_date");
    col
      .integer("question_id")
      .references("id")
      .inTable("questions")
      .unsigned()
      .onDelete("CASCADE");
    col
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("answers");
};
