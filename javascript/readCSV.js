d3.dsv(";", "Data/pets-citizens.csv").then(function(data) {

	resolveCharsetErrors(data);

	console.log(data);
	let results;
	for (i = 0; i <= data.length / 50; i++) {
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

	}
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
function createNavigation(indice) {
	var liElement = document.createElement("li");
	liElement.className = "page-item";

	var aChild = document.createElement("a");
	aChild.className = "page-link";
	aChild.href = "#tabla" + indice + 1;
	aChild.text = indice + 1;

	liElement.appendChild(aChild);
	document.getElementById("pageItems").appendChild(liElement);
}
function createTable(indice) {
	var table = document.createElement("table");
	table.className = "table table-striped";
	table.id = "tabla" + indice;
	return table;
}

function createThead() {
	var names = ["microchip", "specie", "sex", "size", "race", "potentDangerous", "neighborhood", "owner", "address", "picture"];
	var tHead = document.createElement("thead");
	var tr = document.createElement("tr");
	for (var i = 0; i < names.length; i++) {
		var th = document.createElement("th");
		th.scope = "col";
		th.textContent = names[i];
		tr.appendChild(th);
	}
	tHead.appendChild(tr);
	return tHead;
}

function createTable(petsSubList, indice) {
	/*microchip, specie, sex, size, race, potentDangerous, neighborhood, owner, address, picture*/
	var tBody = document.createElement("tbody");
	for (var i = 0; i < petsSubList.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		th.scope = "row";
		th.textContent = indice + i;
		tr.appendChild(th);
		for (const property in petsSubList[i]) {
			var td = document.createElement("td");
			td.textContent = petsSubList[property];
			tr.appendChild(td);
		}
		tBody.appendChild(tr);
	}
	return tBody;
}





