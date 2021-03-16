class Manager {
	constructor(data) {
		this.pets = data;
	}

	getformCreate(data) {
		var microchip = document.getElementById("microchip").value;
		var species = document.getElementById("species").value;
		var sex = document.getElementById("sex").value;
		var size = document.getElementById("size").value;
		var danger = document.getElementById("danger").value;
		var neighborhood = document.getElementById("neighborhood").value;
		var race = document.getElementById("race").value;
		var owner = document.getElementById("owner").value;
		var address = document.getElementById("address").value;

		data.push({ "microchip": microchip, "species": species, "sex": sex, "size": size, "potentDangerous": danger, "neighborhood": neighborhood, "race": race, "owner": owner, "address": address });
		return this.createSubLists(data);
	}
	getformUp(data) {
		//	var image= document.getElementById("image").value;
		var microchip = document.getElementById("microchip").value;
		var race = document.getElementById("race").value;
		var owner = document.getElementById("owner").value;
		var address = document.getElementById("address").value;
		for (var i = 0; i < data.length; i++) {
			if (data[i]["microchip"] == "microchip") {
				data[i]["race"] = race;
				data[i]["owner"] = owner;
				data[i]["address"] = address;
				//data[i]["image"] = image;
			}
		}
		return this.createSubLists(data);
	}

	createSubLists(data) {
		var num = parseInt(data.length / 50) + 1;
		var bidSublist = [];
		for (var i = 0; i < num; i++) {
			if (i === (num - 1) && (i * 50) !== data.length) {
				bidSublist[i] = data.slice(i * 50, data.length);
			} else if ((i * 50) === data.length) {
				break;
			} else {
				bidSublist[i] = data.slice(i * 50, (i + 1) * 50);
			}
		}
		return bidSublist
	}

	fiterFromMultipleFields() {
		var specie = document.formT.species[document.formT.species.selectedIndex].text.toUpperCase();
		var size = document.formT.size[document.formT.size.selectedIndex].text.toUpperCase();
		var race = document.formT.race[document.formT.race.selectedIndex].text.toUpperCase();
		var neighborhood = document.formT.neighborhood[document.formT.race.selectedIndex].text.toUpperCase();
		var data = [];
		for (var i = 0; i < this.pets.length; i++) {
			if (size === "SELECCIONE" && neighborhood === "SELECCIONE") {
				if (specie === this.pets[i]["species"]) {
					data.push(this.pets[i]);
				}
			} else if (race === "SELECCIONE" && neighborhood === "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"]) {
					data.push(this.pets[i]);
				}
			} else if (neighborhood === "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"] && race === this.pets[i]["race"]) {
					data.push(this.pets[i]);
				}
			} else if (size === "SELECCIONE") {
				if (specie === this.pets[i]["species"]) {
					data.push(this.pets[i]);
				}
			} else if (race === "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"]) {
					data.push(this.pets[i]);
				}
			} else if (neighborhood !== "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"] && race === this.pets[i]["race"] && neighborhood === this.pets[i]["neighborhood"]) {
					data.push(this.pets[i]);
				}
			}
		}
		return this.createSubLists(data);
	}

}
export { Manager };