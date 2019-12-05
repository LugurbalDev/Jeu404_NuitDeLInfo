var image=document.querySelector("#level1");
var x=0;
var taille=image.offsetHeight;


console.log(taille)
window.setInterval(deplacement,100);


function deplacement(){
	x-=1

	image.style.left=x+"px";
	console.log(x)


	image.style.height = "100%";
}

	





