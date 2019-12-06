(function() 
{
    var requestAnimationFrame = window.requestAnimationFrame  
                                window.mozRequestAnimationFrame  
                                window.webkitRequestAnimationFrame || 
                                window.msRequestAnimationFrame;
                                window.requestAnimationFrame = requestAnimationFrame;})();

var image=document.querySelector("#level1");
var x=0;
var taille=image.offsetHeight;
var headerJS= document.getElementById("header");
var headerJS1= document.getElementById("header1");
var pointeur= new Array("dino","dino1","dino2","dinos","dinos1");
var temp1 = 0;
var etat1 = 0;
var jump1 = false;
var velY1 = 0;

var catchedElements = document.getElementsByClassName("catchedElements")

var step = document.getElementsByClassName("step")

console.log(step)

//console.log(catchedElements)

var steps = ["dossier","carte","bourse"]

var stepsObjects = []


for(i = 0; i < steps.length; i++){
	var stepImage = {
	name: "",
	x: 0,
	y:0
}
	stepsObjects[i] = {name: steps[i], x: Math.random() * 1920, y: Math.random() * 40}

	console.log(stepsObjects[i])
}



var catchedElementsArray = [];

var gravity = 0.3;


image.style.height = "100%";

window.addEventListener("load",function(){
	alert("Vous êtes arrivé sur une page 404. Pour retrouver l'accès au site, il faut réunir l'ensemble des étapes nécessaires pour obtenir une bourse")
})


function update()
{



	function deplacement(){
		x-=10;
		image.style.left=x+"px";
		if (x <= -(1920) ) {
			x = 0;
		}
		
	}

	deplacement();


	

	
		if (temp1 > 5 && headerJS.className == "dino" && etat1 == 0)
		{
			headerJS.className = "dino1";
			temp1 = 0;	
		}
		if ( temp1 > 5 && headerJS.className == "dino1" && etat1 == 0)
		{
			headerJS.className = "dino2";
			temp1 = 0;
			etat1 = 1;
		}
		if ( temp1 > 5 && headerJS.className == "dino2" && etat1 == 1)
		{
			headerJS.className = "dino1";
			temp1 = 0;
		}
		if ( temp1 > 5 && headerJS.className == "dino1" && etat1 == 1)
		{
			headerJS.className = "dino";
			temp1 = 0;
			etat1 = 0;
		}
		else
		{temp1++}



	window.addEventListener("keydown",function(e){
		let toucheClavier = e.keyCode;
		//console.log(toucheClavier)
		if(toucheClavier == 32){
			if (jump1 == false)
			{
				jump1 = true;
			}
		}
	})

	if (jump1 == true)
	{
		if (velY1 >= 100)
		{
			jump1= false;
		}
		velY1+= 2;
		
	}
	if (jump1 == false && velY1 > 0)
	{
		velY1-= 3;
	}


	velY1+= gravity;
	headerJS.style.bottom = velY1+"px";
	 

	 requestAnimationFrame(update);

};

update();