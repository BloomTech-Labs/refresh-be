exports.up = function(knex) {
  return knex.schema.createTable("profile", col => {
    col.increments();
    col.string("display_name", 30);
    col.string("avatar", 200);
    col.string("fname", 30);
    col.string("lname", 30);
    col.string("bio", 3000);
    col.string("cohort", 20);
    col.string("section_lead", 100);
    col
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("profile");
};
