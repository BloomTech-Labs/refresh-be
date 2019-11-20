exports.up = function(knex) {
    return knex.schema
      .createTable("days_of_the_week", col => {
        col.increments();
        col.string("day_long").unique();
        col.string("day_short").unique();
      }) 
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("days_of_the_week")
  };
  