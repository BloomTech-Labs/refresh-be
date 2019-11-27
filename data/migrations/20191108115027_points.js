exports.up = function(knex) {
    return knex.schema
      .createTable("points", col => {
        col.increments();
        col
          .integer("user_id")
          .notNullable()
          .references("id")
          .inTable("users")
          .unsigned()
          .onDelete("CASCADE")
          
        col.integer("points");
        col
          .integer("answer_id")
          .notNullable()
          .references("id")
          .inTable("answers")
          .onDelete("CASCADE")
        
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("points")
  };
  