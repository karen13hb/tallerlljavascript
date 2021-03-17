function cambiocolor(){
	let color1 = document.getElementsByTagName("h4");
	
	
	for(var i=0;i<color1.length; i++)
		{
			
			color1[i].style.backgroundColor = "#000000";
		}
	
	let color2 = document.getElementById("color");
	color2.style.color="red";
}