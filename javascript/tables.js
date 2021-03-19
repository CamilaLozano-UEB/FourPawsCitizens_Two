//Method that create the tables that depends of the pets Sublist created in Class Manager and the indice of the pets, the button for update its included in the table
function createBody(petsSubList, indice) {
	if (document.getElementById("tBody") !== null) {
		document.getElementById("tablePets").removeChild(document.getElementById("tBody"));
	}
	var tBody = document.createElement("tbody");
	tBody.id = "tBody";
	for (var i = 0; i < petsSubList.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var button = document.createElement("a");
		button.type = "button";
		button.style = "text-decoration: none;padding: 10px;font-weight: 600;font-size: 20px;color: #ffffff;background-color: #1883ba;border-radius: 6px;border: 2px solid #0016b0;";
		button.textContent = "Actualizar";
		button.href = "#update";
		button.setAttribute("data-toggle", "tab");
		button.className = (indice * 50) + i;
		addButtonEventListener(button);
		tr.appendChild(button);
		th.scope = "row";
		th.textContent = (indice * 50) + i;
		tr.appendChild(th);

		for (const property in petsSubList[i]) {
			var td = document.createElement("td");
			td.textContent = petsSubList[i][property];
			if (property === "microchip") {
				td.className = (indice * 50) + i;
			} else if (property === "image") {
				var image = document.createElement("img");
				image.src = td.textContent;
				image.width = document.body.clientWidth / 6;
				td.textContent = "";
				td.appendChild(image);
			}
			tr.appendChild(td);
		}
		tBody.appendChild(tr);
	}
	document.getElementById("tablePets").appendChild(tBody);
}
// add the listener for the button of update and included the microchip in the forms of Update
function addButtonEventListener(button) {
	button.addEventListener("click", function() {
		if (button.className.split(" ").length > 1) {
			button.className = button.className.split(" ")[0];
		}
		var classElements = document.getElementsByClassName(button.className);
		button.className = classElements[0].className;
		document.getElementById("microchipField").value = classElements[1].textContent;
		document.getElementById("update-tab").className = "nav-link active";
		document.getElementById("find-tab").className = "nav-link";
	})
}

export { createBody };