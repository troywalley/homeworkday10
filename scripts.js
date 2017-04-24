// var bike={

// wheels: 2,
// frame: "cruiser",
// brand: "cannondale",
// handlebars: "flat",
// chain: true,
// gears: 1,
// size: 56,
// sizeUnit: "cm"
// }
// var guitar={
// 	strings: 6,
// 	acoustic: true,
// 	electric: false,
// 	body: "traveler",
// 	stringType: "steel"
// }
// var car={
// 	engine: "V6",
// 	style: "pickup",
// 	transmission: "automatic"

// }
var character={
	name: "Kenny",
	age: 36,
	gender: "male",
	walletbalance:1000,
	purchase: Purchase,
	location: "home",
	maxhp: 35,
	currenthp: 35,
	objects:[],
	wallet: 100
}

// function ConcatString(){
// 	var sentence=character.name + " drove his " + car.style + " to the zoo."
// 	console.log(sentence);
// }
// ConcatString();
// var StoryLine=["What is your character's name?", "What is their weapon?"]
// var weapons=["axe", "sword", "club"]

// var names=[""]
// var spacer=[""];
var list=["Level0", "Level1"]
var prompt=document.getElementById("prompt");
document.addEventListener("keydown", GetInfo);
function GetInfo(event){
	if(event.keyCode===13){
		var answer=document.getElementById("answer");
		findLevel(answer.value);
		answer.value=""
		
	}
}
function findLevel(answer){
	var level=levelmaster.level;
	var currentlevel=levels[level];
	prompt.innerHTML=currentlevel.script
	var playeranswer=answer
	for(var i=0;i<currentlevel.acceptable.length;i++)
	if(playeranswer===currentlevel.acceptable[i]){
		
		var playerlevelactions=levelactions[level-1]
		console.log(playerlevelactions)
		playerlevelactions[i](i);
		levelmaster.level++;
		

		
	}

}
var levelmaster={
	level:1
}
var axe={
	name:"beginner's axe",
	dexterity:15,
	damage:5
}
var sword={
	dexterity:5,
	damage:15
}
var club={
	dexterity:10,
	damage:10
}

var wizard={
	name: "wizard",
	strength: 5,
	mana:20
}
var warrior={
	name:"warrior",
	strength: 10,
	mana:10
}
var level1={
	script:"Are you a warrior or a wizard?",
	acceptable:["axe","sword","club"],
	resultantaction: [axe,sword,club]
}
var level1actions={
	0:lvl1action1,
	1:lvl1action1,
	2:lvl1action1
}
var level2actions={
	0:lvl2action1,
	1:lvl2action1,
	
}
var level3actions={
	0:lvl3action1

}
var level4actions={
	0:lvl4action1
}
var level5actions={
	0:lvl5action1
}
var level6actions={
	0:lvl6action1
}
var level7actions={
	0:lvl7action1
}

var level2={
	script:"blah",
	acceptable:["warrior", "wizard"],
	resultantaction:[warrior, wizard]
}
var level3={
	script:"blahh",
	acceptable:["blah"]
}
var level4={
	script:"blahhh",
	acceptable:["blah"]
}
var level5={
	script:"blahhhh",
	acceptable:["blah"]
}
var level6={
	script:"blahhhhh",
	acceptable:["blah"]
}
var level7={
	script:"blahhhhhh",
	acceptable:["blah"]
}
var levels={
	1:level1,
	2:level2,
	3:level3,
	4:level4,
	5:level5,
	6:level6,
	7:level7
}
var levelactions={
	0:level1actions,
	1:level2actions,
	2:level3actions,
	3:level3actions,
	4:level4actions,
	5:level5actions,
	6:level6actions,
	7:level7actions
}

function nextFunction(){
	var i=prompts.i;
	prompts.i=i+1;
	return StoryLine[i];
}
function nextAnswer(){
	var i=prompts.i;
	var answers=[spacer,names,weapons]
	return answers[i];
}
prompts={
	i: 0
}
function lvl1action1(action){
	character.weapon=level1.resultantaction[action];
}
function lvl2action1(action){
	character.class=level2.resultantaction[action];
}
function lvl3action1(action){
	character.class=level2.resultantaction[action];
}
function lvl4action1(action){
	character.class=level2.resultantaction[action];
}
function lvl5action1(action){
	character.class=level2.resultantaction[action];
}
function lvl6action1(action){
	character.class=level2.resultantaction[action];
}
function lvl7action1(action){
	character.class=level2.resultantaction[action];
}


function Purchase(price){
	this.walletbalance-=price;
}
character.purchase(200);
console.log(character.walletbalance)