exports.up = function(knex) {
  return knex.schema.createTable("missions", col => {
    col.increments();
    col.string("vertical").notNullable();
    col.string("description").notNullable();
    col
      .integer("question")
      .references("id")
      .inTable("questions")
      .onDelete("CASCADE")
    
    col.integer("point_value").notNullable();
    col.integer("goal").notNullable();
    col.specificType("dotw", "INT[]");
    col.dateTime("start_date");
    col.dateTime("ending_date");
    col.integer("daily_reminders");
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("days_of_the_week")
    .dropTableIfExists("missions");
};
