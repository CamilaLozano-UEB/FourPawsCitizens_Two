import { Manager } from "./javascript/pets.js";
import { assignTableNavigationValues } from "./javascript/TableNavigation.js";

d3.dsv(";", "Data/pets-citizens.csv").then(function(data) {


	resolveCharsetErrors(data);
	var num = Manager.createSubLists(data).length;
	console.log(num);
	assignTableNavigationValues(num);




	/*	for (var i = 0; i < num; i++) {
			createNavigation(i);
			var tabla = createTable(i);
			if (i === (num - 1) && (i * 50) != data.length) {
				var subList = data.slice(i * 50, data.length);
				tabla.appendChild(createThead());
				tabla.appendChild(createTable(subList, i * 50));
			} else {
				var subList = data.slice(i * 50, (i + 1) * 50);
				for (var j = 0; j < subList.length; j++) { console.log(subList["sex"]) }
				tabla.appendChild(createThead());
				tabla.appendChild(createBody(subList, i * 50));
			}
			document.body.appendChild(tabla);
		}*/
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






