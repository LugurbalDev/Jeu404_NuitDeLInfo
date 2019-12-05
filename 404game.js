var image=document.querySelector("#level1");
var x=0;
var taille=image.offsetHeight;


window.setInterval(deplacement,100);


function deplacement(){
	x-=1;

	image.style.left=x+"px";
	image.style.height = "100%";
}

	





