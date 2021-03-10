
// Lectura y carga del csv

import { Manager } from "./pets.js";
import { assignTableNavigationValues } from "./TableNavigation.js";

d3.dsv(";", "Data/pets-citizens.csv").then(function(data) {
	resolveCharsetErrors(data);
	assignTableNavigationValues(Manager.createSubLists(data));
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
/*Promesa fetch api jalar recursos dek server, then funcion que se ejecuta si la función está correcta*/

	let results;
/*	for (i = 0; i <= data.length / 50; i++) {
		if (i == 0) {
			var part = data.slice(0, data.length / i);
			results[i] = part;
			var next = data.length / i;
		} else if (i > 0 && i < (data.length / 50) - 1) {
			var part = data.slice(next, next + 50);
			results[i] = part;
			var next = next + 50;
		} else if (i == (data.length / 50) - 1) {
			var part = data.slice(next, data.length);
			results[i] = part;
		}
	}*/