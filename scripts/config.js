//death message generation
var deathM;
var deathMS = ["Rest in spaghetti, never forghetti...", "Ripperoni.", "Killed to death!", "Git gud m8!", "OMG HACKERS!1!1!!", "Wubba Lubba Dub Dub!", "Adasba, fix your game...", "[Insert witty death message here]"];
//ordinary message stuff
var msg;
var msg2;
var msgS = [[{ message: "Welcome to Diep TD!", time: 0, duration: 300 },
    { message: "Diep TD is a real time strategy game where you place tanks to fend off enemies.", time: 300, duration: 500 },
    { message: "Find the button for the miner, and click it.", time: 800, duration: 600 },
    { message: "Click again to place the miner. You can only place it in the green area.", message2: "Make sure the pentagon is within the miner's grey circle.", time: 1400, duration: 1200 },
    { message: "Look at the resources bar in the top right corner.", message2: "The miner is converting the pentagon into resources you can use to build tanks.", time: 2600, duration: 1000 },
    { message: "A single miner may not be enough. Place down a few more. The [M] key is an alternative to the button.", message2:"If you run out of space to place miners, use a connector, hotkey is [C].", time: 3600, duration: 600 },
    { message: "Enemy tanks will be approaching soon.", message2: "Find the button for the tank, and place it to the right of the big green object, which is called an extractor.", time: 5000, duration: 1200 },
    { message: "Even more enemies are attacking. A single tank will not do the job. The [SPACE] key may speed up tank placement.", message2: "You can place more tanks, or click on the already-placed tank to see the possible upgrades.", time: 7200, duration: 1200 },
    { message: "Enemy tanks will soon attack from all directions. You will need to place tanks all around your miners and extractor.", message2: "If you cannot place tanks where you want, use a connector (hotkey is [C]) to add extra tank placement area.", time: 8400, duration: 1200 },
    { message: "Just one extractor may not be enough to handle the power drain from your tanks.", message2: "Use the extractor button or the [E] key to add one near the red triangle.", time: 9600, duration: 1200 },
    { message: "30 enemy tanks are now approaching from all directions. Don't panic if you lose some tanks, they can be replaced.", message2: "If you run out of money while under attack, you can use the [R] key or the recycle button to sell something you don't need.", time: 10800, duration: 1400 },
    { message: "There are two waves of enemies left. You're on your own now.", message2: "Good luck!", time: 12500, duration: 600 },
    { message: "It looks like I was wrong. There is a third wave coming. This one is far too powerful to fight off.", message2: "By holding off the enemy, you've given us enough time to send you rescue tanks. Until then, try to defend!", time: 18000, duration: 1200 },
    { message: "In a few seconds we will be there.", message2: "Survive until then.", time: 19000, duration: 500 },
    { message: "Level 1 Complete!", message2: "Levels 2 and 3 unlocked!", time: 19500, duration: 500 }],
    [{ message: "The enemy seems to be aware of our position now.", time: 0, duration: 400 },
    { message: "They'll be sending everything they have at us, including that huge army of tri-angles we faced earlier.", time: 400, duration: 800 },
    { message: "Enemies approaching from the right!", time: 4500, duration: 300 },
    { message: "Enemies approaching from the bottom!", message2: "Looks like they're approaching in a clockwise direction. Remember, sell tanks you aren't using!", time: 6000, duration: 1000 },
    { message: "The huge army of tri-angles are approaching again.", message2: "You should be able to fight them off... hopefully...", time: 19000, duration: 1000 },
    { message: "You know what? Let me help you with this. Get as many tanks as possible, and some extractors.", message2: "When you run out of money, sell your miners. This is the last wave, so selling them will give you more money than if you use them.", time: 20000, duration: 1200 }],
    [{ message: "One of our bases has sustained damage, and it needs to be rebuilt.", time: 0, duration: 800 },
    { message: "Due to a lack of resources, we've sent you to mine some squares.", message2: "This is enemy territory, so stay alert. The more time you take, the stronger they get.", time: 800, duration: 1200 }
    ],
    [{ message: "The extent of the damage was far greater than first anticipated.", message2: "Due to the damage, we will require more resources. Mining an alpha pentagon should do the job.", time: 0, duration: 1200 },
        { message: "Alpha pentagons are an amazing place to find resources, and are undoubtably useful.", message2: "The problem is, you will be facing hordes of crashers. They smash into tanks to deal damage.", time: 1200, duration: 1200 },
        { message: "Crashers may seem weak individually, but in swarms they can be deadly.", message2: "You will be bombarded nonstop by these enemies. The alpha pentagon will spawn them as its health decreases.", time: 2400, duration: 1200 }
    ]];
var msgD;
//variables for level data. "sConfig" is "starting configuration". "eData" is "enemyData"
var sConfig = [[{ type: "triangle", x: 150, y: 0 }, { type: "pentagon", x: -300, y: -100 }, { type: "tank", x: 0, y: 0, tankType: 8 }],
    [{ type: "square", x: 322, y: -176 }, { type: "triangle", x: -437, y: 100 }, { type: "square", x: 50, y: 50 }, { type: "square", x: 180, y: 515 }, { type: "tank", x: 0, y: 0, tankType: 8 }],
    [{ type: "square", x: 700, y: 700 }, { type: "square", x: -700, y: 700 }, { type: "square", x: 700, y: -700 }, { type: "square", x: -700, y: -700 }, { type: "triangle", x: 50, y: 0 }, { type: "tank", x: 0, y: 0, tankType: 8 }],
    [{ type: "alphaPentagon", x: 140, y: 0 }, { type: "tank", x: 0, y: 0, tankType: 8 }]];
var eData = [[{ type: 0, x: 2500, y: 0, time: 5000, pattern: 0, },
    { type: 0, x: 2500, y: -1250, time: 6400, count: 10, pattern: 1, ySpacing: 250, xSpacing: 0 },
    { type: 0, x: 0, y: 0, time: 10800, count: 30, pattern: 2, dirSpacing: Math.PI / 15, radius: 2500, startDir: 0 },
    { type: 2, x: 0, y: 0, time: 13000, count: 30, pattern: 2, dirSpacing: Math.PI / 15, radius: 2500, startDir: 0 },
    { type: 3, x: -2500, y: -500, time: 15500, count: 20, pattern: 1, ySpacing: 50, xSpacing: 0 },
    { type: 4, x: 0, y: 0, time: 18000, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 1500, startDir: 0 },
    { type: 4, x: 0, y: 0, time: 18300, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 1500, startDir: Math.PI / 100 },
    { type: 4, x: 0, y: 0, time: 18600, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 1500, startDir: 2 * Math.PI / 100 },
    { type: 4, x: 0, y: 0, time: 18900, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 1500, startDir: 3 * Math.PI / 100 },
    { type: 4, x: 0, y: 0, time: 19200, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 1500, startDir: 4 * Math.PI / 100 }],
    [{ type: 1, x: 2000, y: -750, time: 4500, count: 4, pattern: 1, ySpacing: 500, xSpacing: 0 },
    { type: 0, x: -625, y: 2000, time: 6000, count: 10, pattern: 1, ySpacing: 0, xSpacing: 250 },
    { type: 0, x: -2000, y: -850, time: 7500, count: 16, pattern: 1, ySpacing: 100, xSpacing: 0 },
    { type: 2, x: -1100, y: -2000, time: 9000, count: 10, pattern: 1, ySpacing: 0, xSpacing: 200 },
    { type: 3, x: 2000, y: -650, time: 10500, count: 12, pattern: 1, ySpacing: 100, xSpacing: 0 },
    { type: 0, x: -575, y: 2000, time: 12000, count: 24, pattern: 1, ySpacing: 0, xSpacing: 50 },
    { type: 4, x: -2000, y: -1700, time: 13500, count: 16, pattern: 1, ySpacing: 200, xSpacing: 0 },
    { type: 1, x: -775, y: -2000, time: 15000, count: 30, pattern: 1, ySpacing: 0, xSpacing: 50 },
    { type: 4, x: 0, y: 0, time: 20000, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 3000, startDir: 0 },
    { type: 4, x: 0, y: 0, time: 20750, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 3000, startDir: Math.PI / 100 },
    { type: 4, x: 0, y: 0, time: 21500, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 3000, startDir: 2 * Math.PI / 100 },
    { type: 4, x: 0, y: 0, time: 22250, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 3000, startDir: 3 * Math.PI / 100 },
    { type: 4, x: 0, y: 0, time: 23000, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 3000, startDir: 4 * Math.PI / 100 }],
    [{ type: 0, x: 4000, y: 3000, time: 1500, count: 3, pattern: 1, ySpacing: 2000, xSpacing: 0 }],
    [{ type: 5, x: 0, y: 0, time: 250, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 4000, startDir: 0 },
    { type: 5, x: 0, y: 0, time: 500, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 4000, startDir: 0 },
    { type: 5, x: 0, y: 0, time: 750, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 4000, startDir: 0 },
    { type: 5, x: 0, y: 0, time: 1000, count: 40, pattern: 2, dirSpacing: Math.PI / 20, radius: 4000, startDir: 0 }]];