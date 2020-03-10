exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("users").insert([
		{
			email: "michael@gmail.com",
			first_name: "Michael",
			last_name: "Scott",
			password: "mike123",
			avatar: null,
			points: 5,
			team_id: 1
		},
		{
			email: "jan@gmail.com",
			first_name: "Jan",
			last_name: "Levins",
			password: "jan123",
			avatar: null,
			points: 10,
			team_id: 1
		},
		{
			email: "dwight@gmail.com",
			first_name: "Dwight",
			last_name: "Schrute",
			password: "dwight123",
			avatar: null,
			points: 8,
			team_id: 1
		},
		{
			email: "francis@gmail.com",
			first_name: "Francis",
			last_name: "Leeland",
			password: "francis123",
			avatar: null,
			points: 9,
			team_id: 1
		},
		{
			email: "janell@gmail.com",
			first_name: "Janell",
			last_name: "Brady",
			password: "janell123",
			avatar: null,
			points: 19,
			team_id: 1
		},
		{
			email: "jim@gmail.com",
			first_name: "Jim",
			last_name: "Halpert",
			password: "jim123",
			avatar: null,
			points: 2,
			team_id: 2
		},
		{
			email: "pam@gmail.com",
			first_name: "Pam",
			last_name: "Beasley",
			password: "pam123",
			avatar: null,
			points: 7,
			team_id: 2
		},
		{
			email: "david@gmail.com",
			first_name: "David",
			last_name: "Powers",
			password: "david123",
			avatar: null,
			points: 8,
			team_id: 2
		},
		{
			email: "lindsey@gmail.com",
			first_name: "Lindsey",
			last_name: "Powers",
			password: "lindsey123",
			avatar: null,
			points: 16,
			team_id: 2
		},
		{
			email: "john@gmail.com",
			first_name: "John",
			last_name: "Robert",
			password: "john123",
			avatar: null,
			points: 11,
			team_id: 2
		},
		{
			email: "miguel@gmail.com",
			first_name: "Miguel",
			last_name: "Martinez",
			password: "miguel123",
			avatar: null,
			points: 9,
			team_id: 3
		},
		{
			email: "damien@gmail.com",
			first_name: "Damien",
			last_name: "Johnson",
			password: "damien123",
			avatar: null,
			points: 10,
			team_id: 3
		},
		{
			email: "robert@gmail.com",
			first_name: "Robert",
			last_name: "Lee",
			password: "robert123",
			avatar: null,
			points: 15,
			team_id: 3
		},
		{
			email: "samantha@gmail.com",
			first_name: "Samantha",
			last_name: "Jones",
			password: "samantha123",
			avatar: null,
			points: 16,
			team_id: 3
		},
		{
			email: "elias@gmail.com",
			first_name: "Elias",
			last_name: "Smith",
			password: "elias123",
			avatar: null,
			points: 5,
			team_id: 3
		},
		{
			email: "chris@gmail.com",
			first_name: "Chris",
			last_name: "Jones",
			password: "elias123",
			avatar: null,
			points: 16,
			team_id: 4
		},
		{
			email: "dan@gmail.com",
			first_name: "Dan",
			last_name: "Kraft",
			password: "elias123",
			avatar: null,
			points: 15,
			team_id: 4
		},
		{
			email: "megan@gmail.com",
			first_name: "Megan",
			last_name: "Smith",
			password: "elias123",
			avatar: null,
			points: 9,
			team_id: 4
		},
		{
			email: "samantha@gmail.com",
			first_name: "Samantha",
			last_name: "Smith",
			password: "elias123",
			avatar: null,
			points: 19,
			team_id: 4
		},
		{
			email: "John2@gmail.com",
			first_name: "John",
			last_name: "Ross",
			password: "john123",
			avatar: null,
			points: 7,
			team_id: 4
		},
		{
			email: "Sam@gmail.com",
			first_name: "Sam",
			last_name: "Smith",
			password: "sam123",
			avatar: null,
			points: 18,
			team_id: 5
		},
		{
			email: "daniel@gmail.com",
			first_name: "Daniel",
			last_name: "Lupica",
			password: "daniel123",
			avatar: null,
			points: 7,
			team_id: 5
		},
		{
			email: "michael2@gmail.com",
			first_name: "Michael",
			last_name: "Moore",
			password: "michael123",
			avatar: null,
			points: 9,
			team_id: 5
		},
		{
			email: "henry@gmail.com",
			first_name: "Henry",
			last_name: "Rowengartner",
			password: "henry123",
			avatar: null,
			points: 14,
			team_id: 5
		},
		{
			email: "julie@gmail.com",
			first_name: "Julie",
			last_name: "Myers",
			password: "julie123",
			avatar: null,
			points: 15,
			team_id: 5
		},
		{
			email: "chet@gmail.com",
			first_name: "Chet",
			last_name: "Steadman",
			password: "chet123",
			avatar: null,
			points: 15,
			team_id: 6
		},
		{
			email: "mary@gmail.com",
			first_name: "Mary",
			last_name: "Stallworth",
			password: "mary123",
			avatar: null,
			points: 5,
			team_id: 6
		},
		{
			email: "susan@gmail.com",
			first_name: "Susan",
			last_name: "Storm",
			password: "susan123",
			avatar: null,
			points: 17,
			team_id: 6
		},
		{
			email: "cindy@gmail.com",
			first_name: "Cindy",
			last_name: "Lou",
			password: "cindy123",
			avatar: null,
			points: 12,
			team_id: 6
		},
		{
			email: "george@gmail.com",
			first_name: "George",
			last_name: "Hamilton",
			password: "george123",
			avatar: null,
			points: 11,
			team_id: 6
		},
		{
			email: "bob@gmail.com",
			first_name: "Bob",
			last_name: "Burns",
			password: "bob123",
			avatar: null,
			points: 10,
			team_id: 7
		},
		{
			email: "marie@gmail.com",
			first_name: "Marie",
			last_name: "Monet",
			password: "marie123",
			avatar: null,
			points: 9,
			team_id: 7
		},
		{
			email: "charles@gmail.com",
			first_name: "Charles",
			last_name: "Johnson",
			password: "charles123",
			avatar: null,
			points: 17,
			team_id: 7
		},
		{
			email: "stan@gmail.com",
			first_name: "Stan",
			last_name: "Lee",
			password: "stan123",
			avatar: null,
			points: 12,
			team_id: 7
		},
		{
			email: "pete@gmail.com",
			first_name: "Pete",
			last_name: "Pettigrew",
			password: "pete123",
			avatar: null,
			points: 15,
			team_id: 7
		},
		{
			email: "james@gmail.com",
			first_name: "James",
			last_name: "Patterson",
			password: "james123",
			avatar: null,
			points: 0,
			team_id: null
		},
		{
			email: "lee@gmail.com",
			first_name: "Lee",
			last_name: "Childs",
			password: "lee123",
			avatar: null,
			points: 0,
			team_id: null
		},
		{
			email: "linda@gmail.com",
			first_name: "Linda",
			last_name: "Sandford",
			password: "linda123",
			avatar: null,
			points: 0,
			team_id: null
		},
		{
			email: "virginia@gmail.com",
			first_name: "Virginia",
			last_name: "McCaskey",
			password: "virgina123",
			avatar: null,
			points: 0,
			team_id: null
		},
		{
			email: "tom@gmail.com",
			first_name: "Tom",
			last_name: "Ricketts",
			password: "tom123",
			avatar: null,
			points: 0,
			team_id: null
		},
		{
			email: "william@gmail.com",
			first_name: "William",
			last_name: "Wirtz",
			password: "william123",
			avatar: null,
			points: 0,
			team_id: null
		}
	]);
};
