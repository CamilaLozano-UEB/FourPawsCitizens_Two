class Manager {
	constructor(data) {
		this.pets = data;
	}

	getformCreate() {
		var microchip = document.getElementById("microchip").text.toUpperCase();
		var species = document.getElementById("species").text.toUpperCase();
		var sex = document.getElementById("sex").text.toUpperCase();
		var size = document.getElementById("size").text.toUpperCase();
		var danger = document.getElementById("danger").text.toUpperCase();
		var neighborhood = document.getElementById("neighborhood").text.toUpperCase();
		var race = document.getElementById("race").text.toUpperCase();
		var owner = document.getElementById("owner").text.toUpperCase();
		var address = document.getElementById("address").text.toUpperCase();

		this.pets.push({ "microchip": microchip, "species": species, "sex": sex, "size": size, "potentDangerous": danger, "neighborhood": neighborhood, "race": race, "owner": owner, "address": address });
		return this.createSubLists(this.pets);
	}
	getformUp() {
		//	var image= document.getElementById("image").value;
		var microchip = document.getElementById("microchip").text.toUpperCase();
		var race = document.getElementById("race").text.toUpperCase();
		var owner = document.getElementById("owner").text.toUpperCase();
		var address = document.getElementById("address").text.toUpperCase();
		for (var i = 0; i < this.pets.length; i++) {
			if (this.pets[i]["microchip"] == "microchip") {
				this.pets[i]["race"] = race;
				this.pets[i]["owner"] = owner;
				this.pets[i]["address"] = address;
				//data[i]["image"] = image;
			}
		}
		return this.createSubLists(this.pets);
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
		var neighborhood = document.formT.neighborhood[document.formT.neighborhood.selectedIndex].text.toUpperCase();
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
			} else if (race !== "SELECCIONE" && neighborhood === "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"] && race === this.pets[i]["race"]) {
					data.push(this.pets[i]);
				}
			} else if (size === "SELECCIONE") {
				if (specie === this.pets[i]["species"] && neighborhood === this.pets[i]["neighborhood"]) {
					data.push(this.pets[i]);
				}
			} else if (race === "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"] && neighborhood === this.pets[i]["neighborhood"]) {
					data.push(this.pets[i]);
				}
			} else if (neighborhood !== "SELECCIONE") {
				if (specie === this.pets[i]["species"] && size === this.pets[i]["size"] && race === this.pets[i]["race"] && neighborhood === this.pets[i]["neighborhood"]) {
					data.push(this.pets[i]);
				}
			}
		}
		if (data[0] === undefined) {
			data.push({ "microchip": "", "species": "", "sex": "", "size": "", "potentDangerous": "", "neighborhood": "", "race": "", "owner": "", "address": "" })
		}
		return this.createSubLists(data);
	}

}
export { Manager };