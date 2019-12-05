var image=document.querySelector("#level1");
var x=0;
var taille=image.offsetHeight;


window.setInterval(deplacement,100);


function deplacement(){
	x-=50;
	image.style.left=x+"px";
	image.style.height = "100%";
}




setInterval(function(){
	if (sens=="croissant")
	{
		z=setInterval(function(){
				i=carroussel(i)
					if(i==2){
						clearInterval(z)
						sens="decroissant";
									}
		},3000);
	}



	if (sens=="decroissant"){
		x=setInterval(function(){
			i=carroussel_inverse(i)
				if(i==0)
				{
				clearInterval(x)
				sens="croissant";
				}
		},3000);
		
}},9100);





function carroussel(num_table){

header.className=pointeur[num_table];
num_table=num_table+1;
return num_table;
}

function carroussel_inverse(num_table){

header.className=pointeur[num_table];
num_table=num_table-1;
return num_table;
}






