// Método que crea las tablas que dependen de la Sublista de mascotas creada en Class Manager y el índice de las mascotas. El botón para actualizar está incluido en la tabla.

/**
@param petsSubList, array of 50 pets, sent from navigation
@param indice, position in the table. Corresponds to the numbers in the rows

Take the sublist of objects, create rows of each object and put in each column of that same row the attributes of that object
 */
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

/**
The attributes of each object are obtained and converted into columns that are added to the row
 */ 

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

/**
@param button, element to which the event listener is going to be added

Add a listener to each button, which when clicked, passes the value of the microchip field of the table to the update form
 */

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