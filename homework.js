//********************************
//Multiply Assignment
//******************************** 
//var Multiplier={
	
// 	test:"test",
// 	currentvalue: 1,
// 	getcurrentvalue: getCurrentValue,
// 	multiply: multiply
// }

// function multiply(nextnum){
// 	var currentvalue=this.getcurrentvalue();
// 	currentvalue=currentvalue * nextnum;
// 	this.currentvalue=currentvalue;
// 	alert(currentvalue);
// }
// function getCurrentValue(){
// 	var currentvalue=this.currentvalue
// 	return currentvalue
// }
// var mynumber=4;
// Multiplier.multiply(mynumber);

//***************************************
//Photo Album Assignment
//***************************************

// function PhotoAlbum(){
// 	this.size=12;
// 	this.photostring=[]
// 	this.photo=[];
// 	this.addphoto=addPhoto;
// 	this.massphoto=massPhoto;
// }
// function addPhoto(id, string){
// 	this.photo.push(id)
// 	this.photostring.push(string)
// 	this.size=this.photo.length
// }

// function Photo(location, filename, htmlphoto){
// 	this.location=location;
// 	this.filename=filename;
// 	this.htmlvar="";
// 	this.htmlphoto=htmlPhoto;
// 	this.placeholder="";
// 	// this.createelement=createelement;
// 	this.createelement=createElement;
// }

// function massPhoto(array){
// 	for (var i=0;i<array.length;i++){
// 		this.photo.push(array[i]);
// 	}
// }
// function displayAlbum(album){
// 	for(var i=0;i<album.photo.length;i++){
// 		addAllPhotos(album.photo[i])
// 	}
// }

// function addAllPhotos(photo){
// 	photo.createelement(photo.placeholder);
// 	photo.htmlphoto();
// }

// function createElement(element){
// element=document.createElement("div")
// element.className="photo"
// element.style.backgroundSize= "100% 100%";
// element.style.height= "400px";
// element.style.width= "400px";
// element.style.backgroundImage= "url(" + this.filename +")";

// this.htmlvar=element;
// }
// function myFunction(event){
// 	event.target.classList.add("enlarge")
// 	setTimeout(function(){secondFunction(event)},4000);
// }
// function secondFunction(event){
// 	event.target.classList.remove("enlarge")
// }

// function htmlPhoto(){
// document.getElementById("parent").appendChild(this.htmlvar)
// }

// var firstalbum= new PhotoAlbum("firstalbum")

// var family= new Photo("san francisco", "family.PNG")
// firstalbum.addphoto(family, family.location);

// var family2= new Photo("san francisco", "family2.PNG")
// firstalbum.addphoto(family2, family2.location);

// var family3= new Photo("san francisco", "family3.PNG")
// firstalbum.addphoto(family3, family3.location);

// var family4= new Photo("san francisco", "family4.PNG")
// firstalbum.addphoto(family4, family4.location);

// var family5= new Photo("san francisco", "family5.PNG")
// firstalbum.addphoto(family5, family5.location);

// var family6= new Photo("san francisco", "family6.PNG")
// firstalbum.addphoto(family6, family6.location);

// var massphotoadd=[family, family2, family3, family4, family5, family6]


// displayAlbum(firstalbum);
// var photos=document.getElementsByClassName("photo");
// for(var i=0;i<photos.length;i++){
// photos[i].addEventListener("click", myFunction)
// }


//*********************************
// person object manipulations
//*********************************

// function Person(name, age, gender){
// 	this.name=name;
// 	this.age=age;
// 	this.gender=gender;
// }
// function Student(name, age, gender,gpa, detention, homework, skipclass, giveapple, teacher,getteacher, playhookie){
// 	Person.apply(this,arguments)
// 	this.gpa=gpa;
// 	this.detention=detention;
// 	this.didhomework=homework;
// 	this.skipclass=skipclass;
// 	this.giveapple=giveapple;
// 	this.teacher=teacher;
// 	this.getteacher=getteacher;
// 	this.playhookie=playhookie;
// }
// function adoptStudent(student){
// 	this.student.push(student)
// }
// function Teacher(name, age, gender, students, apples, givedetention, adoptstudent){
// 	Person.apply(this, arguments)
// 	this.givedetention=givedetention;
// 	this.student=students;
// 	this.apples=apples;
	
// 	this.adoptstudent=adoptstudent;
// }
// var student1=new Student("james", 8, "male", 3.5, false, true, skipClass, giveApple, "Ms. Teacher", getTeacher, false);
// var teacher1=new Teacher("Ms. Teacher", 40, "female", [], 0, giveDetention, adoptStudent);
// function giveDetention(i){
// 	console.log(this.student[i])
// 	this.student[i].detention=true
// }
// function getTeacher(teacher){
// 	this.teacher=teacher
// }
// function skipClass(){
// 	this.playhookie=true
// }
// function giveApple(teacher){
// 	teacher.apples+=1
// }
// var School={
// 	students:[student1],
// 	teachers:[teacher1],
// 	open: true
// }


//4-20 morning practice*******

// function evenNumbers(array){
// 	var newarray=[]
// 	for(var i=0;i<array.length;i++){
// 		if(array[i]%2===0){
// 			newarray.push(array[i])
// 		}
// 	}
// 		console.log(newarray)
// }
// function evenNumbers(array){
// 	var newarray=[]
// 	for(var i=0;i<array.length;i++){
// 		if(isEven(array[i])){
// 			newarray.push(array[i])
// 		}
// 	}
// 		console.log(newarray)
// }

// function isEven(number){
// 	if(number%2===0){
// 		return true
// 	}
// }






//*******************************************************************
//Calculator uses keyboard numbers/operators to function-'Enter' is equivalent to '='
//Backspace also works, after calculation press an operator to use answer as number in next
//calculation. Chain together calculations or calculate individually.
//*******************************************************************

// var Calculator={
// 	number1:0,
// 	number2:0,
// 	operator:"+",
// 	screen:"",
// 	secondscreen:"",
// 	calculate:calculate,
// 	continue: true
// }



// function calculate(operator){
// 	Calculator.continue=true
// 	if(this.operator==="+"){
// 		console.log(this.number1)
// 	this.number1=(this.number1*1) + (this.screen.innerHTML*1);
// 	console.log(this.number1*1)
// 	}else if(this.operator==="-"){
// 		console.log(this.number1)
// 	this.number1=(this.number1*1) - (this.screen.innerHTML*1);
// 	console.log(this.number1)
// 	}else if(this.operator==="*"){
// 		this.number1=(this.number1*1) * (this.screen.innerHTML*1);
// 	}else if(this.operator==="/"){
// 		this.number1=(this.number1*1) / (this.screen.innerHTML*1);


// 	}else{
		
// 	}
// }
// var secondscreen=document.createElement("div")
// var screen=document.createElement("div")
// screen.className="screen"
// secondscreen.className="secondscreen"
// Calculator.screen=screen
// Calculator.secondscreen=secondscreen
// document.getElementById("parent").appendChild(Calculator.secondscreen)
// document.getElementById("calc").appendChild(Calculator.screen)
// document.addEventListener("keypress", UpdateScreen);
// document.addEventListener("keydown", Clear);

// function Clear(event){
// 	if(event.keyCode===27){
// 		Calculator.number1=0
// 		Calculator.operator="+"
// 		Calculator.screen.innerHTML=""
// 		Calculator.secondscreen.innerHTML=""
// 		Calculator.continue=true
// 	}
// 	if(event.keyCode===8){
// 		Calculator.screen.innerHTML=Calculator.screen.innerHTML.slice(0,-1)
// 	}
	
// }
// function UpdateScreen(event){
// 	if (isNaN(event.key)){
// 		console.log(event.keyCode)
// 		if(event.keyCode===43){
// 			// Calculator.number1=Calculator.screen.innerHTML
// 			Calculator.calculate("+");
			
// 			Calculator.secondscreen.innerHTML=Calculator.number1 + "+";
// 			Calculator.operator="+"
// 			Calculator.screen.innerHTML="";
// 		}
// 		if(event.keyCode===45){
// 			// Calculator.number1=Calculator.screen.innerHTML
// 			console.log(Calculator.screen.innerHTML)
// 			Calculator.calculate("-");
// 			Calculator.secondscreen.innerHTML=Calculator.number1 + "-";
// 			Calculator.operator="-"
// 			Calculator.screen.innerHTML="";
// 		}
// 		if(event.keyCode===42){
// 			// Calculator.number1=Calculator.screen.innerHTML
// 			Calculator.calculate("*");
// 			Calculator.secondscreen.innerHTML=Calculator.number1 + "*";
// 			Calculator.operator="*"
// 			Calculator.screen.innerHTML="";
// 		}
// 		if(event.keyCode===47){
// 			// Calculator.number1=Calculator.screen.innerHTML
// 			Calculator.calculate("/");
// 			Calculator.secondscreen.innerHTML=Calculator.number1 + "/";
// 			Calculator.operator="/"
// 			Calculator.screen.innerHTML="";
// 		}
// 		if(event.keyCode===13){
// 			Calculator.calculate("")
// 			Calculator.secondscreen.innerHTML=""
// 			Calculator.screen.innerHTML=Calculator.number1;
// 			Calculator.operator="+"
// 			Calculator.number1=0
// 			Calculator.continue=false
			
// 		}
// 		if(Calculator.continue===true){
// 			if(event.keyCode===46){
// 				Calculator.screen.innerHTML+=event.key	
// 			}
// 		}else{
// 			if(event.keyCode===46){
// 			ClearAll()
// 			Calculator.screen.innerHTML+=event.key
// 			}
// 		}
// 		// + 43
// 		// - 45
// 		// * 42
// 		// / 47
// 		// = 61
// 	}else{	
// 		if(Calculator.continue===true){
// 			Calculator.screen.innerHTML+=event.key
// 		}else{
// 			ClearAll()
// 			Calculator.screen.innerHTML+=event.key
// 		}
// 	}
// }
// function ClearAll(){
// 	Calculator.number1=0
// 	Calculator.operator="+"
// 	Calculator.screen.innerHTML=""
// 	Calculator.secondscreen.innerHTML=""
// 	Calculator.continue=true
// }







//***************************
// 4-21 morning practice
//***************************
// function FirstFunction(x, y){
// 	var mystring=""
// 	for(var i=0;i<x.length;i++){
// 		if(i<x.length-1){
// 		mystring+=x[i] + " ";
// 		}else{
// 			mystring+=x[i]
// 		}
// 	}
// 	y(mystring);
// }
// function SecondFunction(string){
// 	console.log(string);
// }

// var arrayofstrings=["Hello", "my", "name", "is", "Troy."]
// FirstFunction(arrayofstrings, SecondFunction)