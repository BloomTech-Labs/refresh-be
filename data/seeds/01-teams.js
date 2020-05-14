exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("teams").insert([
		{ name: "Accounting"},
		{ name: "Developers"},
		{ name: "Human Resource"},
		{ name: "Sales 1"},
		{ name: "Sales 2"},
		{ name: "Marketing"},
		{ name: "Warehouse"}
	]);
};
