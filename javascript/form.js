getformCreate = function() {
	var microchip= document.getElementById("microchip").value;
	var species= document.getElementById("species").value;
	var sex= document.getElementById("sex").value;
	var size= document.getElementById("size").value;
	var danger= document.getElementById("danger").value;
	var neighborhood= document.getElementById("neighborhood").value;
	var race= document.getElementById("race").value;
	var owner= document.getElementById("owner").value;
	var address= document.getElementById("address").value;
	
	var csv1=microchip+";"+species+";"+sex+";"+size+";"+danger+";"+neighborhood+";"+race+";"+owner+";"+address;
}

getformUp = function() {
//	var image= document.getElementById("image").value;
	var race= document.getElementById("race").value;
	var owner= document.getElementById("owner").value;
	var address= document.getElementById("address").value;
	
	var csv2=race+";"+owner+";"+address+";";//image;
}