const STORAGE_KEY = "pga-picker-dashboard-v1";
const TOP_TEN_HISTORY_KEY = "pga-picker-top-ten-history-v1";

const completedTournamentResults = {
  "charles schwab challenge": {
    "russell henley": "1",
    "eric cole": "2",
    "ben griffin": "T3",
    "alex smalley": "T3",
    "mac meissner": "T3",
    "gary woodland": "T6",
    "michael brennan": "T6",
    "nico echavarria": "T6",
    "j j spaun": "T6",
    "jj spaun": "T6",
    "steven fisk": "T10",
    "mackenzie hughes": "T10",
    "ryan gerard": "T10",
    "jordan smith": "T13",
    "justin thomas": "T13",
    "hideki matsuyama": "T13",
    "michael thorbjornsen": "16",
    "ludvig aberg": "T17",
    "max homa": "T22",
    "pierceson coody": "T22",
    "akshay bhatia": "T28",
    "davis thompson": "T35",
    "keith mitchell": "CUT",
    "rickie fowler": "CUT",
    "sungjae im": "CUT"
  },
  "the memorial tournament presented by workday": {
    "j t poston": "1",
    "jt poston": "1",
    "ryan gerard": "2",
    "sam burns": "T3",
    "tommy fleetwood": "T3",
    "wyndham clark": "T3",
    "eric cole": "T6",
    "scottie scheffler": "T12",
    "rory mcilroy": "T12",
    "xander schauffele": "T12",
    "ludvig aberg": "T20",
    "si woo kim": "T20",
    "justin rose": "T20",
    "cameron young": "T35",
    "matt fitzpatrick": "T38",
    "justin thomas": "T38",
    "patrick cantlay": "T42",
    "russell henley": "T42"
  }
};

const tournaments = [
  {
    name: "THE CJ CUP Byron Nelson",
    start: "2026-05-21",
    end: "2026-05-24",
    course: "TPC Craig Ranch",
    location: "McKinney, TX",
    purse: "$10.3 million",
    courseFit: "TPC Craig Ranch fit",
    description: "Rank the field by recent heat, TPC Craig Ranch course fit, similar-course profile, and current VegasInsider odds.",
    note: "Course comp logic favors TPC Craig Ranch's scoring-friendly par 71: wide fairways, reachable par 5s, bentgrass greens, birdie streaks, and enough Texas wind to reward steady ball striking."
  },
  {
    name: "Charles Schwab Challenge",
    start: "2026-05-28",
    end: "2026-05-31",
    course: "Colonial Country Club",
    location: "Fort Worth, TX",
    purse: "$9.9 million",
    courseFit: "Colonial Country Club fit",
    description: "Rank the field by recent heat, Colonial Country Club course fit, similar-course profile, and current VegasInsider odds.",
    note: "Course comp logic favors Colonial Country Club's precision profile: controlled driving, accurate approaches, patience on firm greens, and enough Texas wind to reward steady ball striking."
  },
  {
    name: "the Memorial Tournament presented by Workday",
    start: "2026-06-04",
    end: "2026-06-07",
    course: "Muirfield Village Golf Club",
    location: "Dublin, OH",
    purse: "$20 million",
    courseFit: "Muirfield Village fit",
    description: "Rank the field by recent heat, Muirfield Village course fit, similar-course profile, and current VegasInsider odds.",
    note: "Course comp logic favors Muirfield Village's demanding tee-to-green test: precise long irons, disciplined driving, fast greens, and patient scoring on a major-style setup."
  },
  {
    name: "RBC Canadian Open",
    start: "2026-06-11",
    end: "2026-06-14",
    course: "TPC Toronto at Osprey Valley - North Course",
    location: "Caledon, Ontario, Canada",
    purse: "$9.8 million",
    courseFit: "TPC Toronto fit",
    description: "Rank the field by recent heat, TPC Toronto course fit, similar-course profile, and current VegasInsider odds.",
    note: "Course comp logic favors TPC Toronto's North Course: exposed Canadian parkland routing, strong driving, confident long approaches, and enough scoring chances to reward players who can stack birdies without losing control."
  },
  {
    name: "U.S. Open",
    start: "2026-06-18",
    end: "2026-06-21",
    course: "Shinnecock Hills Golf Club",
    location: "Southampton, NY",
    purse: "$21.5 million",
    courseFit: "Shinnecock Hills fit",
    description: "Rank the field by recent heat, Shinnecock Hills course fit, similar-course profile, and current VegasInsider odds.",
    note: "Course comp logic favors U.S. Open control: elite approach play, firm-and-fast patience, scrambling under pressure, and avoiding big numbers."
  },
  {
    name: "Travelers Championship",
    start: "2026-06-25",
    end: "2026-06-28",
    course: "TPC River Highlands",
    location: "Cromwell, CT",
    purse: "$20 million",
    courseFit: "TPC River Highlands fit",
    description: "Rank the field by recent heat, TPC River Highlands course fit, similar-course profile, and current VegasInsider odds.",
    note: "Course comp logic favors TPC River Highlands scoring: wedge proximity, birdie streaks, positional driving, and converting enough mid-range putts."
  }
];

const oddsSource = {
  tournament: "RBC Canadian Open",
  updatedLabel: "Jun 9, 2026",
  books: ["Bet365", "BetMGM", "DraftKings", "Caesars", "FanDuel", "RiversCasino"],
  url: "https://www.vegasinsider.com/golf/odds/futures/"
};

const staleCharlesSchwabPlayers = [
  {
    id: "ludvig-aberg",
    name: "Ludvig Aberg",
    country: "SWE",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 750, BetMGM: 800, DraftKings: 970, Caesars: 800, FanDuel: 850, RiversCasino: 800 },
    resultsVerified: true,
    last5: [["PGA Championship", "T4"], ["Truist Championship", "T8"], ["RBC Heritage", "T4"], ["Masters Tournament", "T21"], ["Valero Texas Open", "T5"]],
    hot: 88,
    course: 91,
    similar: 90,
    note: "VegasInsider favorite. Accurate driver and elite ball-striking profile fit Colonial's position-first routing."
  },
  {
    id: "russell-henley",
    name: "Russell Henley",
    country: "USA",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 1800, BetMGM: 1800, DraftKings: 2000, Caesars: 1600, FanDuel: 1800, RiversCasino: 1600 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Cadillac Championship", "T49"], ["RBC Heritage", "T25"], ["Masters Tournament", "T3"], ["Valero Texas Open", "CUT"]],
    hot: 86,
    course: 94,
    similar: 92,
    note: "A premium Colonial fit: fairways, wedges, and putting discipline matter more here than raw speed."
  },
  {
    id: "justin-thomas",
    name: "Justin Thomas",
    country: "USA",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 1800, BetMGM: 2000, DraftKings: 2300, Caesars: 1500, FanDuel: 2000, RiversCasino: 1600 },
    resultsVerified: true,
    last5: [["PGA Championship", "T4"], ["Truist Championship", "13"], ["Cadillac Championship", "T23"], ["RBC Heritage", "T77"], ["Masters Tournament", "T41"]],
    hot: 84,
    course: 89,
    similar: 88,
    note: "Spike approach weeks are live. The market is shorter at some books, so shop the board."
  },
  {
    id: "rickie-fowler",
    name: "Rickie Fowler",
    country: "USA",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 2200, BetMGM: 2200, DraftKings: 2300, Caesars: 2000, FanDuel: 2200, RiversCasino: 1800 },
    resultsVerified: true,
    last5: [["PGA Championship", "T60"], ["Truist Championship", "T2"], ["Cadillac Championship", "T9"], ["RBC Heritage", "T8"], ["Valero Texas Open", "CUT"]],
    hot: 78,
    course: 88,
    similar: 86,
    note: "A course-history and shot-shaping type of play where Colonial can hide some distance gaps."
  },
  {
    id: "robert-macintyre",
    name: "Robert Macintyre",
    country: "SCO",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2500, BetMGM: 2500, DraftKings: 2450, Caesars: 2000, FanDuel: 2500, RiversCasino: 2200 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T60"], ["RBC Heritage", "T42"], ["Masters Tournament", "CUT"], ["Valero Texas Open", "T2"]],
    hot: 82,
    course: 86,
    similar: 86,
    note: "Balanced profile with enough control to grade above pure longshot territory at Colonial."
  },
  {
    id: "ben-griffin",
    name: "Ben Griffin",
    country: "USA",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2500, BetMGM: 2200, DraftKings: 2600, Caesars: 2500, FanDuel: 2500, RiversCasino: 2200 },
    resultsVerified: true,
    last5: [["PGA Championship", "T14"], ["Truist Championship", "T63"], ["Cadillac Championship", "3"], ["Zurich Classic of New Orleans", "T10"], ["RBC Heritage", "T33"]],
    hot: 83,
    course: 87,
    similar: 85,
    note: "Defending champion with a market price that still leaves room for upside."
  },
  {
    id: "jj-spaun",
    name: "J.J. Spaun",
    country: "USA",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2800, BetMGM: 2500, DraftKings: 3100, Caesars: 2800, FanDuel: 3000, RiversCasino: 2800 },
    resultsVerified: true,
    last5: [["Truist Championship", "T5"], ["Cadillac Championship", "T14"], ["RBC Heritage", "T25"], ["Masters Tournament", "CUT"], ["Valero Texas Open", "1"]],
    hot: 82,
    course: 87,
    similar: 88,
    note: "Strong positional-course profile with a good best price on the VegasInsider board."
  },
  {
    id: "hideki-matsuyama",
    name: "Hideki Matsuyama",
    country: "JPN",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2800, BetMGM: 3000, DraftKings: 3100, Caesars: 2500, FanDuel: 3000, RiversCasino: 2800 },
    resultsVerified: true,
    last5: [["PGA Championship", "T26"], ["Truist Championship", "71"], ["Cadillac Championship", "T53"], ["Masters Tournament", "T12"], ["Valero Texas Open", "T21"]],
    hot: 80,
    course: 88,
    similar: 89,
    note: "Iron play and scrambling keep him in the course-fit conversation at a fair mid-board number."
  },
  {
    id: "alex-smalley",
    name: "Alex Smalley",
    country: "USA",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2800, BetMGM: 3300, DraftKings: 3300, Caesars: 2500, FanDuel: 3000, RiversCasino: 2800 },
    resultsVerified: true,
    last5: [["PGA Championship", "T2"], ["Truist Championship", "T17"], ["Cadillac Championship", "T7"], ["Zurich Classic of New Orleans", "T2"], ["Valero Texas Open", "T14"]],
    hot: 79,
    course: 86,
    similar: 85,
    note: "A precise enough profile to fit Colonial and a better price at multiple books."
  },
  {
    id: "akshay-bhatia",
    name: "Akshay Bhatia",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 3300, DraftKings: 3400, Caesars: 2500, FanDuel: 3500, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T37"], ["Cadillac Championship", "T23"], ["RBC Heritage", "T16"], ["Masters Tournament", "CUT"]],
    hot: 76,
    course: 84,
    similar: 83,
    note: "A volatile but useful fit if the wedges and putter warm up."
  },
  {
    id: "keegan-bradley",
    name: "Keegan Bradley",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 4000, BetMGM: 4000, DraftKings: 3600, Caesars: 3500, FanDuel: 4000, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T19"], ["Cadillac Championship", "T49"], ["RBC Heritage", "T12"], ["Masters Tournament", "T21"]],
    hot: 75,
    course: 82,
    similar: 82,
    note: "Longer number with enough ball-striking to matter if Colonial plays firm."
  },
  {
    id: "keith-mitchell",
    name: "Keith Mitchell",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 4000, BetMGM: 3500, DraftKings: 3800, Caesars: 4000, FanDuel: 4000, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["PGA Championship", "T65"], ["Cadillac Championship", "T55"], ["Zurich Classic of New Orleans", "CUT"], ["Valero Texas Open", "CUT"], ["Texas Children's Houston Open", "T14"]],
    hot: 74,
    course: 82,
    similar: 81,
    note: "Best used when you want a longer number with enough tee-to-green ceiling."
  },
  {
    id: "harry-hall",
    name: "Harry Hall",
    country: "ENG",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3000, BetMGM: 4500, DraftKings: 4100, Caesars: 3500, FanDuel: 3500, RiversCasino: 3500 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T8"], ["Cadillac Championship", "T30"], ["RBC Heritage", "T65"], ["Masters Tournament", "CUT"]],
    hot: 78,
    course: 82,
    similar: 80,
    note: "Interesting market spread across books; best price makes him a dark-horse candidate."
  },
  {
    id: "sungjae-im",
    name: "Sungjae Im",
    country: "KOR",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3300, BetMGM: 4000, DraftKings: 4300, Caesars: 3500, FanDuel: 3500, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T5"], ["Cadillac Championship", "T65"], ["RBC Heritage", "T42"], ["Masters Tournament", "46"]],
    hot: 77,
    course: 83,
    similar: 84,
    note: "A steady longer-price option for lineups that need made-cut reliability more than raw win equity."
  },
  {
    id: "ryo-hisatsune",
    name: "Ryo Hisatsune",
    country: "JPN",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 4000, DraftKings: 4300, Caesars: 2800, FanDuel: 4000, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["Truist Championship", "T45"], ["Cadillac Championship", "T65"], ["RBC Heritage", "T60"], ["Valero Texas Open", "T8"], ["Valspar Championship", "T30"]],
    hot: 73,
    course: 81,
    similar: 80,
    note: "A cleaner differentiator for cards that already have one or two chalky names."
  },
  {
    id: "pierceson-coody",
    name: "Pierceson Coody",
    country: "USA",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 4500, BetMGM: 4000, DraftKings: 4700, Caesars: 4000, FanDuel: 4500, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T24"], ["Cadillac Championship", "T38"], ["RBC Heritage", "T16"], ["Texas Children's Houston Open", "W/D"]],
    hot: 76,
    course: 84,
    similar: 82,
    note: "Still a live dark-horse type, but now priced from the actual Charles Schwab board."
  },
  {
    id: "michael-thorbjornsen",
    name: "Michael Thorbjornsen",
    country: "USA",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 5500, BetMGM: 5500, DraftKings: 4800, Caesars: 4000, FanDuel: 4500, RiversCasino: 5000 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Cadillac Championship", "T53"], ["Zurich Classic of New Orleans", "T13"], ["RBC Heritage", "T33"], ["Valero Texas Open", "CUT"]],
    hot: 73,
    course: 82,
    similar: 81,
    note: "Upside profile with clear price variation across the six books."
  },
  {
    id: "davis-thompson",
    name: "Davis Thompson",
    country: "USA",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 6000, BetMGM: 5500, DraftKings: 6100, Caesars: 5000, FanDuel: 5500, RiversCasino: 6000 },
    resultsVerified: true,
    last5: [["ONEflight Myrtle Beach Classic", "T13"], ["Zurich Classic of New Orleans", "T6"], ["Valero Texas Open", "T14"], ["Texas Children's Houston Open", "CUT"], ["Valspar Championship", "T46"]],
    hot: 74,
    course: 82,
    similar: 81,
    note: "A sensible sleeper if you want recent top-15s and a bigger outright number."
  },
  {
    id: "thorbjorn-olesen",
    name: "Thorbjorn Olesen",
    country: "DEN",
    tier: "Sleeper",
    risk: "Spicy",
    odds: { Bet365: 9000, BetMGM: 9000, DraftKings: 7200, Caesars: 8000, FanDuel: 10000 },
    resultsVerified: true,
    last5: [["Valero Texas Open", "T49"], ["Texas Children's Houston Open", "T14"], ["Valspar Championship", "CUT"], ["THE PLAYERS Championship", "CUT"], ["Cognizant Classic in The Palm Beaches", "T40"]],
    hot: 69,
    course: 79,
    similar: 78,
    note: "A true longshot with a top-14 Houston result and a much longer FanDuel price."
  }
];

const staleMemorialPlayers = [
  {
    id: "scottie-scheffler",
    name: "Scottie Scheffler",
    country: "USA",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 320, BetMGM: 300, DraftKings: 315, Caesars: 330, FanDuel: 350, Fanatics: 330, Kalshi: 300 },
    resultsVerified: true,
    last5: [["THE CJ CUP Byron Nelson", "3"], ["PGA Championship", "T14"], ["Cadillac Championship", "2"], ["RBC Heritage", "2"], ["Masters Tournament", "2"]],
    hot: 96,
    course: 97,
    similar: 96,
    note: "VegasInsider Memorial favorite. Elite approach play, current form, and Muirfield Village history make him the clear board anchor."
  },
  {
    id: "rory-mcilroy",
    name: "Rory McIlroy",
    country: "NIR",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 1000, BetMGM: 1000, DraftKings: 1000, Caesars: 1100, FanDuel: 1200, Fanatics: 1100, Kalshi: 1000 },
    resultsVerified: true,
    last5: [["PGA Championship", "T7"], ["Truist Championship", "T19"], ["Masters Tournament", "1"], ["THE PLAYERS Championship", "T46"], ["Arnold Palmer Invitational presented by Mastercard", "W/D"]],
    hot: 91,
    course: 93,
    similar: 92,
    note: "Power and long-iron control fit a demanding Memorial setup, with enough recent high finishes to keep him near the top."
  },
  {
    id: "cameron-young",
    name: "Cameron Young",
    country: "USA",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 1400, BetMGM: 1600, DraftKings: 1475, Caesars: 1600, FanDuel: 1800, Fanatics: 1800, Kalshi: 1400 },
    resultsVerified: true,
    last5: [["PGA Championship", "T26"], ["Truist Championship", "T10"], ["Cadillac Championship", "1"], ["RBC Heritage", "T25"], ["Masters Tournament", "T3"]],
    hot: 92,
    course: 91,
    similar: 92,
    note: "Direct VegasInsider Memorial row. Red-hot 2026 trend with two recent wins and a major-style skill set."
  },
  {
    id: "xander-schauffele",
    name: "Xander Schauffele",
    country: "USA",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 1800, BetMGM: 1800, DraftKings: 1700, Caesars: 1800, FanDuel: 1800, Fanatics: 1800, Kalshi: 1400 },
    resultsVerified: true,
    last5: [["PGA Championship", "T7"], ["Masters Tournament", "T9"], ["THE PLAYERS Championship", "3"], ["Valspar Championship", "T4"], ["Genesis Invitational", "T7"]],
    hot: 88,
    course: 91,
    similar: 91,
    note: "Reliable tee-to-green profile and major-style patience keep him firmly in the top-10 mix."
  },
  {
    id: "ludvig-aberg",
    name: "Ludvig Aberg",
    country: "SWE",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 1400, BetMGM: 1400, DraftKings: 1550, Caesars: 1400, FanDuel: 1500, Fanatics: 1400, Kalshi: 1200 },
    resultsVerified: true,
    last5: [["Charles Schwab Challenge", "T17"], ["PGA Championship", "T4"], ["Truist Championship", "T8"], ["RBC Heritage", "T4"], ["Masters Tournament", "T21"]],
    hot: 89,
    course: 90,
    similar: 92,
    note: "Ball-striking trend remains excellent, and the longer DraftKings number improves his value score."
  },
  {
    id: "matt-fitzpatrick",
    name: "Matt Fitzpatrick",
    country: "ENG",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2000, BetMGM: 2000, DraftKings: 1900, Caesars: 2200, FanDuel: 2200, Fanatics: 2200, Kalshi: 2000 },
    resultsVerified: true,
    last5: [["PGA Championship", "T7"], ["Truist Championship", "T24"], ["Cadillac Championship", "T7"], ["RBC Heritage", "T8"], ["Masters Tournament", "CUT"]],
    hot: 84,
    course: 89,
    similar: 88,
    note: "Accuracy, scrambling, and firm-course discipline give him a clean Muirfield Village path."
  },
  {
    id: "si-woo-kim",
    name: "Si Woo Kim",
    country: "KOR",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2000, BetMGM: 2200, DraftKings: 2150, Caesars: 2200, FanDuel: 2200, Fanatics: 2200, Kalshi: 2200 },
    resultsVerified: true,
    last5: [["PGA Championship", "T35"], ["THE CJ CUP Byron Nelson", "T2"], ["Truist Championship", "T17"], ["Cadillac Championship", "T4"], ["RBC Heritage", "3"]],
    hot: 86,
    course: 88,
    similar: 89,
    note: "Recent top-end finishes and a balanced skill set make him one of the better mid-board values."
  },
  {
    id: "russell-henley",
    name: "Russell Henley",
    country: "USA",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2000, BetMGM: 2200, DraftKings: 2000, Caesars: 1400, FanDuel: 2000, Fanatics: 1800, Kalshi: 2000 },
    resultsVerified: true,
    last5: [["Charles Schwab Challenge", "1"], ["PGA Championship", "CUT"], ["Cadillac Championship", "T49"], ["RBC Heritage", "T25"], ["Masters Tournament", "T3"]],
    hot: 87,
    course: 88,
    similar: 87,
    note: "Fresh win equity plus elite accuracy keeps him playable even with a shorter consensus than the longshots."
  },
  {
    id: "patrick-cantlay",
    name: "Patrick Cantlay",
    country: "USA",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2500, BetMGM: 2500, DraftKings: 2700, Caesars: 2500, FanDuel: 3300, Fanatics: 3250, Kalshi: 2200 },
    resultsVerified: true,
    last5: [["PGA Championship", "T35"], ["Truist Championship", "T10"], ["RBC Heritage", "T8"], ["Masters Tournament", "T12"], ["Valspar Championship", "T7"]],
    hot: 82,
    course: 90,
    similar: 88,
    note: "Muirfield Village rewards his kind of patient control, and the FanDuel/Fanatics spread creates useful odds value."
  },
  {
    id: "tommy-fleetwood",
    name: "Tommy Fleetwood",
    country: "ENG",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2200, BetMGM: 2500, DraftKings: 2900, Caesars: 2500, FanDuel: 2700, Fanatics: 2500, Kalshi: 2500 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T5"], ["Cadillac Championship", "T23"], ["RBC Heritage", "T52"], ["Masters Tournament", "T33"]],
    hot: 81,
    course: 87,
    similar: 88,
    note: "Direct VegasInsider Memorial row. Strong all-around profile with a verified recent T5 at Truist."
  },
  {
    id: "robert-macintyre",
    name: "Robert Macintyre",
    country: "SCO",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 4500, BetMGM: 5000, DraftKings: 3900, Caesars: 4500, FanDuel: 5000, Fanatics: 4500, Kalshi: 4000 },
    resultsVerified: true,
    last5: [["Charles Schwab Challenge", "T42"], ["PGA Championship", "CUT"], ["Truist Championship", "T60"], ["RBC Heritage", "T42"], ["Masters Tournament", "CUT"]],
    hot: 72,
    course: 80,
    similar: 82,
    note: "Direct VegasInsider Memorial row. Best used as a longer-price differentiator rather than a form play."
  },
  {
    id: "ben-griffin",
    name: "Ben Griffin",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3000, BetMGM: 3300, DraftKings: 3900, Caesars: 2800, FanDuel: 3300, Fanatics: 3250, Kalshi: 3300 },
    resultsVerified: true,
    last5: [["Charles Schwab Challenge", "T3"], ["PGA Championship", "T14"], ["Truist Championship", "T63"], ["Cadillac Championship", "3"], ["Zurich Classic of New Orleans", "T10"]],
    hot: 85,
    course: 84,
    similar: 84,
    note: "Direct VegasInsider Memorial row. Recent T3/T14/3 results make him a legitimate value despite uneven approach numbers."
  },
  {
    id: "min-woo-lee",
    name: "Min Woo Lee",
    country: "AUS",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 4500, BetMGM: 4500, DraftKings: 3900, Caesars: 4500, FanDuel: 4500, Fanatics: 4500, Kalshi: 4000 },
    resultsVerified: true,
    last5: [["PGA Championship", "T18"], ["Truist Championship", "T14"], ["Cadillac Championship", "T18"], ["RBC Heritage", "T60"], ["Masters Tournament", "CUT"]],
    hot: 80,
    course: 84,
    similar: 86,
    note: "A longer number with enough scoring pop to matter if the course plays softer than expected."
  },
  {
    id: "justin-thomas",
    name: "Justin Thomas",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3300, BetMGM: 3500, DraftKings: 4000, Caesars: 2500, FanDuel: 4000, Fanatics: 4000, Kalshi: 3300 },
    resultsVerified: true,
    last5: [["Charles Schwab Challenge", "T13"], ["PGA Championship", "T4"], ["Truist Championship", "13"], ["Cadillac Championship", "T23"], ["RBC Heritage", "T77"]],
    hot: 83,
    course: 86,
    similar: 87,
    note: "Volatile, but recent major form and a +4000 best line give him real dark-horse/top-10 appeal."
  }
];

const players = [
  {
    id: "tommy-fleetwood",
    name: "Tommy Fleetwood",
    country: "ENG",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 1100, BetMGM: 1200, DraftKings: 1150, Caesars: 1100, FanDuel: 1200, RiversCasino: 1100 },
    resultsVerified: true,
    last5: [["the Memorial Tournament presented by Workday", "T3"], ["PGA Championship", "CUT"], ["Truist Championship", "T5"], ["Cadillac Championship", "T23"], ["RBC Heritage", "T52"]],
    hot: 88,
    course: 91,
    similar: 90,
    putting: 86,
    note: "VegasInsider RBC favorite. Strong current form, elite ball-striking, and a course setup that rewards controlled aggression."
  },
  {
    id: "matt-fitzpatrick",
    name: "Matt Fitzpatrick",
    country: "ENG",
    tier: "A",
    risk: "Safe",
    odds: { Bet365: 1400, BetMGM: 1400, DraftKings: 1200, Caesars: 1300, FanDuel: 1300, RiversCasino: 1400 },
    resultsVerified: true,
    last5: [["PGA Championship", "T7"], ["Truist Championship", "T24"], ["Cadillac Championship", "T7"], ["RBC Heritage", "T8"], ["Masters Tournament", "T18"]],
    hot: 87,
    course: 92,
    similar: 91,
    putting: 88,
    note: "Excellent accuracy and approach profile for TPC Toronto, with a clean run of recent high finishes."
  },
  {
    id: "sam-burns",
    name: "Sam Burns",
    country: "USA",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 1400, BetMGM: 1400, DraftKings: 1275, Caesars: 1300, FanDuel: 1500, RiversCasino: 1400 },
    resultsVerified: true,
    last5: [["the Memorial Tournament presented by Workday", "T3"], ["PGA Championship", "T18"], ["Truist Championship", "T28"], ["Masters Tournament", "T7"], ["THE PLAYERS Championship", "T13"]],
    hot: 86,
    course: 88,
    similar: 88,
    putting: 90,
    note: "Comes in off a Memorial contention week and has the scoring profile to attack a Canadian Open setup."
  },
  {
    id: "collin-morikawa",
    name: "Collin Morikawa",
    country: "USA",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 2200, BetMGM: 2500, DraftKings: 2350, Caesars: 2000, FanDuel: 2200, RiversCasino: 2200 },
    resultsVerified: true,
    last5: [["PGA Championship", "T26"], ["Truist Championship", "T33"], ["RBC Heritage", "T12"], ["Masters Tournament", "T7"], ["THE PLAYERS Championship", "T22"]],
    hot: 81,
    course: 91,
    similar: 90,
    putting: 76,
    note: "Approach-play ceiling keeps him high on the model even when recent putting is uneven."
  },
  {
    id: "wyndham-clark",
    name: "Wyndham Clark",
    country: "USA",
    tier: "A",
    risk: "Medium",
    odds: { Bet365: 1800, BetMGM: 2000, DraftKings: 2350, Caesars: 1800, FanDuel: 2200, RiversCasino: 2000 },
    resultsVerified: true,
    last5: [["the Memorial Tournament presented by Workday", "T3"], ["PGA Championship", "CUT"], ["THE CJ CUP Byron Nelson", "1"], ["Masters Tournament", "T21"], ["THE PLAYERS Championship", "T35"]],
    hot: 86,
    course: 87,
    similar: 88,
    putting: 87,
    note: "Recent win plus Memorial contention gives him one of the better form curves in the field."
  },
  {
    id: "robert-macintyre",
    name: "Robert Macintyre",
    country: "SCO",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2800, BetMGM: 3000, DraftKings: 2450, Caesars: 2500, FanDuel: 2700, RiversCasino: 2800 },
    resultsVerified: true,
    last5: [["Charles Schwab Challenge", "T42"], ["PGA Championship", "CUT"], ["Truist Championship", "T60"], ["RBC Heritage", "T42"], ["Masters Tournament", "CUT"]],
    hot: 72,
    course: 83,
    similar: 85,
    putting: 79,
    note: "Canadian Open history and a fair VegasInsider price keep him in the highlighted 20."
  },
  {
    id: "kristoffer-reitan",
    name: "Kristoffer Reitan",
    country: "NOR",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2500, BetMGM: 2800, DraftKings: 2500, Caesars: 2200, FanDuel: 2500, RiversCasino: 2500 },
    resultsVerified: true,
    last5: [["PGA Championship", "T22"], ["Truist Championship", "1"], ["Masters Tournament", "T41"], ["Valero Texas Open", "T21"], ["Texas Children's Houston Open", "T35"]],
    hot: 85,
    course: 84,
    similar: 84,
    putting: 86,
    note: "Recent Signature Event winner with enough tee-to-green stability to grade well at this number."
  },
  {
    id: "justin-rose",
    name: "Justin Rose",
    country: "ENG",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 2500, BetMGM: 2800, DraftKings: 2600, Caesars: 2400, FanDuel: 3000, RiversCasino: 2800 },
    resultsVerified: true,
    last5: [["the Memorial Tournament presented by Workday", "T20"], ["PGA Championship", "T35"], ["Truist Championship", "T19"], ["Masters Tournament", "T3"], ["THE PLAYERS Championship", "T26"]],
    hot: 79,
    course: 87,
    similar: 88,
    putting: 84,
    note: "Veteran profile with enough approach discipline and Canadian Open comfort to remain live."
  },
  {
    id: "brooks-koepka",
    name: "Brooks Koepka",
    country: "USA",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 3300, BetMGM: 3000, DraftKings: 2700, Caesars: 2400, FanDuel: 3000, RiversCasino: 3000 },
    resultsVerified: true,
    last5: [["PGA Championship", "T14"], ["Masters Tournament", "T30"], ["THE PLAYERS Championship", "T13"], ["Genesis Invitational", "T18"], ["AT&T Pebble Beach Pro-Am", "T24"]],
    hot: 78,
    course: 86,
    similar: 87,
    putting: 80,
    note: "Power and major-grade ball-striking make him a useful high-upside mid-board play."
  },
  {
    id: "nicolai-hojgaard",
    name: "Nicolai Hojgaard",
    country: "DEN",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 3000, BetMGM: 3500, DraftKings: 2900, Caesars: 3000, FanDuel: 3300, RiversCasino: 2800 },
    resultsVerified: true,
    last5: [["PGA Championship", "T18"], ["Truist Championship", "T37"], ["Masters Tournament", "CUT"], ["Texas Children's Houston Open", "T9"], ["Valspar Championship", "T16"]],
    hot: 78,
    course: 84,
    similar: 86,
    putting: 81,
    note: "Volatile scoring upside and strong driver profile fit the Canadian Open shootout path."
  },
  {
    id: "viktor-hovland",
    name: "Viktor Hovland",
    country: "NOR",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 3500, DraftKings: 3100, Caesars: 3500, FanDuel: 3500, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "T22"], ["Truist Championship", "T14"], ["Masters Tournament", "T18"], ["THE PLAYERS Championship", "T13"], ["Arnold Palmer Invitational presented by Mastercard", "T20"]],
    hot: 79,
    course: 86,
    similar: 87,
    putting: 78,
    note: "Ball-striking and birdie ceiling keep him above longer-priced peers."
  },
  {
    id: "shane-lowry",
    name: "Shane Lowry",
    country: "IRL",
    tier: "B",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 3500, DraftKings: 3400, Caesars: 4000, FanDuel: 4000, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "T26"], ["Truist Championship", "T5"], ["RBC Heritage", "T25"], ["Masters Tournament", "T30"], ["THE PLAYERS Championship", "T22"]],
    hot: 81,
    course: 86,
    similar: 86,
    putting: 82,
    note: "Trending back into form, with enough wind/control skill for a Canadian Open test."
  },
  {
    id: "alex-noren",
    name: "Alex Noren",
    country: "SWE",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3300, BetMGM: 3500, DraftKings: 3700, Caesars: 3500, FanDuel: 3500, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["PGA Championship", "T30"], ["Truist Championship", "T28"], ["RBC Heritage", "T12"], ["Masters Tournament", "T30"], ["Valspar Championship", "T11"]],
    hot: 78,
    course: 85,
    similar: 86,
    putting: 83,
    note: "Steady control profile with one of the better longer best lines on the board."
  },
  {
    id: "jacob-bridgeman",
    name: "Jacob Bridgeman",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 3500, DraftKings: 3800, Caesars: 4000, FanDuel: 4000, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "T30"], ["Truist Championship", "T37"], ["Masters Tournament", "T41"], ["THE PLAYERS Championship", "T5"], ["Genesis Invitational", "1"]],
    hot: 79,
    course: 84,
    similar: 84,
    putting: 85,
    note: "Win equity already shown this season and a playable price across books."
  },
  {
    id: "alex-fitzpatrick",
    name: "Alex Fitzpatrick",
    country: "ENG",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 3500, DraftKings: 3900, Caesars: 4000, FanDuel: 3500, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "T18"], ["Truist Championship", "T8"], ["Zurich Classic of New Orleans", "1"], ["Hero Indian Open", "1"], ["Valspar Championship", "T10"]],
    hot: 87,
    course: 83,
    similar: 85,
    putting: 91,
    note: "One of the form spikes in the field, with recent wins and enough value to qualify as a live dark horse."
  },
  {
    id: "michael-thorbjornsen",
    name: "Michael Thorbjornsen",
    country: "USA",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 4500, BetMGM: 4000, DraftKings: 4000, Caesars: 3000, FanDuel: 4000, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Cadillac Championship", "T53"], ["Zurich Classic of New Orleans", "T13"], ["RBC Heritage", "T33"], ["Valero Texas Open", "CUT"]],
    hot: 73,
    course: 82,
    similar: 82,
    putting: 77,
    note: "Ceiling play with meaningful price variation, best used when the sliders favor upside."
  },
  {
    id: "aaron-rai",
    name: "Aaron Rai",
    country: "ENG",
    tier: "C",
    risk: "Medium",
    odds: { Bet365: 3300, BetMGM: 3500, DraftKings: 4100, Caesars: 2800, FanDuel: 3300, RiversCasino: 3300 },
    resultsVerified: true,
    last5: [["PGA Championship", "1"], ["Truist Championship", "T17"], ["RBC Heritage", "T16"], ["Masters Tournament", "48"], ["THE PLAYERS Championship", "T35"]],
    hot: 89,
    course: 84,
    similar: 85,
    putting: 90,
    note: "PGA Championship winner with three straight top-20 level results in the form stack."
  },
  {
    id: "harry-hall",
    name: "Harry Hall",
    country: "ENG",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 5000, BetMGM: 4500, DraftKings: 4300, Caesars: 5000, FanDuel: 4000, RiversCasino: 5000 },
    resultsVerified: true,
    last5: [["PGA Championship", "CUT"], ["Truist Championship", "T8"], ["Cadillac Championship", "T30"], ["RBC Heritage", "T65"], ["Masters Tournament", "CUT"]],
    hot: 77,
    course: 82,
    similar: 81,
    putting: 84,
    note: "Longer outright number, but recent T8 keeps him in the top-20 highlighted pool."
  },
  {
    id: "eric-cole",
    name: "Eric Cole",
    country: "USA",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 3500, BetMGM: 4500, DraftKings: 4500, Caesars: 3300, FanDuel: 4000, RiversCasino: 4000 },
    resultsVerified: true,
    last5: [["the Memorial Tournament presented by Workday", "T6"], ["Charles Schwab Challenge", "2"], ["PGA Championship", "T35"], ["Truist Championship", "T45"], ["RBC Heritage", "T52"]],
    hot: 86,
    course: 82,
    similar: 83,
    putting: 88,
    note: "Recent runner-up plus another high finish makes him one of the more useful sleeper values."
  },
  {
    id: "keith-mitchell",
    name: "Keith Mitchell",
    country: "USA",
    tier: "Sleeper",
    risk: "Medium",
    odds: { Bet365: 5500, BetMGM: 4000, DraftKings: 4500, Caesars: 5000, FanDuel: 5000, RiversCasino: 4500 },
    resultsVerified: true,
    last5: [["PGA Championship", "T65"], ["Cadillac Championship", "T55"], ["Zurich Classic of New Orleans", "CUT"], ["Valero Texas Open", "CUT"], ["Texas Children's Houston Open", "T14"]],
    hot: 72,
    course: 83,
    similar: 82,
    putting: 74,
    note: "Driver-heavy upside play at a longer number; useful when the model sliders lean course fit."
  }
];

const state = {
  selected: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
  topTenHistory: JSON.parse(localStorage.getItem(TOP_TEN_HISTORY_KEY) || "[]"),
  editingResultRecordId: "",
  resultMessages: {},
  tier: "all",
  sort: "overall",
  search: "",
  weights: {
    hot: 32,
    course: 28,
    similar: 22,
    putting: 20,
    odds: 18
  }
};

const el = {
  search: document.querySelector("#searchInput"),
  tier: document.querySelector("#tierFilter"),
  sort: document.querySelector("#sortSelect"),
  hotWeight: document.querySelector("#hotWeight"),
  courseWeight: document.querySelector("#courseWeight"),
  similarWeight: document.querySelector("#similarWeight"),
  puttingWeight: document.querySelector("#puttingWeight"),
  oddsWeight: document.querySelector("#oddsWeight"),
  tournamentName: document.querySelector("#tournamentName"),
  tournamentDescription: document.querySelector("#tournamentDescription"),
  tournamentStatus: document.querySelector("#tournamentStatus"),
  tournamentCourse: document.querySelector("#tournamentCourse"),
  tournamentDate: document.querySelector("#tournamentDate"),
  tournamentPurse: document.querySelector("#tournamentPurse"),
  courseWeightLabel: document.querySelector("#courseWeightLabel"),
  courseNote: document.querySelector("#courseNote"),
  topTenPill: document.querySelector("#topTenPill"),
  oddsUpdated: document.querySelector("#oddsUpdated"),
  topOverall: document.querySelector("#topOverall"),
  topHot: document.querySelector("#topHot"),
  topCourse: document.querySelector("#topCourse"),
  topTen: document.querySelector("#topTenList"),
  topTenBody: document.querySelector("#topTenBody"),
  toggleTopTen: document.querySelector("#toggleTopTenBtn"),
  recordTopTen: document.querySelector("#recordTopTenBtn"),
  topTenHistory: document.querySelector("#topTenHistory"),
  grid: document.querySelector("#playerGrid"),
  darkHorse: document.querySelector("#darkHorsePick"),
  salaryDrop: document.querySelector("#salaryDropZone"),
  salaryFile: document.querySelector("#salaryFile"),
  salaryResult: document.querySelector("#salaryResult"),
  vegasTournament: document.querySelector("#vegasTournament"),
  vegasLines: document.querySelector("#vegasLines"),
  lineup: document.querySelector("#lineupList"),
  count: document.querySelector("#pickCount"),
  autoPick: document.querySelector("#autoPickBtn"),
  clear: document.querySelector("#clearBtn")
};

function bestOdds(player) {
  return Math.max(...Object.values(player.odds));
}

function consensusOdds(player) {
  const odds = Object.values(player.odds);
  return Math.round(odds.reduce((sum, value) => sum + value, 0) / odds.length);
}

function oddsValue(player) {
  const strength = player.hot * 0.36 + player.course * 0.34 + player.similar * 0.3;
  return Math.min(99, Math.max(35, Math.log10(consensusOdds(player)) * strength * 0.3));
}

function puttingScore(player) {
  return player.putting ?? Math.round(player.hot * 0.42 + player.similar * 0.24 + oddsValue(player) * 0.18 + player.course * 0.16);
}

function score(player) {
  const total = Object.values(state.weights).reduce((sum, value) => sum + value, 0) || 1;
  return (
    player.hot * state.weights.hot +
    player.course * state.weights.course +
    player.similar * state.weights.similar +
    puttingScore(player) * state.weights.putting +
    oddsValue(player) * state.weights.odds
  ) / total;
}

function moneyline(value) {
  return `+${value}`;
}

function currency(value) {
  return `$${Math.round(value).toLocaleString()}`;
}

function tournamentDate(value) {
  return new Date(`${value}T00:00:00`);
}

function monthDay(value) {
  return tournamentDate(value).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function tournamentDateRange(tournament) {
  const start = monthDay(tournament.start);
  const end = monthDay(tournament.end);
  const year = tournamentDate(tournament.end).getFullYear();
  const startMonth = tournamentDate(tournament.start).getMonth();
  const endMonth = tournamentDate(tournament.end).getMonth();
  const endLabel = startMonth === endMonth ? end.replace(/^[A-Za-z]+ /, "") : end;
  return `${start}-${endLabel}, ${year} - ${tournament.location}`;
}

function activeTournament(today = new Date()) {
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return tournaments.find((tournament) => tournamentDate(tournament.end) >= todayStart) || tournaments[tournaments.length - 1];
}

function renderTournament() {
  const tournament = activeTournament();
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isLive = tournamentDate(tournament.start) <= todayStart && todayStart <= tournamentDate(tournament.end);
  el.tournamentName.textContent = tournament.name;
  el.tournamentDescription.textContent = tournament.description;
  el.tournamentStatus.textContent = isLive ? "Current tournament" : "Next tournament";
  el.tournamentCourse.textContent = tournament.course;
  el.tournamentDate.textContent = tournamentDateRange(tournament);
  el.tournamentPurse.textContent = `Total purse: ${tournament.purse}`;
  el.courseWeightLabel.textContent = tournament.courseFit;
  el.courseNote.textContent = tournament.note;
  el.topTenPill.textContent = tournament.courseFit;
  el.oddsUpdated.textContent = oddsSource.updatedLabel;
  el.vegasTournament.textContent = `${oddsSource.tournament} - ${oddsSource.updatedLabel}`;
}

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/\b(jr|sr|ii|iii|iv)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseSalary(value) {
  if (typeof value === "number") return value;
  const parsed = Number(String(value || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function shortName(name) {
  const parts = name.split(" ");
  return parts.length > 1 ? `${parts[0][0]}. ${parts.slice(1).join(" ")}` : name;
}

function riskClass(risk) {
  if (risk === "Safe") return "safe";
  if (risk === "Medium") return "medium";
  return "spicy";
}

function playerMatchesFilters(player) {
  const query = state.search.trim().toLowerCase();
  if (state.tier !== "all" && player.tier !== state.tier) return false;
  if (!query) return true;
  const verifiedResults = player.resultsVerified ? player.last5.flat().join(" ") : "";
  return `${player.name} ${player.country} ${player.tier} ${player.note} ${verifiedResults}`.toLowerCase().includes(query);
}

function filteredPlayers() {
  return players.filter(playerMatchesFilters);
}

function rankedPlayers() {
  return filteredPlayers().sort((a, b) => {
    if (state.sort === "hot") return b.hot - a.hot;
    if (state.sort === "course") return (b.course + b.similar) - (a.course + a.similar);
    if (state.sort === "putting") return puttingScore(b) - puttingScore(a);
    if (state.sort === "odds") return bestOdds(a) - bestOdds(b);
    return score(b) - score(a);
  });
}

function vegasLinePlayers() {
  const vegasOrder = new Map([
    "tommy-fleetwood",
    "matt-fitzpatrick",
    "sam-burns",
    "collin-morikawa",
    "wyndham-clark",
    "robert-macintyre",
    "kristoffer-reitan",
    "justin-rose",
    "brooks-koepka",
    "nicolai-hojgaard",
    "viktor-hovland",
    "shane-lowry",
    "alex-noren",
    "jacob-bridgeman",
    "alex-fitzpatrick",
    "michael-thorbjornsen",
    "aaron-rai",
    "harry-hall",
    "eric-cole",
    "keith-mitchell"
  ].map((id, index) => [id, index]));

  return filteredPlayers().sort((a, b) =>
    (vegasOrder.get(a.id) ?? 999) - (vegasOrder.get(b.id) ?? 999) ||
    a.name.localeCompare(b.name)
  );
}

function darkHorseScore(player) {
  const longshotLift = Math.min(18, Math.log10(consensusOdds(player)) * 6);
  const riskLift = player.risk === "Spicy" ? 4 : player.risk === "Medium" ? 2 : 0;
  return score(player) + oddsValue(player) * 0.12 + longshotLift + riskLift;
}

function darkHorsePlayer() {
  const candidates = filteredPlayers().filter((player) => consensusOdds(player) >= 3500 && player.tier !== "A");
  const pool = candidates.length ? candidates : filteredPlayers();
  return [...pool].sort((a, b) => darkHorseScore(b) - darkHorseScore(a))[0];
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.selected));
}

function saveTopTenHistory() {
  localStorage.setItem(TOP_TEN_HISTORY_KEY, JSON.stringify(state.topTenHistory));
}

function selectedPlayers() {
  return state.selected.map((id) => players.find((player) => player.id === id)).filter(Boolean);
}

const salaryState = {
  candidates: [],
  fileName: "",
  matchedCount: 0
};

function togglePick(playerId) {
  const index = state.selected.indexOf(playerId);
  if (index >= 0) {
    state.selected.splice(index, 1);
  } else if (state.selected.length < 6) {
    state.selected.push(playerId);
  }
  save();
  render();
}

function autoPick() {
  const picks = [];
  const ranked = [...players].sort((a, b) => score(b) - score(a));
  ["A", "B", "C", "Sleeper"].forEach((tier) => {
    const player = ranked.find((item) => item.tier === tier && !picks.includes(item.id));
    if (player) picks.push(player.id);
  });
  ranked.forEach((player) => {
    if (picks.length < 6 && !picks.includes(player.id)) picks.push(player.id);
  });
  state.selected = picks.slice(0, 6);
  save();
  render();
}

function renderSummary() {
  const overall = [...players].sort((a, b) => score(b) - score(a))[0];
  const hot = [...players].sort((a, b) => b.hot - a.hot)[0];
  const course = [...players].sort((a, b) => (b.course + b.similar) - (a.course + a.similar))[0];
  el.topOverall.textContent = shortName(overall.name);
  el.topHot.textContent = shortName(hot.name);
  el.topCourse.textContent = shortName(course.name);
}

function projectionScore(player) {
  const marketExpectation = Math.max(45, 100 - Math.log10(consensusOdds(player)) * 16);
  const trend = player.hot * 0.32 + player.similar * 0.18 + puttingScore(player) * 0.14;
  const courseSkill = player.course * 0.32;
  const modelLean = score(player) * 0.1;
  return trend + courseSkill + marketExpectation * 0.18 + modelLean;
}

function topTenReason(player) {
  const bestLine = moneyline(bestOdds(player));
  if (puttingScore(player) >= 88) return `${puttingScore(player)} putting form, ${player.hot} heat, and ${bestLine} best line.`;
  if (player.course >= 88) return `${player.course} course fit, ${player.hot} heat, and ${bestLine} best line.`;
  if (player.hot >= 82) return `${player.hot} heat with enough ${activeTournament().course} control to trend into contention.`;
  if (bestOdds(player) >= 4000) return `Longer market number, but the skill mix grades as a top-10 path.`;
  return `Balanced form, course fit, and market expectation for ${activeTournament().course}.`;
}

function projectedTopTen() {
  return [...players]
    .sort((a, b) => projectionScore(b) - projectionScore(a))
    .slice(0, 10);
}

function renderTopTen() {
  const rows = projectedTopTen().map((player, index) => `
      <article class="top-ten-row">
        <span class="top-ten-rank">${index + 1}</span>
        <div>
          <strong>${player.name}</strong>
          <span>${topTenReason(player)}</span>
        </div>
        <b>${projectionScore(player).toFixed(1)}</b>
      </article>
    `);

  el.topTen.innerHTML = rows.join("");
}

function recordTopTen() {
  const tournament = activeTournament();
  const record = {
    id: `${tournament.start}-${Date.now()}`,
    tournament: tournament.name,
    date: tournamentDateRange(tournament),
    end: tournament.end,
    recordedAt: new Date().toLocaleString(),
    picks: projectedTopTen().map((player, index) => ({
      rank: index + 1,
      name: player.name,
      score: Number(projectionScore(player).toFixed(1)),
      bestOdds: bestOdds(player)
    }))
  };

  state.topTenHistory = [
    record,
    ...state.topTenHistory.filter((item) => item.tournament !== record.tournament)
  ].slice(0, 12);
  saveTopTenHistory();
  renderTopTenHistory();
}

function recordTournamentOver(record) {
  if (!record.end) return true;
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return tournamentDate(record.end) < todayStart;
}

function resultLookupFor(record) {
  return completedTournamentResults[normalizeName(record.tournament)] || {};
}

function applyKnownTournamentResults(recordId) {
  const record = state.topTenHistory.find((item) => item.id === recordId);
  if (!record) return;

  const lookup = resultLookupFor(record);
  let matchedCount = 0;
  record.picks = record.picks.map((pick) => ({
    ...pick,
    actualFinish: lookup[normalizeName(pick.name)] || pick.actualFinish || ""
  })).map((pick) => {
    if (lookup[normalizeName(pick.name)]) matchedCount += 1;
    return pick;
  });

  state.resultMessages[recordId] = matchedCount
    ? `Applied ${matchedCount} verified result${matchedCount === 1 ? "" : "s"} for ${record.tournament}.`
    : `No verified results are loaded yet for ${record.tournament}.`;
  saveTopTenHistory();
  renderTopTenHistory();
}

function saveWeeklyResults(recordId) {
  const record = state.topTenHistory.find((item) => item.id === recordId);
  if (!record) return;

  const editor = el.topTenHistory.querySelector(`[data-result-editor="${recordId}"]`);
  if (!editor) return;

  record.picks = record.picks.map((pick) => {
    const input = editor.querySelector(`[data-actual-finish="${pick.rank}"]`);
    return {
      ...pick,
      actualFinish: input?.value.trim() || ""
    };
  });
  state.editingResultRecordId = "";
  saveTopTenHistory();
  renderTopTenHistory();
}

function renderTopTenHistory() {
  if (!state.topTenHistory.length) {
    el.topTenHistory.innerHTML = `<div class="top-ten-empty">No weekly Top 10 records yet.</div>`;
    return;
  }

  el.topTenHistory.innerHTML = state.topTenHistory.map((record) => {
    const canAddResults = recordTournamentOver(record);
    const isEditing = state.editingResultRecordId === record.id;
    const resultButton = canAddResults
      ? `<button class="secondary compact-button" type="button" data-apply-results="${record.id}">Apply Results</button>
         <button class="secondary compact-button" type="button" data-add-results="${record.id}">${record.picks.some((pick) => pick.actualFinish) ? "Edit" : "Manual"}</button>`
      : `<button class="secondary compact-button" type="button" disabled>Tournament Open</button>`;
    const resultEditor = isEditing ? `
      <div class="result-editor" data-result-editor="${record.id}">
        ${record.picks.map((pick) => `
          <label>
            <span>${pick.rank}. ${pick.name}</span>
            <input data-actual-finish="${pick.rank}" type="text" value="${pick.actualFinish || ""}" placeholder="T5, CUT, 1" />
          </label>
        `).join("")}
        <div class="result-editor-actions">
          <button class="secondary compact-button" type="button" data-cancel-results="${record.id}">Cancel</button>
          <button class="compact-button" type="button" data-save-results="${record.id}">Save Results</button>
        </div>
      </div>
    ` : "";
    const resultMessage = state.resultMessages[record.id]
      ? `<div class="result-message">${state.resultMessages[record.id]}</div>`
      : "";

    return `
    <details class="top-ten-record" open>
      <summary>
        <strong>${record.tournament}</strong>
        <span>${record.date}</span>
      </summary>
      <div class="top-ten-record-meta">
        <span>Recorded ${record.recordedAt}</span>
        ${resultButton}
      </div>
      ${resultMessage}
      ${record.picks.map((pick) => `
        <div class="top-ten-record-row">
          <strong class="record-result">${pick.actualFinish || "--"}</strong>
          <span>${pick.rank}. ${pick.name}</span>
          <strong>${moneyline(pick.bestOdds)}</strong>
        </div>
      `).join("")}
      ${resultEditor}
    </details>
  `;}).join("");
}

function renderRecentForm(player) {
  if (!player.resultsVerified) return "";

  return `
    <div class="recent-form">
      <span class="metric-label">Last 5 tournaments</span>
      ${player.last5.map(([event, finish]) => `<div class="result-row"><span>${event}</span><strong>${finish}</strong></div>`).join("")}
    </div>
  `;
}

function renderGrid() {
  const selected = new Set(state.selected);
  const cards = rankedPlayers().map((player, index) => {
    const isSelected = selected.has(player.id);
    const disabled = !isSelected && state.selected.length >= 6;
    return `
      <article class="player-card">
        <div class="player-top">
          <div>
            <div class="rank-line">#${index + 1} in current view</div>
            <div class="player-name">${player.name}</div>
            <div class="player-sub">${player.country} - Tier ${player.tier} - consensus ${moneyline(consensusOdds(player))}</div>
          </div>
          <div class="score-badge">${score(player).toFixed(1)}</div>
        </div>
        <div class="metric-grid">
          <div class="metric"><span class="metric-label">Hot</span><strong>${player.hot}</strong></div>
          <div class="metric"><span class="metric-label">Course</span><strong>${player.course}</strong></div>
          <div class="metric"><span class="metric-label">Similar</span><strong>${player.similar}</strong></div>
          <div class="metric"><span class="metric-label">Putting</span><strong>${puttingScore(player)}</strong></div>
          <div class="metric"><span class="metric-label">Best Odds</span><strong>${moneyline(bestOdds(player))}</strong></div>
        </div>
        ${renderRecentForm(player)}
        <div class="odds-board">
          ${Object.entries(player.odds).map(([book, odds]) => `<span>${book}<strong>${moneyline(odds)}</strong></span>`).join("")}
        </div>
        <div class="tag-row">
          <span class="tier-pill">Tier ${player.tier}</span>
          <span class="risk-pill ${riskClass(player.risk)}">${player.risk}</span>
        </div>
        <p class="player-note">${player.note}</p>
        <button class="pick-button ${isSelected ? "selected" : ""}" type="button" data-pick="${player.id}" ${disabled ? "disabled" : ""}>${isSelected ? "Selected" : "Add to Card"}</button>
      </article>
    `;
  });

  el.grid.innerHTML = cards.length ? cards.join("") : `<div class="empty-state">No players match those filters.</div>`;
}

function renderLineup() {
  const lineup = selectedPlayers();
  el.count.textContent = `${lineup.length} / 6`;

  if (!lineup.length) {
    el.lineup.innerHTML = `<div class="empty-state">Build a six-player card from hot form, course fit, and odds value.</div>`;
    return;
  }

  el.lineup.innerHTML = lineup.map((player, index) => `
    <article class="lineup-item">
      <div>
        <strong>${index + 1}. ${player.name}</strong>
        <span>${score(player).toFixed(1)} model - ${player.hot} hot - ${moneyline(consensusOdds(player))} consensus</span>
      </div>
      <button class="remove-button" type="button" data-remove="${player.id}" aria-label="Remove ${player.name}">x</button>
    </article>
  `).join("");
}

function renderDarkHorse() {
  const player = darkHorsePlayer();
  if (!player) {
    el.darkHorse.innerHTML = `<div class="empty-state">No dark horse matches those filters.</div>`;
    return;
  }

  const bestLine = bestOdds(player);
  const recentTop20s = player.resultsVerified ? player.last5.filter(([, finish]) => /^T?([1-9]|1[0-9]|20)$/.test(finish)).length : 0;
  const resultText = player.resultsVerified ? `and ${recentTop20s} top-20 result${recentTop20s === 1 ? "" : "s"} in the last five starts` : "with recent results hidden until PGA TOUR verification is loaded";
  const reason = `${player.course} course fit, ${moneyline(bestLine)} best line, ${resultText}.`;

  el.darkHorse.innerHTML = `
    <article class="dark-horse-card">
      <div class="dark-horse-top">
        <div>
          <strong>${player.name}</strong>
          <span>${player.country} - Tier ${player.tier} - ${player.risk}</span>
        </div>
        <div class="dark-horse-price">${moneyline(bestLine)}</div>
      </div>
      <p>${reason}</p>
      <button class="pick-button ${state.selected.includes(player.id) ? "selected" : ""}" type="button" data-dark-pick="${player.id}" ${!state.selected.includes(player.id) && state.selected.length >= 6 ? "disabled" : ""}>${state.selected.includes(player.id) ? "Selected" : "Add Dark Horse"}</button>
    </article>
  `;
}

function bestSalaryLineup(candidates) {
  const states = Array.from({ length: 7 }, () => new Map());
  states[0].set(0, { lineup: [], salary: 0, totalScore: 0 });

  candidates.forEach((candidate) => {
    const salary = Math.round(candidate.salary);
    for (let count = 5; count >= 0; count -= 1) {
      states[count].forEach((state) => {
        const nextSalary = state.salary + salary;
        if (nextSalary > 50000) return;

        const nextState = {
          lineup: [...state.lineup, candidate],
          salary: nextSalary,
          totalScore: state.totalScore + candidate.modelScore
        };
        const existing = states[count + 1].get(nextSalary);
        if (!existing || nextState.totalScore > existing.totalScore) {
          states[count + 1].set(nextSalary, nextState);
        }
      });
    }
  });

  return [...states[6].values()].sort((a, b) => b.totalScore - a.totalScore || b.salary - a.salary)[0] || null;
}

function salaryModelScore(candidate) {
  if (candidate.player) return score(candidate.player);

  const total = Object.values(state.weights).reduce((sum, value) => sum + value, 0) || 1;
  const salarySignal = candidate.salaryScore;
  return (
    salarySignal * state.weights.hot +
    salarySignal * state.weights.course +
    salarySignal * state.weights.similar +
    salarySignal * state.weights.putting +
    candidate.valueScore * state.weights.odds
  ) / total;
}

function candidateName(candidate) {
  return candidate.player?.name || candidate.name;
}

function candidateId(candidate) {
  return candidate.player?.id || candidate.id;
}

function renderSalaryBuilder() {
  if (!salaryState.fileName) {
    el.salaryResult.innerHTML = `<div class="salary-empty">Waiting for an Excel salary file.</div>`;
    return;
  }

  const candidates = salaryState.candidates
    .map((candidate) => ({ ...candidate, modelScore: salaryModelScore(candidate) }))
    .sort((a, b) => b.modelScore - a.modelScore);
  const best = bestSalaryLineup(candidates);

  if (!best) {
    const cheapestSix = [...candidates].sort((a, b) => a.salary - b.salary).slice(0, 6);
    const cheapestTotal = cheapestSix.reduce((sum, candidate) => sum + candidate.salary, 0);
    el.salaryResult.innerHTML = `
      <div class="salary-empty">
        Read ${candidates.length} players from ${salaryState.fileName}, but no six-player lineup fits under ${currency(50000)}. Cheapest six total: ${currency(cheapestTotal)}.
      </div>
    `;
    return;
  }

  const rows = best.lineup.map((candidate) => `
    <div class="salary-row ${candidate.player ? "" : "sheet-only"}">
      <span>${candidateName(candidate)}</span>
      <strong>${currency(candidate.salary)}</strong>
    </div>
  `).join("");

  el.salaryResult.innerHTML = `
    <div class="salary-total">
      <span>${currency(best.salary)} / ${currency(50000)}</span>
      <strong>${best.totalScore.toFixed(1)}</strong>
    </div>
    <div class="salary-meta">${salaryState.matchedCount} model matches, ${candidates.length - salaryState.matchedCount} sheet-only players</div>
    ${rows}
    <div class="salary-actions">
      <button id="refreshSalaryTeam" class="secondary" type="button">Refresh Lineup</button>
      <button id="useSalaryTeam" class="pick-button" type="button">Use This Team</button>
    </div>
  `;
}

function loadSalaryRows(rows, fileName) {
  const playerByName = new Map(players.map((player) => [normalizeName(player.name), player]));
  const candidates = [];
  const seen = new Set();

  rows.forEach((row) => {
    const entries = Object.entries(row);
    const nameEntry = entries.find(([key]) => /^(name|player|golfer)$/i.test(String(key).trim())) || entries.find(([, value]) => playerByName.has(normalizeName(value)));
    const salaryEntry = entries.find(([key]) => /salary|cost|price|draftkings|dk/i.test(String(key)));
    const rawName = String(nameEntry?.[1] || "").trim();
    const normalizedName = normalizeName(rawName);
    const player = playerByName.get(normalizedName);
    const salary = parseSalary(salaryEntry?.[1]);
    const id = player?.id || `sheet-${normalizedName}`;
    if (normalizedName && salary > 0 && !seen.has(id)) {
      seen.add(id);
      candidates.push({
        id,
        name: player?.name || rawName,
        player,
        salary
      });
    }
  });

  const salaries = candidates.map((candidate) => candidate.salary);
  if (!salaries.length) {
    salaryState.fileName = fileName;
    salaryState.candidates = [];
    salaryState.matchedCount = 0;
    renderSalaryBuilder();
    return;
  }

  const minSalary = Math.min(...salaries);
  const maxSalary = Math.max(...salaries);
  const salaryRange = Math.max(1, maxSalary - minSalary);

  candidates.forEach((candidate) => {
    const salaryRank = (candidate.salary - minSalary) / salaryRange;
    candidate.salaryScore = 48 + salaryRank * 42;
    candidate.valueScore = 92 - salaryRank * 36;
  });

  salaryState.fileName = fileName;
  salaryState.candidates = candidates;
  salaryState.matchedCount = candidates.filter((candidate) => candidate.player).length;
  renderSalaryBuilder();
}

async function handleSalaryFile(file) {
  if (!file) return;

  if (!window.XLSX) {
    el.salaryResult.innerHTML = `<div class="salary-empty">Excel reader could not load. Check your connection and try again.</div>`;
    return;
  }

  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data, { type: "array" });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(firstSheet, { defval: "" });
  loadSalaryRows(rows, file.name);
}

function renderVegasLines() {
  const rows = vegasLinePlayers().map((player) => {
    const oddsEntries = Object.entries(player.odds);
    const [bestBook, bestLine] = oddsEntries.reduce((best, current) => current[1] > best[1] ? current : best);

    return `
      <article class="vegas-line">
        <div class="line-player">
          <strong>${player.name}</strong>
          <span>${bestBook}</span>
        </div>
        <div>
          <span class="line-price">${moneyline(bestLine)}</span>
        </div>
        <div>
          <span class="line-price">${moneyline(consensusOdds(player))}</span>
          <span class="line-book">avg</span>
        </div>
      </article>
    `;
  });

  el.vegasLines.innerHTML = rows.length ? rows.join("") : `<div class="empty-state">No lines match those filters.</div>`;
}

function render() {
  renderTournament();
  renderSummary();
  renderTopTen();
  renderTopTenHistory();
  renderGrid();
  renderDarkHorse();
  renderSalaryBuilder();
  renderVegasLines();
  renderLineup();
}

function wireEvents() {
  el.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderGrid();
    renderDarkHorse();
    renderVegasLines();
  });
  el.tier.addEventListener("change", (event) => {
    state.tier = event.target.value;
    renderGrid();
    renderDarkHorse();
    renderVegasLines();
  });
  el.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderGrid();
  });
  el.toggleTopTen.addEventListener("click", () => {
    const collapsed = el.topTenBody.classList.toggle("collapsed");
    el.toggleTopTen.textContent = collapsed ? "Expand" : "Collapse";
  });
  el.recordTopTen.addEventListener("click", recordTopTen);
  el.topTenHistory.addEventListener("click", (event) => {
    const applyButton = event.target.closest("[data-apply-results]");
    if (applyButton) {
      applyKnownTournamentResults(applyButton.dataset.applyResults);
      return;
    }

    const addButton = event.target.closest("[data-add-results]");
    if (addButton) {
      state.editingResultRecordId = addButton.dataset.addResults;
      renderTopTenHistory();
      return;
    }

    const cancelButton = event.target.closest("[data-cancel-results]");
    if (cancelButton) {
      state.editingResultRecordId = "";
      renderTopTenHistory();
      return;
    }

    const saveButton = event.target.closest("[data-save-results]");
    if (saveButton) saveWeeklyResults(saveButton.dataset.saveResults);
  });
  ["hot", "course", "similar", "putting", "odds"].forEach((key) => {
    el[`${key}Weight`].addEventListener("input", (event) => {
      state.weights[key] = Number(event.target.value);
      renderSummary();
      renderTopTen();
      renderGrid();
      renderDarkHorse();
      renderSalaryBuilder();
      renderLineup();
    });
  });
  el.grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pick]");
    if (button) togglePick(button.dataset.pick);
  });
  el.lineup.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (button) togglePick(button.dataset.remove);
  });
  el.darkHorse.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dark-pick]");
    if (button) togglePick(button.dataset.darkPick);
  });
  el.salaryFile.addEventListener("change", (event) => {
    handleSalaryFile(event.target.files[0]);
  });
  el.salaryDrop.addEventListener("dragover", (event) => {
    event.preventDefault();
    el.salaryDrop.classList.add("dragging");
  });
  el.salaryDrop.addEventListener("dragleave", () => {
    el.salaryDrop.classList.remove("dragging");
  });
  el.salaryDrop.addEventListener("drop", (event) => {
    event.preventDefault();
    el.salaryDrop.classList.remove("dragging");
    handleSalaryFile(event.dataTransfer.files[0]);
  });
  el.salaryResult.addEventListener("click", (event) => {
    if (event.target.closest("#refreshSalaryTeam")) {
      renderSalaryBuilder();
      return;
    }

    if (!event.target.closest("#useSalaryTeam")) return;
    const best = bestSalaryLineup(salaryState.candidates.map((candidate) => ({ ...candidate, modelScore: salaryModelScore(candidate) })));
    if (!best) return;
    state.selected = best.lineup.map(candidateId).filter((id) => players.some((player) => player.id === id));
    save();
    render();
  });
  el.autoPick.addEventListener("click", autoPick);
  el.clear.addEventListener("click", () => {
    state.selected = [];
    save();
    render();
  });
}

wireEvents();
render();
