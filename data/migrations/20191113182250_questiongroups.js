exports.up = function(knex) {
    return knex.schema
      .createTable("question_groups", col => {
        col.increments();
        col.text("group", 25).unique();
        col.specificType("question_ids", "INT[]").notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("question_groups");
  };
  
