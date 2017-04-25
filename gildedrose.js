// Hi and welcome to the Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:
// * All items have a SellIn value which denotes the number of days we have to sell the item
// * All items have a Quality value which denotes how valuable the item is
// * At the end of each day our system lowers both values for every item
// Pretty simple, right? Well this is where it gets interesting:
// * Once the sell by date has passed, Quality degrades twice as fast
// * The Quality of an item is never negative
// * “Aged Brie” actually increases in Quality the older it gets
// * The Quality of an item is never more than 50
// * “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
// * “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
// We have recently signed a supplier of conjured items. This requires an update to our system:
// * “Conjured” items degrade in Quality twice as fast as normal items
var Shelf={
	items:[]
}

function StoreItem(name,sellin, quality, conjured){
	this.SellIn=sellin;
	this.Quality=quality;
	this.Name=name;
	this.updatevalues=updateValues;
	this.conjured=conjured;
	Shelf.items.push(this)
}

function updateValues(){
	if(this.Quality>50){
		this.Quality=50;
	}
	if(this.Name==="Aged Brie"){
		if(this.Quality===50){
			this.Quality+=1
		}else{
		this.Quality+=2;
		}
	}else if(this.Name==="Sulfuras"){
		this.Quality+=1;
		this.SellIn+=1;
	}else if(this.Name==="Backstage Passes"){
		if(this.SellIn<=5){
			this.Quality+=4;
		}else if(this.SellIn<=10){
			this.Quality+=3;
		}
		if(this.SellIn<1){
			this.Quality=0;
		}
	}else if(this.conjured===true){
		this.Quality-=1;
	}
	this.SellIn-=1;
	this.Quality-=1;
	if(this.Quality<0 && this.name!="Aged Brie"){
		this.Quality=0;
	}
}

function UpdateAllItems(number){
	for(var i=0; i<number;i++){
		for(var i=0;i<Shelf.items.length;i++){
			Shelf.items[i].updatevalues();
			console.log("Item: " + Shelf.items[i].Name)
			console.log("Quality " + Shelf.items[i].Quality)
			console.log("SellIn: " + Shelf.items[i].SellIn)
			console.log("")
		}
	}
}
function ViewAllItems(){
	for(var i=0;i<Shelf.items.length;i++){
			
			console.log("Item: " + Shelf.items[i].Name)
			console.log("Quality " + Shelf.items[i].Quality)
			console.log("SellIn: " + Shelf.items[i].SellIn)
			console.log("")
		}
}

var item1=new StoreItem("ball", 30, 30, false)
var item2=new StoreItem("glove", 30, 40, false)
var item3=new StoreItem("Aged Brie", 20, 15, false)
var item4=new StoreItem("Backstage Passes", 10, 15, false)
var item5=new StoreItem("chicken", 5, 21, true)
var item6=new StoreItem("Sulfuras",50, 50, false)

//******************************
//Jukebox
//******************************
var Jukebox=new Jukebox([],[],ChangeVolume,Next,Previous,Stop,"",0,"",Play,Pause,Resume,[])

function Jukebox(tracks,playlist,volume,next,previous,stop,status,current,Audio,play,pause,resume,files){
	this.tracks=tracks;
	this.playlist=playlist;
	this.volume=volume;
	this.next=next;
	this.previous=previous;
	this.stop=stop;
	this.status=status;
	this.current=current;
	this.Audio=Audio;
	this.play=play;
	this.pause=pause;
	this.resume=resume;
	this.files=files;
}
var pause=document.getElementById("pause")
var previous=document.getElementsByClassName("previous")[0]
var play=document.getElementsByClassName("play")[0]
var next=document.getElementsByClassName("next")[0]
var title=document.getElementsByClassName("songname")[0]
var aud=document.getElementsByClassName("audio")[0];
var tracks=document.getElementsByClassName("songlist")[0]
var playlist=document.getElementsByClassName("playlist")[0]
Jukebox.playlist.push("Jukebox Hero-Foreigner.mp3")
Jukebox.Audio=aud
Jukebox.Audio.controls=false;

function ChangeVolume(number){
	if(number<=100 && number>=0)
	aud.volume=number/100
}

function Next(){
	if(Jukebox.current>Jukebox.playlist.length-1){
		Jukebox.current=0
	}
	this.play(this.current)
	Jukebox.Audio.onended= function(){
		Jukebox.play(Jukebox.current);
	};
}

function Previous(){
	Jukebox.current-=2
	if(Jukebox.current<0){
		Jukebox.current=Jukebox.playlist.length-1
	}
	this.play(this.current)
Jukebox.Audio.onended= function(){
		Jukebox.play(Jukebox.current);
	};
}

function Stop(){
	this.Audio.pause();
	this.current=0;
	this.Audio.currentTime=0;
}
function Resume(){
	this.Audio.play()
	Jukebox.Audio.onended= function(){
		Jukebox.play(Jukebox.current);
	};
}
function Pause(){
	this.Audio.pause()
}
function Play(number){
	Jukebox.Audio.src=Jukebox.playlist[number];
	Jukebox.Audio.play()
	Jukebox.current=number+1;
	Jukebox.Audio.onended= function(){
		Jukebox.play(Jukebox.current);
	};
	title.innerHTML=Jukebox.playlist[number]
}
	
	var filelist=document.getElementById("myfiles")
	myfiles.onchange=function(){addFiles()};

function addFiles(){
	var filelist=document.getElementById("myfiles")
	var files=filelist.files
	Jukebox.files=files
	for(var i=0; i<files.length;i++){
		
		// Jukebox.playlist.push(files[i].name)
		var elem=document.createElement("div")
		tracks.appendChild(elem)
		var song=new SongCreator(files[i])
		elem.innerHTML=song.file.name
		elem.className="allmysongs"
		elem.addEventListener("click", addToPlaylist)
		Jukebox.tracks.push(song)
	}
}
function SongCreator(file){
	this.file=file;
}
function addToPlaylist(){
	for(var i=0;i<Jukebox.tracks.length;i++){
		if(event.target.innerHTML===Jukebox.tracks[i].file.name){
			Jukebox.playlist.push(Jukebox.tracks[i].file.name)
			var playlistelement=document.createElement("div")
			playlistelement.className="allmysongs"
			playlist.appendChild(playlistelement)
			playlistelement.innerHTML=event.target.innerHTML
			playlistelement.addEventListener("click", removeFromPlaylist)
		}
	}
}
function removeFromPlaylist(){
	for(var i=0;i<Jukebox.tracks.length;i++){
		if(event.target.innerHTML===Jukebox.playlist[i]){
			console.log(Jukebox.playlist[i])
			Jukebox.playlist.splice(i,1)
			playlist.removeChild(event.target)
		}
	}
}
function makePause(){
pause.innerHTML="Resume"
pause.addEventListener("click", makeResume)
pause.removeEventListener("click", makePause)
pause.onclick=Jukebox.pause()
}
function makeResume(){
	pause.innerHTML="Pause"
	pause.addEventListener("click", makePause)
	pause.removeEventListener("click", makeResume)
	pause.onclick=Jukebox.resume()
}
makeResume();
// function RickRoll(){
// 	for(var i =0; i<100; i++){
// 		if(i%3===0 && i%5===0){
// 			console.log("RickRoll");
// 		}else if(i%3===0){
// 			console.log("Rick");
// 		}else if(i%5===0){
// 			console.log("Roll");
// 		}else{
// 			console.log(i);
// 		}
// 	}
// }

// RickRoll() 
// previous.addEventListener("click", function(){
// 	Jukebox.previous();
// })
// play.addEventListener("click", function(){
// 	Jukebox.play(Jukebox.current);
// })
// next.addEventListener("click", function(){
// 	Jukebox.next();
// })

// Jukebox.Audio.addEventListener('loadedmetadata',function(){
//                     console.log(Jukebox.Audio.duration)
                    
//                 });// aud.play=true
// console.log(vid.volume)
// var moveme=document.getElementById("slider-container")
// var slider=document.getElementById("slider")
// moveme.addEventListener("mousedown", GetMousePosition);

// function GetMousePosition(){
// 	console.log(event)

// 	slider.style.height=event.clientY-340 + "px"
// 	moveme.addEventListener("mousemove", DragMouse)
// }
// function DragMouse(){
// 	slider.style.height=event.clientY-340 + "px"
// 	moveme.addEventListener("mouseup", ReleaseMouse)	
// }
// function ReleaseMouse(){
// 	moveme.removeEventListener("mousemove", DragMouse)
// }
