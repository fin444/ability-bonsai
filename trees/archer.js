const archer = {
	abilities: [ // indentation funky so it's easier to fit on screen
{name: "Arrow Bomb",				img: "archer",	linked: [1],						depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Bow Proficiency 1",			img: "white",	linked: [0, 2, 3],					depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper Arrow Bomb",		img: "white",	linked: [1],						depend: 0,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Heart Shatter",				img: "yellow",	linked: [1, 4],						depend: 0,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Escape",					img: "archer",	linked: [3, 5, 6],					depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Double Shots",				img: "white",	linked: [4, 7],						depend: null,	blockedBy: [6],				archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "Power Shots",				img: "white",	linked: [4, 8],						depend: null,	blockedBy: [5],				archetype: "Sharpshooter",	cost: 1, archReq: 0},
{name: "Arrow Storm",				img: "archer",	linked: [5, 9, 10, 11, 12],			depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Arrow Shield",				img: "archer",	linked: [6, 9, 14, 15],				depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper Escape",			img: "white",	linked: [7, 8, 12, 13, 14],			depend: 4,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Windy Feet",				img: "yellow",	linked: [7, 11],					depend: 4,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Air Mastery",				img: "white",	linked: [7, 10, 16],				depend: null,	blockedBy: null,			archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "Thunder Mastery",			img: "white",	linked: [7, 9, 13, 14, 17],			depend: null,	blockedBy: null,			archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "Water Mastery",				img: "white",	linked: [9, 12, 14, 20],			depend: null,	blockedBy: null,			archetype: "Sharpshooter",	cost: 1, archReq: 0},
{name: "Fire Mastery",				img: "white",	linked: [8, 9, 12, 13, 21],			depend: null,	blockedBy: null,			archetype: "Sharpshooter",	cost: 1, archReq: 0},
{name: "Earth Mastery",				img: "white",	linked: [8, 22],					depend: null,	blockedBy: null,			archetype: "Trapper",		cost: 1, archReq: 0},
{name: "Arrow Rain",				img: "yellow",	linked: [11, 17, 18],				depend: 8,		blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "Nimble String",				img: "yellow",	linked: [12, 16, 19],				depend: 7,		blockedBy: [20],			archetype: null,			cost: 2, archReq: 0},
{name: "Triple Shots",				img: "white",	linked: [16, 19, 23],				depend: 5,		blockedBy: null,			archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "Frenzy",					img: "yellow",	linked: [17, 18, 23],				depend: null,	blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 0},
{name: "Phantom Ray",				img: "pink",	linked: [13, 21, 24],				depend: 7,		blockedBy: [17, 26, 53],	archetype: null,			cost: 2, archReq: 0},
{name: "Fire Creep",				img: "yellow",	linked: [14, 20, 22],				depend: 0,		blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "Bryophyte Roots",			img: "yellow",	linked: [15, 21, 25],				depend: 7,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 1},
{name: "Guardian Angels",			img: "red",		linked: [18, 19, 26],				depend: 8,		blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 3},
{name: "Focus",						img: "red",		linked: [20, 27, 28],				depend: null,	blockedBy: null,			archetype: "Sharpshooter",	cost: 2, archReq: 2},
{name: "Basaltic Trap",				img: "red",		linked: [22, 29],					depend: 0,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 2},
{name: "Windstorm",					img: "yellow",	linked: [23, 27, 30, 34],			depend: 7,		blockedBy: [20],			archetype: null,			cost: 2, archReq: 0},
{name: "Cheaper Arrow Storm",		img: "white",	linked: [24, 26, 28, 31],			depend: 7,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Grappling Hook",			img: "pink",	linked: [24, 27, 29, 31, 32],		depend: 4,		blockedBy: [47],			archetype: "Trapper",		cost: 2, archReq: 0},
{name: "More Shields",				img: "white",	linked: [25, 28, 32, 33, 39],		depend: 8,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Stormy Feet",				img: "white",	linked: [26],						depend: 10,		blockedBy: null,			archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "More Focus",				img: "white",	linked: [27, 28, 37],				depend: 24,		blockedBy: null,			archetype: "Sharpshooter",	cost: 1, archReq: 0},
{name: "Implosion",					img: "yellow",	linked: [28, 29],					depend: 25,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 0},
{name: "Patient Hunter",			img: "yellow",	linked: [29],						depend: 25,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 0},
{name: "Refined Gunpowder",			img: "white",	linked: [26, 35, 36, 41],			depend: 0,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Traveler",					img: "white",	linked: [34, 36, 37],				depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Fierce Stomp",				img: "yellow",	linked: [34, 35],					depend: 4,		blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 0},
{name: "Twain's Arc",				img: "pink",	linked: [31, 35, 38, 44, 45],		depend: 24,		blockedBy: null,			archetype: "Sharpshooter",	cost: 2, archReq: 4},
{name: "Scorched Earth",			img: "yellow",	linked: [37, 44],					depend: 21,		blockedBy: null,			archetype: "Sharpshooter",	cost: 1, archReq: 0},
{name: "Bouncing Bomb",				img: "pink",	linked: [29, 40],					depend: 0,		blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "More Traps",				img: "white",	linked: [39, 46],					depend: 25,		blockedBy: null,			archetype: "Trapper",		cost: 1, archReq: 0},
{name: "Leap",						img: "yellow",	linked: [34, 42, 43, 47],			depend: null,	blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 5},
{name: "Better Leap",				img: "white",	linked: [41, 43],					depend: 41,		blockedBy: null,			archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "Homing Shots",				img: "pink",	linked: [41, 42, 44, 48],			depend: null,	blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "Shocking Bomb",				img: "yellow",	linked: [37, 43, 45, 49],			depend: 0,		blockedBy: null,			archetype: "Sharpshooter",	cost: 2, archReq: 5},
{name: "Better Arrow Shield",		img: "white",	linked: [37, 38, 44, 46, 49],		depend: 8,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Mana Trap",					img: "red",		linked: [40, 45, 52],				depend: 25,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 5},
{name: "Escape Artist",				img: "yellow",	linked: [41, 48, 43],				depend: 4,		blockedBy: [28],			archetype: null,			cost: 2, archReq: 0},
{name: "Better Guardian Angels",	img: "white",	linked: [43, 47, 55],				depend: 23,		blockedBy: null,			archetype: "Boltslinger",	cost: 1, archReq: 0},
{name: "Initiator",					img: "pink",	linked: [44, 45, 50, 51, 52, 56],	depend: 24,		blockedBy: null,			archetype: "Sharpshooter",	cost: 2, archReq: 5},
{name: "Rocket Jump",				img: "white",	linked: [49, 51, 52],				depend: 0,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Call of the Hound",			img: "pink",	linked: [49, 50, 52, 58],			depend: 8,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 0},
{name: "Cheaper Arrow Storm",		img: "white",	linked: [46, 49, 50, 51],			depend: 7,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Arrow Hurricane",			img: "red",		linked: [47, 54, 55],				depend: 7,		blockedBy: [20],			archetype: "Boltslinger",	cost: 2, archReq: 8},
{name: "Shrapnel Bomb",				img: "yellow",	linked: [53, 55, 60],				depend: 0,		blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 8},
{name: "Precise Shot",				img: "white",	linked: [48, 53, 54, 56],			depend: null,	blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Cheaper Arrow Shield",		img: "white",	linked: [49, 55, 57, 62],			depend: 8,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Decimator",					img: "yellow",	linked: [56, 58], 					depend: 20,		blockedBy: null,			archetype: "Sharpshooter",	cost: 2, archReq: 0},
{name: "Cheaper Escape",			img: "white",	linked: [51, 57, 59, 67],			depend: 4,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Stronger Hook",				img: "white",	linked: [58],						depend: 28,		blockedBy: null,			archetype: "Trapper",		cost: 1, archReq: 5},
{name: "Geyser Stomp",				img: "yellow",	linked: [54, 61, 63],				depend: 36,		blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "Elusive",					img: "yellow",	linked: [60],						depend: 7,		blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 0},
{name: "Crepuscular Ray",			img: "red",		linked: [56, 65],					depend: 7,		blockedBy: null,			archetype: "Sharpshooter",	cost: 2, archReq: 10},
{name: "Snow Storm",				img: "pink",	linked: [60, 64, 65],				depend: null,	blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "All-Seeing Panoptes",		img: "red",		linked: [63],						depend: 23,		blockedBy: null,			archetype: "Boltslinger",	cost: 2, archReq: 11},
{name: "More Focus",				img: "white",	linked: [62, 63, 66],				depend: 24,		blockedBy: null,			archetype: "Sharpshooter",	cost: 1, archReq: 0},
{name: "Cheaper Arrow Bomb",		img: "white",	linked: [65, 70],					depend: 0,		blockedBy: null,			archetype: null,			cost: 1, archReq: 0},
{name: "Grape Bomb",				img: "pink",	linked: [58, 68, 69, 70],			depend: 0,		blockedBy: null,			archetype: null,			cost: 2, archReq: 0},
{name: "Tangled Traps",				img: "yellow",	linked: [67],						depend: 25,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 0},
{name: "Stronger Patient Hunter",	img: "white",	linked: [67],						depend: 33,		blockedBy: null,			archetype: "Trapper",		cost: 1, archReq: 0},
{name: "Minefield",					img: "red",		linked: [66, 67],					depend: 25,		blockedBy: null,			archetype: "Trapper",		cost: 2, archReq: 10}
	],
	tree: [ // indentation funky so it's easier to fit on screen
[null,							null,							null,						null,								0,									null,								null,								null,							null],
[null,							null,							null,						null,								[[0], null, [1], null],				null,								null,								null,							null],
[null,							null,							null,						null,								1,									[null, [1], null, [2]],				2,									null,							null],
[null,							null,							null,						null,								[[1], null, [3], null],				null,								null,								null,							null],
[null,							null,							null,						null,								3,									null,								null,								null,							null],
[null,							null,							null,						null,								[[3], null, [4], null],				null,								null,								null,							null],
[null,							null,							5,							[null, [5], null, [4]],				4,									[null, [4], null, [6]],				6,									null,							null],
[null,							null,							[[5], null, [7], null],		null,								null,								null,								[[6], null, [8], null],				null,							null],
[[null, null, [11], [7, 10]],	[null, [11], [10], [7]],		7,							[null, [7], null, [9]],				9,									[null, [9], null, [8]],				8,									[null, [8], null, [15]],		[null, [8], [15], null]],
[[[7, 10], null, [11], null],	10,								[[7], null, [12], null],	null,								[[9], null, [12, 13, 14], null],	null,								[[8], null, [14], null],			null,							[[8], null, [15], null]],
[[[7, 10], null, [11], null],	null,							[[7], null, [12], null],	null,								[[9], null, [12, 13, 14], null],	null,								[[8], null, [14], null],			null,							[[8], null, [15], null]],
[11,							null,							12,							[null, [12], null, [9, 13, 14]],	[[9], [12], [13], [14]],			[null, [9, 12, 13], null, [14]],	14,									null,							15],
[[[11], null, [16], null],		null,							[[12], null, [17], null],	null,								13,									null,								[[14], null, [21], null],			null,							[[15], null, [22], null]],
[16,							[null, [16], null, [17]],		17,							null,								[[13], null, [20], null],			null,								[[14], null, [21], null],			null,							[[15], null, [22], null]],
[[[16], null, [18], null],		null,							[[17], null, [19], null],	null,								20,									[null, [20], null, [21]],			21,									[null, [21], null, [22]],		22],
[18,							[null, [18], [23], [19]],		19,							null,								[[20], null, [24], null],			null,								null,								null,							[[22], null, [25], null]],
[null,							[[18, 19], null, [23], null],	null,						null,								[[20], null, [24], null],			null,								null,								null,							[[22], null, [25], null]],
[null,							23,								null,						[null, null, [27], [24]],			24,									[null, [24], [28], null],			null,								[null, null, [29], [25]],		25],
[null,							[[23], null, [26], null],		null,						[[24], null, [27], null],			null,								[[24], null, [28], null],			null,								[[25], null, [29], null],		null],
[null,							26,								[null, [26], null, [27]],	27,									[null, [27], [31], [28]],			28,									[null, [28], [32], [29]],			29,								[null, [29], [33], null]],
[null,							[[26], null, [30], null],		null,						null,								31,									null,								32,									[[29], null, [39], null],		33],
[[null, null, [34], [30]],		30,								null,						null,								[[31], null, [37], null],			null,								null,								[[29], null, [39], null],		null],
[[[30], null, [34], null],		null,							null,						null,								[[31], null, [37], null],			null,								null,								[[29], null, [39], null],		null],
[34,							[null, [34], [36], [35]],		35,							[null, [35], null, [37]],			37,									[null, [37], [38], [45]],			[null, [37, 38], [45], null],		39,								[null, [39], [40], null]],
[[[34], null, [41], null],		36,								null,						null,								null,								38,									[[37, 38], null, [45], null],		null,							40],
[[[34], null, [41], null],		null,							null,						null,								null,								null,								[[37, 38], null, [45], null],		null,							[[40], null, [46], null]],
[41,							[null, [41], [42], [43]],		43,							[null, [43], null, [44]],			44,									[null, [44], [49], [45]],			45,									[null, [45], null, [46]],		46],
[[[41], null, [47], null],		42,								[[43], null, [48], null],	null,								null,								[[44, 45], null, [49], null],		null,								null,							[[46], null, [52], null]],
[[[41], null, [47], null],		null,							[[43], null, [48], null],	null,								null,								[[44, 45], null, [49], null],		null,								null,							[[46], null, [52], null]],
[47,							[null, [47], null, [48]],		48,							null,								[null, null, [56], [49]],			49,									[null, [49], [50], [51, 52]],		[null, [49, 50], [51], [52]],	52],
[[[47], null, [53], null],		null,							[[48], null, [55], null],	null,								[[49], null, [56], null],			null,								[[49, 51, 52], null, [50], null],	51,								null],
[53,							[null, [53], [54], [55]],		55,							[null, [55], null, [56]],			56,									[null, [56], [57], null],			50,									[[51], null, [58], null],		null],
[null,							54,								null,						null,								[[56], null, [62], null],			57,									[null, [57], null, [58]],			58,								[null, [58], [59], null]],
[null,							[[54], null, [60], null],		null,						null,								[[56], null, [62], null],			null,								null,								[[58], null, [67], null],		59],
[null,							[[54], null, [60], null],		null,						null,								[[56], null, [62], null],			null,								null,								[[58], null, [67], null],		null],
[[null, null, [61], [64]],		60,								[null, [60], [63], null],	null,								62,									null,								[null, null, [68], [67]],			67,								[null, [67], [69], null]],
[61,							null,							[[60], null, [63], null],	null,								[[62], null, [65], null],			null,								68,									[[67], null, [70], null],		69],
[null,							[null, null, [64], [63]],		63,							[null, [63], null, [65]],			65,									[null, [65], [66], null],			null,								[[67], null, [70], null],		null],
[null,							64,								null,						null,								null,								66,									[null, [66], null, [70]],			70,								null]
	],
	descriptions: [ // indentation funky so it's easier to fit on screen
"Throw a long-ranged arrow that explodes<br/>and deal high damage in a large area<br/>(Self-damage for 25% of DPS)<br/><br/>Mana cost: 50<br/><br/>Total damage: 180% (of DPS)<br/>- Neutral: 160%<br/>- Fire: 20%<br/><br/>Range: 26 blocks<br/>AoE: 2.5 blocks (circular)",
"Improve Main Attack damage and range w/ bow<br/><br/>Main attack damage: +5%<br/>Main attack range: +6 blocks",
"Reduce Mana cost of Arrow Bomb<br/><br/>Mana cost: -10",
"If you hit a mob directly with Arrow Bomb,<br/>shatter its heart and deal bonus damage<br/><br/>Total damage: +100% (of DPS)<br/>- Neutral: 100%",
"Throw yourself backward to avoid danger<br/>(hold shift while escpaing to cancel)<br/><br/>Mana cost: 25",
"Double Main Attack arrows, but they deal<br/>-30% damage per arrow (harder to hit far<br/>enemies)<br/><br/>Blocks:<br/>- Power Shots",
"Main Attack arrows have increased speed<br/>and knockback<br/><br/>Blocks:<br/>- Double Shots",
"Shoots 2 streams of 8 arrows, dealing<br/>significant damage to close mobs and<br/>pushing them back<br/><br/>Mana cost: 40<br/><br/>Total damage: 40% (of DPS per arrow)<br/>- Neutral: 30%<br/>- Thunder: 10%<br/>Range: 16 blocks",
"Create a shield around you that deal<br/>damage and knockback mobs when<br/>triggered (2 charges)<br/><br/>Mana cost: 30<br/><br/>Total damage: 100% (of DPS)<br/>- Neutral: 90%<br/>- Air: 10%<br/>Duration: 60s",
"Reduce mana cost of Escape<br/><br/>Mana cost: -5",
"When casting Escape, give speed to<br/>yourself and nearby allies<br/><br/>Effect: +20% Walk Speed<br/>Duration: 120s<br/>AoE: 8 blocks (circular)",
"Increases base damage from all Air<br/>attacks<br/><br/>Air Damage: +3-4<br/>Air Damage: +15%",
"Increases base damage from all Thunder<br/>attacks<br/><br/>Thunder Damage: +1-8<br/>Thunder Damage: +10%",
"Increases base damage from all Water<br/>attacks<br/><br/>Water Damage: +2-4<br/>Water Damage: +15%",
"Increases base damage from all Fire<br/>attacks<br/><br/>Fire Damage: +3-5<br/>Fire Damage: +15%",
"Increases base damage from all Earth<br/>attacks<br/><br/>Earth Damage: +2-4<br/>Earth Damage: +20%",
"When Arrow Shield loses its last charge,<br/>unleash 200 arrows raining down on<br/>enemies<br/><br/>Total Damage: 200% (of DPS per arrow)<br/>- Neutral: 120%<br/>- Air: 80%",
"Arrow Storm throws out +6 arrows per<br/>stream and shoot twice as fast<br/><br/>Total Damage: -15% (of DPS per arrow)<br/>- Neutral: -15%<br/><br/>Blocks:<br/>- Phantom Ray",
"Triple Main Attack arrows, but they deal<br/>-20% damage per arrow",
"Every time you hit an enemy, briefly gain<br/>+6% Walk Speed (Max 200%). Decay<br/>-40% of the bonus every second",
"Condense Arrow Storm into a single ray<br/>that damages enemies 10 times per<br/>second<br/><br/>Mana cost: -10<br/><br/>Total Damage: 30% (of DPS per hit)<br/>- Neutral: 25%<br/>- Water: 5%<br/>Range: 12 blocks<br/><br/>Blocks:<br/>- Windstorm<br/>- Nimble String<br/>- Arrow Hurricane",
"Arrow Bomb will leak a trail of fire for 6s,<br/>damaging enemies that walk into it every<br/>0.4s<br/><br/>Total Damage: 50% (of DPS)<br/>- Neutral: 30%<br/>- Fire: 20%<br/>Duration: 6s<br/>AoE: 0.8 blocks (linear)",
"When you hit an enemy with Arrow<br/>Storm, create an area that slows them<br/>down and deals damage every 0.4s<br/><br/>Total Damage: 60% (of DPS)<br/>- Neutral: 40%<br/>- Earth: 20%<br/><br/>Effect: 40% Slowness to Enemies Duration: 5s<br/>AoE: 2 blocks (circular)",
"Your protective arrows from Arrow Shield will become sentient bows, dealing<br/>damage up to 8 times each to nearby<br/>enemies (Arrow Shield will no longer<br/>push nearby enemies)<br/><br/>Total Damage: 40% (of DPS per arrow)<br/>- Neutral: 30%<br/>- Air: 10%<br/>Range: 5 Blocks<br/>Duration: 60s",
"When hitting an aggressive mob 5+<br/>blocks away, gain +1 Focus (Max 3). Resets if you miss once<br/><br/>Damage Bonus: +35% (per focus)",
"When you hit the ground with Arrow<br/>Bomb, leave a Trap that damages<br/>enemies (Max 2 Traps)<br/><br/>Total Damage: 250% (of DPS)<br/>- Neutral: 190%<br/>- Earth: 30%<br/>- Fire: 30%<br/>AoE: 7 Blocks (Circular)",
"Arrow Storm shoot +1 stream of arrows<br/>and +2 arrows per stream<br/><br/>Total Damage: -10% (of DPS per arrow)<br/>- Neutral: -10%<br/>- Thunder: -2%<br/>- Air: +2%<br/><br/>Blocks:<br/>- Phantom Ray",
"Reduces the Mana cost of Arrow Storm.<br/><br/>Mana Cost: -5",
"When casting Escape, you throw a hook<br/>that pulls you when hitting a block. If you<br/>hit a mob, pull them towards you instead.<br/>(Escape will not throw you backward<br/>anymore)<br/><br/>Range: 26 blocks<br/><br/>Blocks:<br/>- Escape Artist",
"Give +2 charges to Arrow Shield",
"Windy Feet will last longer and add more<br/>speed<br/><br/>Effect: +20% Walkspeed to Allies Duration: +60s",
"Add +2 max Focus<br/><br/>Damage Bonus: -5% (per focus)",
"Arrow Bomb will pull enemies towards<br/>you. If a Trap is nearby, it will pull them<br/>towards it instead. Increase Heart<br/>Shatter's damage<br/><br/>Total Damage: +40% (of DPS)<br/>- Neutral: +40%",
"Your Traps will deal +20% more damage<br/>for every second they are active (Max<br/>+80%)",
"Increase the damage of Arrow Bomb<br/><br/>Total Damage: +50% (of DPS)<br/>- Neutral: +50%",
"For every 1% Walk Speed you have from<br/>items, gain +1 Raw Spell Damage (Max<br/>100)",
"When using Escape, hold shift to quickly<br/>drop down and deal damage<br/><br/>Total Damage: 100% (of DPS)<br/>- Neutral: 100%<br/>AoE: 4 Blocks (Circular)",
"If you have 2+ Focus, holding shift will<br/>summon Twain's Arc. Charge it up to<br/>shoot a destructive long-range beam.<br/>(Damage is dealt as Main Attack<br/>Damage)<br/><br/>Total Damage: 200% (of DPS)<br/>- Neutral: 200%<br/>Range: 64 blocks",
"Fire Creep becomes much stronger<br/><br/>Total Damage: +15% (of DPS)<br/>- Neutral: +10%<br/>- Fire: +5%<br/>Duration: 2s<br/>AoE: +0.4 Blocks (linear)",
"Arrow Bomb will bounce once when<br/>hitting a block or enemy",
"Increase the maximum amount of active<br/>Traps you can have by +2",
"When you double tap jump, leap forward.<br/>(2s Cooldown)",
"Reduce Leap's cooldown by -1s",
"Your Main Attack arrows will follow<br/>nearby enemies and not be affected by<br/>gravity",
"Arrow Bomb will not be affected by<br/>gravity, and all damage conversions<br/>become Thunder",
"Arrow Shield will gain additonal AoE,<br/>knockback, and damage<br/><br/>Total Damage: +40% (of DPS)<br/>- Neutral: +40%<br/>AoE: +1 Blocks (Circular)",
"Your Traps will give you 2.85 Mana per<br/>second when you stay close to them<br/><br/>Mana Cost: +10<br/><br/>Range: 16 Blocks",
"When casting Escape, release 135<br/>arrows towards the ground<br/><br/>Total Damage: 40% (of DPS, per arrow)<br/>- Neutral: 30%<br/>- Thunder: 10%<br/><br/>Blocks:<br/>- Grappling Hook",
"Your Guardian Angels can shoot +4<br/>arrows before disappearing",
"If you do not damage an enemy for 5s or more,<br/>your next successful hit will deal<br/>+50% damage and add +1 Focus",
"Arrow Bomb's self-damage will<br/>knockback you farther away",
"Arrow Shield summons a Hound that will<br/>attack and drag aggressive mobs towards<br/>your traps<br/><br/>Total Damage: 40% (of DPS)<br/>- Neutral: 40%",
"Reduce the Mana cost of Arrow Storm<br/><br/>Mana Cost: -5",
"Arrow Storm will shoot +2 stream of<br/>arrows<br/><br/>Blocks:<br/>- Phantom Ray",
"Arrow Bomb's explosion will fling 15<br/>shrapnel, dealing damage in a large area<br/><br/>Total Damage: 60% (of DPS, per<br/>shrapnel)<br/>- Neutral: 40%<br/>- Fire: 20%",
"+30% Critical Hit Damage",
"Reduce the Mana cost of Arrow Shield<br/><br/>Mana Cost: -5",
"Phantom Ray will increase its damage by<br/>10% everytime you do not miss with it<br/>(Max 50%)",
"Reduce the Mana cost of Escape<br/><br/>Mana Cost: -5",
"Increases your Grappling Hook's range,<br/>speed, and strength<br/><br/>Range: +4 Blocks",
"Fierce Stomp will create geysers, dealing<br/>more damage and vertical knockback<br/><br/>Total Damage: +50% (of DPS)<br/>- Water: +50%<br/>AoE: +1 Blocks (Circular)",
"If you do not get hit for 8+ seconds,<br/>become immune to self-damage and<br/>remove Arrow Storm's recoil. (Dodging<br/>counts as not getting hit)",
"If you have 5 Focus, casting Arrow Storm<br/>will make you levitate and shoot 20<br/>homing arrows per second until you run<br/>out of Focus<br/>While in that state, you will lose 1 Focus<br/>per second<br/><br/>Total Damage: 15% (of DPS per arrrow)<br/>- Neutral: 10%<br/>- Water: 5%",
"Enemies near you will be slowed down<br/><br/>Effect: 30% Slowness to Enemies<br/>Range: 2.5 Blocks",
"Your bows from Guardian Angels become<br/>all-seeing, increasing their range,<br/>damage, and letting them shoot up to +5<br/>times each<br/><br/>Total Damage: +10% (of DPS, per arrow)<br/>- Fire: +10%<br/>Range: +8 Blocks",
"Add +2 max Focus<br/><br/>Damage Bonus: -5% (per focus)",
"Reduce the Mana cost of Arrow Bomb<br/><br/>Mana Cost: -5",
"Arrow Bomb will throw 3 additional<br/>smaller bombs when exploding<br/><br/>Total Damage: 40% (of DPS)<br/>- Neutral: 30%<br/>- Fire: 10%<br/>AoE: 2 Blocks (Circular)",
"Your Traps will be connected by a rope<br/>that deals damage to enemies every 0.2s<br/><br/>Total Damage: 40% (of DPS)<br/>- Neutral: 20%<br/>- Air: 20%",
"Add +80% Max Damage to Patient<br/>Hunter",
"Allow you to place +6 Traps, but with<br/>reduced damage and range<br/><br/>Total Damage: -80% (of DPS)<br/>- Neutral: -80%<br/>AoE: -2 Blocks (Circular)"
	],
	pages: [5, 10, 16, 22, 28, 34],
	archetypes: {"Boltslinger": {color: "#ffff55", icon: "2"}, "Sharpshooter": {color: "#ff55ff", icon: "6"}, "Trapper": {color: "#00aa00", icon: "5"}},
	chosen: [0],
	spells: [
		{name: "Arrow Bomb", 	ability: 0, mana: 50, manaMods: {2: -10, 46: 10, 66: -5},	affectedBy: [2, 3, 21, 25, 32, 33, 34, 36, 39, 40, 44, 46, 50, 54, 66, 67, 68, 70]},
		{name: "Escape", 		ability: 4, mana: 25, manaMods: {9: -5, 58: -5},			affectedBy: [9, 10, 28, 30, 47, 58, 59]},
		{name: "Arrow Storm", 	ability: 7, mana: 40, manaMods: {20: -10, 27: -5, 52: -5},	affectedBy: [17, 20, 22, 26, 27, 52, 53, 57, 61, 62]},
		{name: "Arrow Shield", 	ability: 8, mana: 30, manaMods: {56: -5},					affectedBy: [16, 23, 29, 45, 48, 51, 56, 64]}
	]
}