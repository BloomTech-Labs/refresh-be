exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("teams").insert([
		{ name: "Accounting", points: "150" },
		{ name: "Developers", points: "100" },
		{ name: "Human Resource", points: "75" },
		{ name: "Sales 1", points: "60" },
		{ name: "Sales 2", points: "55" },
		{ name: "Marketing", points: "10" },
		{ name: "Warehouse", points: "5" }
	]);
};
