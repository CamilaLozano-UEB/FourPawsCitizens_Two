
import { Manager } from "./Manager.js";
import { assignTableNavigationValues } from "./TableNavigation.js";
import { upDependence, assignListenerForms } from "./form.js";
import { cretateCreateMap, cretateUpdateMap } from "./Maps.js"

/**
Method that saves the csv data to data, and then sends to the resolveCharsetErrors method, Manager is instantiated, 
the values are assigned to the pets table and the listeners are assigned.
 */

d3.dsv(";", "Data/pets-citizens.csv").then(function(data) {
	resolveCharsetErrors(data);
	const manager = new Manager(data);
	assignTableNavigationValues(manager.createSubLists(data));
	coordinateActions(manager);
	cretateCreateMap("mapC", "longitudeC", "latidudeC");
	cretateUpdateMap("mapU", "longitudeU", "latidudeU");
});


/**
@param data, fix for encoding errors
Function that corrects the coding errors of the letter Ñ
 */

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

/**
@param manager, manager object instance
Function that assigns listeners to update, filter and create buttons. This method uses the manager information
 */
function coordinateActions(manager) {
	assignListenerForms();
	document.getElementById("filter").addEventListener("click", function() {
		assignTableNavigationValues(manager.fiterFromMultipleFields());
	});
	document.getElementById("Cpets").addEventListener("click", function() {
		assignTableNavigationValues(manager.getformCreate());
		document.getElementById("formC").reset();
		document.formC.race.length = 1;
		document.formC.race.options[0].text = "Elija primero el tamaño";
		document.formC.size.length = 1;
		document.formC.size.options[0].text = "Elija primero la especie";
		document.formC.race.options[0].selected = true;
		document.formC.size.options[0].selected = true;
		if (document.getElementById("imagecreation").getElementsByClassName("image")[0] !== undefined) {
			document.getElementById("imagecreation").removeChild(document.getElementById("imagecreation").getElementsByClassName("image")[0]);
		}
	});
	document.getElementById("raceUp").addEventListener("mouseover", function() {
		upDependence(manager.getdependenceUp());
	});
	document.getElementById("Upets").addEventListener("click", function() {
		assignTableNavigationValues(manager.getformUp());
		document.getElementById("formU").reset();
		document.formU.race.length = 1;
		document.formU.race.options[0].text = "Seleccione";
		document.formU.race.options[0].selected = true;
		if (document.getElementById("imageupgrade").getElementsByClassName("image")[0] !== undefined) {
			document.getElementById("imageupgrade").removeChild(document.getElementById("imageupgrade").getElementsByClassName("image")[0]);
		}
	});
}