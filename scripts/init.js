//context and canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//screen resolution variables
var sX = 1920;
var sY = 1080;
//x and y position
var x = 0;
var y = 0;
//tank variables
var xS = [];
var yS = [];
var tS = [];
var hPS = [];
var mHPS = [];
var tMRS = [];
var tMRS2 = [];
var dS = [];
var pW = [];
var pW2 = [];
var costS = [];
//some mouse crap
var pMX = 0;
var pMY = 0;
var mP = {};
var mID = 0;
//"counter" variables that count stuff
var lctr = 0;
var ctr = 0;
var ctr2 = 0;
var ctr3 = 0;
var ctr4 = 0;
var ctr5 = 0;
var ctr6 = 0;
var ctr7 = 0;
var ctr8 = 0;
var ctr9 = 0;
var ctr10 = 0;
var ctr11 = 0;
var ctr12 = 0;
var ctr13 = 0;
var ctrS = [0, 0, 0, 0, 0];
//idk what these are, they're basically just for random tanks. aN is anti-nuisance.
var aN = 0;
var aN2 = [];
//polygon variables
var xP = [];
var yP = [];
var tP = [];
var hPP = [];
var mHPP = [];
//enemy variables
var xE = [];
var yE = [];
var tE = [];
var dE = [];
var hPE = [];
var mHPE = [];
var tMRE = [];
var tMRE2 = [];
//bullet variables
var xB = [];
var yB = [];
var dB = [];
var lTB = [];
var teams = [];
var vB = [];
var tB = [];
//used for determining what a tank/enemy will aim at
var cEV = 0;
var cEV2 = 0;
var cEV3 = 0;
var cED = 0;
var cED2 = 0;
//used to determining whether a key was pressed
var keys = Array(256);
var keys2 = Array(256);
//used for selecting and adding new towers
var sT = 0;
var sT2 = 0;
var sTV = 0;
//cash and power variables, half of these I'm not using or something
var cash = 1000;
var power = 0;
var mPower = 0;
//the type of tank that is selected to be placed
var pT = 0;
//prevents multiple clicks from auto-upgrading a tank a bunch of times
var aRCV = 0;
//output is dependant on whether your mouse is within an area where a tank can be placed
var iR = 0;
//more power stuff
var pWC = 0;
var pWL = [];
var totalPower = 0;
//fov style, changes a graphical setting
var FOVStyle = 1;
//stands for level active, and it is on when a level is being played. "level" is self-explanatory. levelC is "level complete"
var lVA = 0;
var level = 0;
var levelC = [1, 0, 1, 0];