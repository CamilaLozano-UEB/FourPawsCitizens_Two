d3.dsv(";", "Data/pets-citizens.csv").then(function(data) {
	resolveCharsetErrors(data);

	var num = parseInt(data.length / 50) + 1;
	console.log(num);
	for (var i = 0; i < num; i++) {
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

	var aChild = document.createElement("a");
	aChild.className = "page-link";
	aChild.href = "#tabla" + (indice + 1);
	aChild.text = indice + 1;

	liElement.appendChild(aChild);
	document.getElementById("pageItems").appendChild(liElement);
}

function createTable(indice) {
	var table = document.createElement("table");
	table.className = "table table-striped";
	table.id = "tabla" + (indice + 1);
	return table;
}

function createThead() {
	var names = ["#", "microchip", "specie", "sex", "size", "race", "potentDangerous", "neighborhood", "owner", "address", "picture"];
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

function createBody(petsSubList, indice) {
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
			td.textContent = petsSubList[i][property];
			tr.appendChild(td);
		}
		tBody.appendChild(tr);
	}
	return tBody;
}





