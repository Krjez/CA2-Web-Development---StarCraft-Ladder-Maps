/* Jakub Polacek
     D00260171
     GD1b 2022   */


/*Remnant from testing of the code functionality
  Technically could be removed as it doesn't have any impact on the website itself,
  but would be needed again if anyone wanted to change/tweak/adjust the site later */
console.log("Error cases showcase");



/*Saves the index of which map link user clicked on the index page to the browser session storage
  Petr Sulc (classmate )teached me how the session storage works on 8.12.2022 */
function storage(jumpIndex) {
  sessionStorage.setItem("jumpIndex",jumpIndex);
}



/*Calls the function for map change on the content page
  If user came from map link on index page -> to the map he clicked on
  If user already was on this site before -> the last map they viewed
  If user is here for first time AND didn't get here through map link on index page -> default to first map
*/
function jumpLoad () {
  var jumpIndex = sessionStorage.getItem("jumpIndex");
  switch(jumpIndex){
	case "0":
	   CosmicSapphire();
	   break;
	case "1":
	   DataC();
	   break;
	case "2":
	   InsideAndOut();
	   break;
	case "3":
	   Moondance();
	   break;
	case "4":
	   Stargazers();
	   break;
	case "5":
	   TropicalSacrifice();
	   break;
	case "6":
	   Waterfall();
	   break;
	default:
	   CosmicSapphire();
	   break;
  }
}



//Called when changing map. Changes the outline border of the map icons to show the current selected
function outlineIcon(iconIndex) {
 for(let i = 0; i < 7; i++){
   document.querySelectorAll(".mapicon > img")[i].style.outline = "none";
 }
 document.querySelectorAll(".mapicon > img")[iconIndex].style.outline = "1px solid white";
}



/*Called by jumpLoad when opening the page
  Or called when user clicks on one of the map icons
  
  Calls function to change outline of the icons
  Calls function to save the index of currently shown map
  Changes the heading, map img, map alt name and map descriptions
  
  Code has same structure for all 7 maps
*/
function CosmicSapphire() {
  outlineIcon(0);
  sessionStorage.setItem("jumpIndex",0);
  document.getElementById("mapName").innerHTML = "Cosmic Sapphire LE";
  document.getElementById("mapImg").src = "images/Cosmic Sapphire.jpeg";
  document.getElementById("mapImg").alt = "Cosmic Sapphire LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 38 seconds<br>Size: 140x140 (big map)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "The map is slightly Terran favorite, but at the same time is one of the 2 best maps for cannon rushes, "+
  "making it a great choice for PvZ.<br><br>There are four high ground expansions"+
  " with respectable chokepoints, making it easy to establish early defensive positions with siege tanks or shield batteries."+
  "<br>This allows for standart 1 gate expand in Protoss case and safe marine cc opener for Terrans."+
  "<br><br>Destroying the rocks allows the player with map control to open 3rd attack path<br>in the middle part of the map, allowing up for potential run-by."+
  "<br><br>Due to not evenly distributed base positions (which is very rare) and long rush timing,"+
  "<br>Zerg build orders consist mainly of 2 base roach timing pushes or macro games focused on broodlords and infestors.";
}

function DataC() {
  outlineIcon(1);
  sessionStorage.setItem("jumpIndex",1);
  document.getElementById("mapName").innerHTML = "Data-C LE";
  document.getElementById("mapImg").src = "images/Data-C.jpeg";
  document.getElementById("mapImg").alt = "Data-C LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 36 seconds<br>Size: 152x124 (big map)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "The worst map for Zergs in the pool and also the best map for the Terrans.<br>So if you are Zerg player,"+
  "do yourself a favor and ban this map.<br><br>Long rush distance and only one good attack path makes it very easy to defend against timing pushes "+
  "and later allows strong counter-attacks after successful defense."+
  "<br>The watchtowers on the map cover the access way in the mid-game and with few well-positioned PFs secure a realiable economy."+
  "<br>For Protoss we advise to go into early Stargate Oracle harass or Immortal zealot based mid-game push, "+
  "as in late-game attacks it will be very hard to break the sieged up ramps."+
  "<br><br>If facing any Zerg, prepare shield batteries around 3rd and 4th base for queen walks."+
  "<br>Any other type of Zerg attack is very inferior on this map and should't be an issue.";
}

function InsideAndOut() {
  outlineIcon(2);
  sessionStorage.setItem("jumpIndex",2);
  document.getElementById("mapName").innerHTML = "Inside and Out LE";
  document.getElementById("mapImg").src = "images/Inside and Out.jpg";
  document.getElementById("mapImg").alt = "Inside and Out LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 32 seconds<br>Size: 124x132 (small map)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "The best cannon rush map in current map pool, also the best in the past 4 years."+
  "<br>We advise to either ban this map or learn how to properly worker pull."+
  "<br>After defending the cannons, very fast counter-attack is recommended with AA support."+
  "<br><br>On the other hand, it is very hard for Protoss players to secure expansion of their 3rd base,"+
  "so tank pushes and early zergling rushes are recommended after scouting normal build orders."+
  "<br>When going to mid-game, destroying the rocks opens the map for army positioning,"+
  "<br>but can be quite tricky as it also leaves your own bases vulnerable."+
  "<br><br>Late game doesn't favor anyone, but beware of carrier + archon death balls due to small map."+
  "<br>In these scenarios, react with a mobile run-by or doom drop.";
}

function Moondance() {
  outlineIcon(3);
  sessionStorage.setItem("jumpIndex",3);
  document.getElementById("mapName").innerHTML = "Moondance LE";
  document.getElementById("mapImg").src = "images/Moondance.jpeg";
  document.getElementById("mapImg").alt = "Moondance LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 31 seconds<br>Size: 128x140 (big map)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "Very large map with 9 bases each, featuring safe 3rd 'pocket base',"+
  "<br>but has incredibly short rush timing."+
  "<br><br>Zergs have advantage in timing attacks, while Terrans and Protoss thrive in long macro games."+
  "<br><br>Good map for gateway based strategies (herO style) and mobile ling-hydra trying to chip away the defending player."+
  "Note however, that from the other perspective, PF and battery positions needs to be prepared ahead of time."+
  "<br><br>Good scouting and army movement in mid-game is key to map control, which lets you cut away the outer bases easily."+
  "<br><br>4 base Terran turtle builds are very strong when based on tanks with support of liberators.";
}

function Stargazers() {
  outlineIcon(4);
  sessionStorage.setItem("jumpIndex",4);
  document.getElementById("mapName").innerHTML = "Stargazers LE";
  document.getElementById("mapImg").src = "images/Stargazers.jpeg";
  document.getElementById("mapImg").alt = "Stargazers LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 35 seconds<br>Size: 148x116 (non-standart)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "Horizontal starting locations offers the opportunity to play lot of different cheese "+
  "by opening up the path in the pocket natural.<br><br>Golden base in the south allows good ninja base in lower leagues, "+
  "while creating dynamic struggle over position in higher.<br><br>Sligtly Terran favorite, because of strong tank pushes"+
  " and also very bad map for any standart Protoss build order (without cheesing)."+
  "<br><br>Zerg mutalisk compositions are fairly often, due to pocket base having both gas geysers"+
  "<br>and due to lot of dead-space between bases.<br>"+
  "<br>For long games, try to take the gold base as soon as possible, as it will help you with defending later on. You can even skip your 6th base for it.";
}

function TropicalSacrifice() {
  outlineIcon(5);
  sessionStorage.setItem("jumpIndex",5);
  document.getElementById("mapName").innerHTML = "Tropical Sacrifice LE";
  document.getElementById("mapImg").src = "images/Tropical Sacrifice.jpg";
  document.getElementById("mapImg").alt = "Tropical Sacrifice LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 37 seconds<br>Size: 140x136 (big map)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "The three bridges in the middle creates chokepoints, "+
  "long way around the sides through bushes can be shortened by destroying rocks."+
  "<br><br>Best generalist Zerg map as first 4 bases are easy to expand to quickly."+
  "<br>Bad map for TvZ, but still very good in TvP with mid-game compositions."+
  "<br><br>Gateway style or Skytoss with archon help is recommended."+
  "<br><br>The bushes on the sides provide cover for siege tank positions mid to late."+
  "<br>Leap-frogging through center is very optional, because of spotting highground."+
  "<br><br>No good overlord positions, so try to scout with lings as Zerg."+
  "<br>Roach ravager timing or ling bane mutalisk mid game have highest winrate.";
}

function Waterfall() {
  outlineIcon(6);
  sessionStorage.setItem("jumpIndex",6);
  document.getElementById("mapName").innerHTML = "Waterfall LE";
  document.getElementById("mapImg").src = "images/Waterfall.jpeg";
  document.getElementById("mapImg").alt = "Waterfall LE";
  document.getElementById("mapIntro").innerHTML = "Rush distance: 32 seconds<br>Size: 108x132 (small map)<br>Added into map pool: 20. 7. 2022";
  document.getElementById("mapInfo").innerHTML = "Worst Protoss map in the entire map pool. Straight ban in all cases.<br>"+
  "<br>Big open area in the middle is a little of a bait, because the map is very small."+
  "<br>Holding any bases after intitial 4th is recommended only if both players economy is similar."+
  "<br><br>Run-by strategies based on lings or zealots are very efficient in multi-pronged attacks"+
  "<br><br>The area around the river, as well as top and bottom between the bases is UNBUILDABLE"+
  "<br>This affects even Raven autoturrets and Oracle wards, so be carefull in positioning"+
  "<br><br>Mid-game roach pushes or queen walks are generally the best for Zerg, in case of enemy mech composition, ling bane hydra switch"+
  "<br>Triple barracks or 1/1 with tank production are the best for Terrans here.";
}