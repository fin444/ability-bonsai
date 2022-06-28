const warrior = {
	abilities: [ // indentation funky so it's easier to fit on screen
{name: "Bash",						img: "warrior",	linked: [1],						depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Spear Proficiency 1",		img: "white",	linked: [0, 3],						depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper Bash",				img: "white",	linked: [1],						depend: 0,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Double Bash",				img: "yellow",	linked: [1, 4],						depend: 0,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Charge",					img: "warrior",	linked: [3, 6, 10],					depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Vehement",					img: "white",	linked: [10, 7],					depend: null,	exclude: 6,		archetype: "Fallen",		cost: 1, archReq: 0},
{name: "Tougher Skin",				img: "white",	linked: [4, 8],						depend: null,	exclude: 5,		archetype: "Paladin",		cost: 1, archReq: 0},
{name: "Uppercut",					img: "warrior",	linked: [5, 9, 11, 12],				depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "War Scream",				img: "warrior",	linked: [6, 9, 13, 14],				depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper Charge",			img: "white",	linked: [7, 8, 12, 13, 15],			depend: 4,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Heavy Impact",				img: "yellow",	linked: [4, 5],						depend: 4,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Earth Mastery",				img: "white",	linked: [7, 16],					depend: null,	exclude: null,	archetype: "Fallen",		cost: 1, archReq: 0},
{name: "Thunder Mastery",			img: "white",	linked: [7, 9, 13, 15, 17],			depend: null,	exclude: null,	archetype: "Fallen",		cost: 1, archReq: 0},
{name: "Air Mastery",				img: "white",	linked: [8, 9, 12, 15, 18],			depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 1, archReq: 0},
{name: "Fire Mastery",				img: "white",	linked: [8, 19],					depend: null,	exclude: null,	archetype: "Paladin",		cost: 1, archReq: 0},
{name: "Water Mastery",				img: "white",	linked: [9, 12, 13, 20],			depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 1, archReq: 0},
{name: "Quadruple Bash",			img: "yellow",	linked: [11, 17, 25],				depend: 0,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0},
{name: "Fireworks",					img: "yellow",	linked: [12, 16, 25],				depend: 7,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0},
{name: "Flyby Jab",					img: "yellow",	linked: [13, 19, 21],				depend: 4,		exclude: null,	archetype: null,			cost: 2, archReq: 0},
{name: "Flaming Uppercut",			img: "yellow",	linked: [14, 18, 21],				depend: 7,		exclude: null,	archetype: "Paladin",		cost: 2, archReq: 0},
{name: "Half-Moon Swipe",			img: "yellow",	linked: [15, 22],					depend: 7,		exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 1},
{name: "Iron Lungs",				img: "white",	linked: [18, 19, 24],				depend: 8,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Counter",					img: "yellow",	linked: [20, 23, 27],				depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 0},
{name: "Generalist",				img: "red",		linked: [22, 27],					depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 3},
{name: "Mantle of the Bovemists",	img: "red",		linked: [21, 29],					depend: 8,		exclude: null,	archetype: "Paladin",		cost: 2, archReq: 3},
{name: "Bak'al's Grasp",			img: "red",		linked: [16, 17, 26],				depend: 8,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 2},
{name: "Spear Proficiency 2",		img: "white",	linked: [25, 27, 30],				depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper Uppercut",			img: "white",	linked: [22, 23, 26, 28, 30, 35],	depend: 7,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Aerodynamics",				img: "yellow",	linked: [27, 29, 31],				depend: 4,		exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 0},
{name: "Provoke",					img: "yellow",	linked: [24, 28, 31, 33],			depend: 8,		exclude: null,	archetype: "Paladin",		cost: 1, archReq: 0},
{name: "Precise Strikes",			img: "white",	linked: [26, 27],					depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Air Shout",					img: "yellow",	linked: [28, 29],					depend: 8,		exclude: null,	archetype: null,			cost: 2, archReq: 0},
{name: "Enraged Blow",				img: "pink",	linked: [26, 36],					depend: 25,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0},
{name: "Manachism",					img: "pink",	linked: [29, 34, 40],				depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 3},
{name: "Stronger Mantle",			img: "white",	linked: [33, 35, 38],				depend: 24,		exclude: null,	archetype: "Paladin",		cost: 1, archReq: 0},
{name: "Flying Kick",				img: "yellow",	linked: [27, 34, 37, 38],			depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 1},
{name: "Boiling Blood",				img: "yellow",	linked: [32, 37, 41, 45],			depend: 0,		exclude: null,	archetype: null,			cost: 2, archReq: 0},
{name: "Ragnarokkr",				img: "pink",	linked: [35, 36, 41, 42],			depend: 8,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0},
{name: "Ambidextrous",				img: "white",	linked: [34, 35, 39, 43, 47],		depend: 22,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Burning Heart",				img: "white",	linked: [38, 40, 43, 44],			depend: null,	exclude: null,	archetype: "Paladin",		cost: 1, archReq: 0},
{name: "Stronger Bash",				img: "white",	linked: [33, 39, 44],				depend: null,	exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Intoxicating Blood",		img: "yellow",	linked: [36, 37],					depend: 25,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 5},
{name: "Comet",						img: "yellow",	linked: [37],						depend: 17,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0},
{name: "Collide",					img: "yellow",	linked: [38, 39],					depend: 35,		exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 4},
{name: "Rejuvenating Skin",			img: "red",		linked: [39, 40, 48],				depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 5},
{name: "Uncontainable Corruption",	img: "white",	linked: [36, 46, 51, 68],			depend: 25,		exclude: null,	archetype: "Fallen",		cost: 1, archReq: 0},
{name: "Radiant Devotee",			img: "white",	linked: [45, 47, 68],				depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 1, archReq: 1},
{name: "Whirlwind Strike",			img: "yellow",	linked: [38, 46, 53],				depend: 7,		exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 5},
{name: "Mithril Skin",				img: "yellow",	linked: [44, 49, 50],				depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 6},
{name: "Shield Strike",				img: "yellow",	linked: [48, 50, 57],				depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 0},
{name: "Sparking Hope",				img: "pink",	linked: [48, 49, 57],				depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 0},
{name: "Massive Bash",				img: "pink",	linked: [45, 52, 54, 58],			depend: 0,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 8},
{name: "Tempest",					img: "yellow",	linked: [51, 53, 54, 55],			depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 0},
{name: "Spirit of the Rabbit",		img: "white",	linked: [47, 52, 55, 56],			depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 1, archReq: 5},
{name: "Massacre",					img: "yellow",	linked: [51, 52],					depend: null,	exclude: null,	archetype: "Fallen",		cost: 2, archReq: 5},
{name: "Axe Kick",					img: "white",	linked: [52, 53],					depend: 7,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Radiance",					img: "pink",	linked: [53, 57],					depend: 0,		exclude: null,	archetype: "Paladin",		cost: 2, archReq: 2},
{name: "Cheaper Bash",				img: "white",	linked: [49, 50, 56, 61],			depend: 0,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper War Scream",		img: "white",	linked: [51, 63],					depend: 8,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Cyclone",					img: "yellow",	linked: [53, 60, 62],				depend: 8,		exclude: null,	archetype: "Battle Monk",	cost: 1, archReq: 0},
{name: "Discombobulate",			img: "red",		linked: [59],						depend: null,	exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 11},
{name: "Second Chance",				img: "red",		linked: [57, 64, 65],				depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 12},
{name: "Thunderclap",				img: "yellow",	linked: [59],						depend: 0,		exclude: null,	archetype: "Battle Monk",	cost: 2, archReq: 8},
{name: "Blood Pact",				img: "red",		linked: [58, 66, 67],				depend: null,	exclude: null,	archetype: "Fallen",		cost: 2, archReq: 10},
{name: "Martyr",					img: "yellow",	linked: [61],						depend: null,	exclude: null,	archetype: "Paladin",		cost: 2, archReq: 0},
{name: "Cheaper Uppercut",			img: "white",	linked: [61, 66],					depend: 7,		exclude: null,	archetype: null,			cost: 1, archReq: 0},
{name: "Brink of Madness",			img: "pink",	linked: [65, 67],					depend: null,	exclude: null,	archetype: null,			cost: 2, archReq: 0},
{name: "Haemorrhage",				img: "yellow",	linked: [63, 66],					depend: 63,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0},
{name: "Armor Breaker",				img: "pink",	linked: [45, 46],					depend: 25,		exclude: null,	archetype: "Fallen",		cost: 2, archReq: 0}
	],
	tree: [ // indentation funky so it's easier to fit on screen
[null,						null,							null,						null,								0,									null,								null,						null,							null],
[null,						null,							null,						null,								[[0], null, [1], null],				null,								null,						null,							null],
[null,						null,							2,							[null, [2], null, [1]],				1,									null,								null,						null,							null],
[null,						null,							null,						null,								[[1], null, [3], null],				null,								null,						null,							null],
[null,						null,							null,						null,								3,									null,								null,						null,							null],
[null,						null,							null,						null,								[[3], null, [4], null],				null,								null,						null,							null],
[[null, null, [10], [5]],	[null, [5], null, [10]],		10,							[null, [10], null, [4]],			4,									[null, [4], null, [6]],				6,							null,							null],
[5,							[null, [5], null, [7]],			[null, [5], [7], null],		null,								null,								null,								[[6], null, [8], null],		null,							null],
[[null, null, [11], [7]],	[null, [11], null, [7]],		7,							[null, [7], null, [9]],				9,									[null, [9], null, [8]],				8,							[null, [8], null, [14]],		[null, [8], [14], null]],
[[[7], null, [11], null],	null,							[[7], null, [12], null],	null,								[[9], null, [12, 13, 15], null],	null,								[[8], null, [13], null],	null,							[[8], null, [14], null]],
[11,						null,							12,							[null, [12], null, [9, 13, 15]],	[[9], [12], [15], [13]],			[null, [9, 12, 15], null, [13]],	13,							null,							14],
[[[11], null, [16], null],	null,							[[12], null, [17], null],	null,								15,									null,								[[13], null, [18], null],	null,							[[14], null, [19], null]],
[16,						[null, [16], [25], [17]],		17,							null,								[[15], null, [20], null],			null,								18,							[null, [18], [21], [19]],		19],
[null,						[[16, 17], null, [25], null],	null,						null,								20,									null,								null,						21,								null],
[null,						[[16, 17], null, [25], null],	null,						null,								[[20], null, [22], null],			null,								null,						[[21], null, [24], null],		null],
[null,						[[16, 17], null, [25], null],	23,							[null, [23], [27], [22]],			22,									null,								null,						24,								null],
[[null, null, [26], [25]],	25,								null,						[[22, 23], null, [27], null],		null,								null,								null,						[[24], null, [29], null],		null],
[26,						[null, [26], null, [27, 30]],	[null, [26], [30], [27]],	27,									[null, [27], null, [28]],			28,									[null, [28], [31], [29]],	29,								[null, [29], [33], null]],
[[[26], null, [32], null],	null,							30,							[[27], null, [35], null],			null,								null,								31,							null,							[[29], null, [33], null]],
[[[26], null, [32], null],	null,							null,						[[27], null, [35], null],			null,								null,								null,						null,							[[29], null, [33], null]],
[32,						null,							[null, null, [37], [35]],	35,									[null, [35], [38], [34]],			[null, [35, 38], null, [34]],		34,							[null, [34], null, [33]],		33],
[[[32], null, [36], null],	null,							[[35], null, [37], null],	null,								[[34, 35], null, [38], null],		null,								null,						null,							[[33], null, [40], null]],
[36,						[null, [36], [41], [37]],		37,							null,								38,									[null, [38], [43], [39]],			39,							[null, [39], [44], [40]],		40],
[[[36], null, [45], null],	41,								[[37], null, [42], null],	null,								[[38], null, [47], null],			43,									null,						44,								null],
[[[36], null, [45], null],	null,							42,							null,								[[38], null, [47], null],			null,								null,						[[44], null, [48], null],		null],
[[[36], null, [45], null],	null,							null,						null,								[[38], null, [47], null],			null,								null,						[[44], null, [48], null],		null],
[45,						[null, [45], [68], [46]],		46,							[null, [46], null, [47]],			47,									null,								[null, null, [49], [48]],	48,								[null, [48], [50], null]],
[[[45], null, [51], null],	68,								null,						null,								[[47], null, [53], null],			null,								49,							[null, [49], [57], [50]],		50],
[51,						[null, [51], [54], [52]],		52,							[null, [52], [55], [53]],			53,									[null, [53], [56], null],			null,						[[49, 50], null, [57], null],	null],
[[[51], null, [58], null],	54,								null,						55,									[[53], null, [59], null],			56,									[null, [56], null, [57]],	57,								null],
[[[51], null, [58], null],	null,							null,						null,								[[53], null, [59], null],			null,								null,						[[57], null, [61], null],		null],
[58,						null,							60,							[null, [60], null, [59]],			59,									[null, [59], [62], null],			null,						[[57], null, [61], null],		null],
[[[58], null, [63], null],	null,							null,						null,								null,								62,									[null, null, [65], [61]],	61,								[null, [61], [64], null]],
[63,						[null, [63], null, [66, 67]],	[null, [63], [67], [66]],	[null, [63, 67], null, [66]],		[null, [63, 67], [66], null],		null,								[[61], null, [65], null],	null,							[[61], null, [64], null]],
[null,						null,							67,							null,								66,									[null, [66], null, [65]],			65,							null,							64]
	],
	pages: [5, 9, 14, 19, 25, 30],
	archetypes: {"Fallen": {color: "#ff5555", icon: "3"}, "Battle Monk": {color: "#ffff55", icon: "2"}, "Paladin": {color: "#55ffff", icon: "0"}},
	chosen: [0],
	descriptions: [
		// TODO
	]
}