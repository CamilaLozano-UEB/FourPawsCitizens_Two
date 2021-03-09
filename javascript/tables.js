function createBody(petsSubList, indice) {
	if (document.getElementById("tBody") !== null) {
		document.getElementById("tablePets").removeChild(document.getElementById("tBody"));
	}
	var tBody = document.createElement("tbody");
	tBody.id = "tBody";
	for (var i = 0; i < petsSubList.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		th.scope = "row";
		th.textContent = (indice * 50) + i;
		tr.appendChild(th);
		for (const property in petsSubList[i]) {
			var td = document.createElement("td");
			td.textContent = petsSubList[i][property];
			tr.appendChild(td);
		}
		tBody.appendChild(tr);
	}
	document.getElementById("tablePets").appendChild(tBody);
}

export { createBody };