exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("teams").insert([
		{ name: "Accounting", points: "0" },
		{ name: "Developers", points: "0" },
		{ name: "Human Resource", points: "0" },
		{ name: "Sales 1", points: "0" },
		{ name: "Sales 2", points: "0" },
		{ name: "Marketing", points: "0" },
		{ name: "Warehouse", points: "0" }
	]);
};
