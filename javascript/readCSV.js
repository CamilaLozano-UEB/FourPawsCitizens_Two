
// Lectura y carga del csv

import { Manager } from "./Manager.js";
import { assignTableNavigationValues } from "./TableNavigation.js";

d3.dsv(";", "Data/pets-citizens.csv").then(function(data) {
	resolveCharsetErrors(data);
	const manager = new Manager(data);
	assignTableNavigationValues(manager.createSubLists(data));
	coordinateActions(manager);
});

function resolveCharsetErrors(data) {
	for (var i = 0; i < data.length; i++) {
		if (data[i]["size"].substring(0, 5) == "PEQUE") {
			data[i]["size"] = "PEQUEÑO";
		}
		if (data[i]["neighborhood"].substring(0, 16) == "MUNICIPIOS ALEDA") {
			data[i]["neighborhood"] = "MUNICIPIOS ALEDAÑOS BOGOTA D.C.";
		}
	}
}
function coordinateActions(manager) {
	document.getElementById("filter").addEventListener("click", function() {
		assignTableNavigationValues(manager.fiterFromMultipleFields());
	});
	document.getElementById("Cpets").addEventListener("click", function() {
		assignTableNavigationValues(manager.getformCreate());
		document.getElementById("formC").reset();
		if (document.getElementById("imagecreation").getElementsByClassName("image")[0] !== undefined) {
			document.getElementById("imagecreation").removeChild(document.getElementById("imagecreation").getElementsByClassName("image")[0]);
		}
	});
	document.getElementById("Upets").addEventListener("click", function() {
		assignTableNavigationValues(manager.getformUp());
		document.getElementById("formU").reset();
		if (document.getElementById("imageupgrade").getElementsByClassName("image")[0] !== undefined) {
			document.getElementById("imageupgrade").removeChild(document.getElementById("imageupgrade").getElementsByClassName("image")[0]);
		}
	});
	document.getElementById("raceUp").addEventListener("mouseover", function() {
		upDependence(manager.getdependenceUp());
	});
}
function upDependence(data) {
	
	var dogSoBig = new Array("Seleccione", "San Bernardo", "Pastor Aleman", "Gran Danés");
	var dogBig = new Array("Seleccione", "Labrador Retriever", "Husky Siberiano", "Dalmata");
	var dogMiddle = new Array("Seleccione", "Chow Chow", "Golden Retriever", "Pitbull");
	var dogSmall = new Array("Seleccione", "Pug", "Shih tzu", "Salchicha");
	var dogToy = new Array("Seleccione", "Chihuahua", "Pomerania", "Yorkshire Terrier");

	var catBig = new Array("Seleccione", "Ragdoll", "Maine Coon", "Gato de Bengala");
	var catMiddle = new Array("Seleccione", "Esfinge", "Persa", "Scotish");
	var catSmall = new Array("Seleccione", "Korat", "Skookum", "Curl americano");
	var catToy = new Array("Seleccione", "Singapura", "Munchkin", "Devon rex");

	var dogRace = [
		[],
		dogSoBig,
		dogBig,
		dogMiddle,
		dogSmall,
		dogToy,
	]; var catRace = [
		[],
		catBig,
		catMiddle,
		catSmall,
		catToy,
	];
	var chooseRace;
	var numberRace;
	var i;
	if (data["species"] === "CANINO") {
		if (data["size"] === "MUY GRANDE") {

			chooseRace = dogRace[1]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "GRANDE") {

			chooseRace = dogRace[2]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "MEDIANO") {

			chooseRace = dogRace[3]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "PEQUEÑO") {

			chooseRace = dogRace[4]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "MINIATURA") {

			chooseRace = dogRace[5]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		}
	} else if (data["species"] === "FELINO") {
		if (data["size"] === "GRANDE") {

			chooseRace = catRace[1]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "MEDIANO") {

			chooseRace = catRace[2]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "PEQUEÑO") {

			chooseRace = catRace[3]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		} else if (data["size"] === "MINIATURA") {

			chooseRace = catRace[4]
			numberRace = chooseRace.length
			document.formU.race.length = numberRace
			document.formU.race.options[0].text = chooseRace[0]
			for (i = 1; i < numberRace; i++) {
				document.formU.race.options[i].value = i
				document.formU.race.options[i].text = chooseRace[i]
			}

			document.formU.race.options[0].selected = true
		}
	}else{
		document.formU.race.length = 2
		document.formU.race.options[0].text = "Seleccione"
		document.formU.race.options[1].text = "Sin identificar"
		document.formU.race.options[1].value = 1
		document.formU.race.options[0].selected = true
	}
}


/*Promesa fetch api jalar recursos dek server, then funcion que se ejecuta si la función está correcta*/
