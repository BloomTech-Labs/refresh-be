exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("users").insert([
		{
			email: "michael@gmail.com",
			full_name: "Michael Scott",
			password: "mike123",
			avatar: null,
			total_points: 25,
			daily_points: 5,
			team_id: 1
		},
		{
			email: "jan@gmail.com",
			full_name: "Jan Levins",
			password: "jan123",
			avatar: null,
			total_points: 25,
			daily_points: 10,
			team_id: 1
		},
		{
			email: "dwight@gmail.com",
			full_name: "Dwight Schrute",
			password: "dwight123",
			avatar: null,
			total_points: 25,
			daily_points: 8,
			team_id: 1
		},
		{
			email: "francis@gmail.com",
			full_name: "Francis Leeland",
			password: "francis123",
			avatar: null,
			total_points: 30,
			daily_points: 9,
			team_id: 1
		},
		{
			email: "janell@gmail.com",
			full_name: "Janell",
			password: "janell123",
			avatar: null,
			total_points: 30,
			daily_points: 19,
			team_id: 1
		},
		{
			email: "jim@gmail.com",
			full_name: "Jim Halpert",
			password: "jim123",
			avatar: null,
			total_points: 30,
			daily_points: 2,
			team_id: 2
		},
		{
			email: "pam@gmail.com",
			full_name: "Pam Beasley",
			password: "pam123",
			avatar: null,
			total_points: 30,
			daily_points: 7,
			team_id: 2
		},
		{
			email: "david@gmail.com",
			full_name: "David Powers",
			password: "david123",
			avatar: null,
			total_points: 30,
			daily_points: 8,
			team_id: 2
		},
		{
			email: "lindsey@gmail.com",
			full_name: "Lindsey Powers",
			password: "lindsey123",
			avatar: null,
			total_points: 30,
			daily_points: 16,
			team_id: 2
		},
		{
			email: "john@gmail.com",
			full_name: "John Robert",
			password: "john123",
			avatar: null,
			total_points: 30,
			daily_points: 11,
			team_id: 2
		},
		{
			email: "miguel@gmail.com",
			full_name: "Miguel Martinez",
			password: "miguel123",
			avatar: null,
			total_points: 30,
			daily_points: 9,
			team_id: 3
		},
		{
			email: "damien@gmail.com",
			full_name: "Damien Johnson",
			password: "damien123",
			avatar: null,
			total_points: 30,
			daily_points: 10,
			team_id: 3
		},
		{
			email: "robert@gmail.com",
			full_name: "Robert Lee",
			password: "robert123",
			avatar: null,
			total_points: 30,
			daily_points: 15,
			team_id: 3
		},
		{
			email: "samantha@gmail.com",
			full_name: "Samantha Jones",
			password: "samantha123",
			avatar: null,
			total_points: 30,
			daily_points: 16,
			team_id: 3
		},
		{
			email: "elias@gmail.com",
			full_name: "Elias Smith",
			password: "elias123",
			avatar: null,
			total_points: 30,
			daily_points: 5,
			team_id: 3
		},
		{
			email: "chris@gmail.com",
			full_name: "Chris Jones",
			password: "elias123",
			avatar: null,
			total_points: 30,
			daily_points: 16,
			team_id: 4
		},
		{
			email: "dan@gmail.com",
			full_name: "Dan Kraft",
			password: "elias123",
			avatar: null,
			total_points: 30,
			daily_points: 15,
			team_id: 4
		},
		{
			email: "megan@gmail.com",
			full_name: "Megan Smith",
			password: "elias123",
			avatar: null,
			total_points: 30,
			daily_points: 9,
			team_id: 4
		},
		{
			email: "sammysmith@gmail.com",
			full_name: "Samantha Smith",
			password: "elias123",
			avatar: null,
			total_points: 30,
			daily_points: 19,
			team_id: 4
		},
		{
			email: "John2@gmail.com",
			full_name: "John Ross",
			password: "john123",
			avatar: null,
			total_points: 30,
			daily_points: 7,
			team_id: 4
		},
		{
			email: "Sam@gmail.com",
			full_name: "Sam Smith",
			password: "sam123",
			avatar: null,
			total_points: 30,
			daily_points: 18,
			team_id: 5
		},
		{
			email: "daniel@gmail.com",
			full_name: "Daniel Lupica",
			password: "daniel123",
			avatar: null,
			total_points: 30,
			daily_points: 7,
			team_id: 5
		},
		{
			email: "michael2@gmail.com",
			full_name: "Michael Moore",
			password: "michael123",
			avatar: null,
			total_points: 30,
			daily_points: 9,
			team_id: 5
		},
		{
			email: "henry@gmail.com",
			full_name: "Henry Rowengartner",
			password: "henry123",
			avatar: null,
			total_points: 30,
			daily_points: 14,
			team_id: 5
		},
		{
			email: "julie@gmail.com",
			full_name: "Julie Myers",
			password: "julie123",
			avatar: null,
			total_points: 30,
			daily_points: 15,
			team_id: 5
		},
		{
			email: "chet@gmail.com",
			full_name: "Chet Steadman",
			password: "chet123",
			avatar: null,
			total_points: 30,
			daily_points: 15,
			team_id: 6
		},
		{
			email: "mary@gmail.com",
			full_name: "Mary Stallworth",
			password: "mary123",
			avatar: null,
			total_points: 30,
			daily_points: 5,
			team_id: 6
		},
		{
			email: "susan@gmail.com",
			full_name: "Susan Storm",
			password: "susan123",
			avatar: null,
			total_points: 30,
			daily_points: 17,
			team_id: 6
		},
		{
			email: "cindy@gmail.com",
			full_name: "Cindy Lou",
			password: "cindy123",
			avatar: null,
			total_points: 30,
			daily_points: 12,
			team_id: 6
		},
		{
			email: "george@gmail.com",
			full_name: "George Hamilton",
			password: "george123",
			avatar: null,
			total_points: 30,
			daily_points: 11,
			team_id: 6
		},
		{
			email: "bob@gmail.com",
			full_name: "Bob Burns",
			password: "bob123",
			avatar: null,
			total_points: 30,
			daily_points: 10,
			team_id: 7
		},
		{
			email: "marie@gmail.com",
			full_name: "Marie Monet",
			password: "marie123",
			avatar: null,
			total_points: 30,
			daily_points: 9,
			team_id: 7
		},
		{
			email: "charles@gmail.com",
			full_name: "Charles Johnson",
			password: "charles123",
			avatar: null,
			total_points: 30,
			daily_points: 17,
			team_id: 7
		},
		{
			email: "stan@gmail.com",
			full_name: "Stan Lee",
			password: "stan123",
			avatar: null,
			total_points: 30,
			daily_points: 12,
			team_id: 7
		},
		{
			email: "pete@gmail.com",
			full_name: "Pete Pettigrew",
			password: "pete123",
			avatar: null,
			total_points: 30,
			daily_points: 15,
			team_id: 7
		},
		{
			email: "james@gmail.com",
			full_name: "James Patterson",
			password: "james123",
			avatar: null,
			total_points: 30,
			daily_points: 0,
			team_id: null
		},
		{
			email: "lee@gmail.com",
			full_name: "Lee Childs",
			password: "lee123",
			avatar: null,
			total_points: 30,
			daily_points: 0,
			team_id: null
		},
		{
			email: "linda@gmail.com",
			full_name: "Linda Sandford",
			password: "linda123",
			avatar: null,
			total_points: 30,
			daily_points: 0,
			team_id: null
		},
		{
			email: "virginia@gmail.com",
			full_name: "Virginia McCaskey",
			password: "virgina123",
			avatar: null,
			total_points: 30,
			daily_points: 0,
			team_id: null
		},
		{
			email: "tom@gmail.com",
			full_name: "Tom Ricketts",
			password: "tom123",
			avatar: null,
			total_points: 30,
			daily_points: 0,
			team_id: null
		},
		{
			email: "william@gmail.com",
			full_name: "William Wirtz",
			password: "william123",
			avatar: null,
			total_points: 30,
			daily_points: 0,
			team_id: null
		}
	]);
};
