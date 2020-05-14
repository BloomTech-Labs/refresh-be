exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("teams").insert([
		{ name: "Accounting", points: "135" },
		{ name: "Developers", points: "150" },
		{ name: "Human Resource", points: "150" },
		{ name: "Sales 1", points: "150" },
		{ name: "Sales 2", points: "150" },
		{ name: "Marketing", points: "150" },
		{ name: "Warehouse", points: "150" }
	]);
};
