
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
}


/*Promesa fetch api jalar recursos dek server, then funcion que se ejecuta si la función está correcta*/
