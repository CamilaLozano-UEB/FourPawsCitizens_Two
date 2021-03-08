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