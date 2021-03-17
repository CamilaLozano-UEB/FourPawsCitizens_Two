class Manager {
	constructor(data) {
		this.pets = data;
	}

	getformCreate() {
		var microchip = document.getElementById("microchip").value.toUpperCase();
		if (!this.verifyselectfieldsCreate(sex, size, danger, species, race, image, neighborhood, microchip, owner, address)) {
			if (!this.verifymicrochip(microchip)) {
				var species = document.formC.species[document.formC.species.selectedIndex].text.toUpperCase();
				var sex = document.formC.sex[document.formC.sex.selectedIndex].text.toUpperCase();
				var size = document.formC.size[document.formC.size.selectedIndex].text.toUpperCase();
				var danger = document.formC.danger[document.formC.danger.selectedIndex].text.toUpperCase();
				var neighborhood = document.formC.neighborhood[document.formC.neighborhood.selectedIndex].text.toUpperCase();
				var race = document.formC.race[document.formC.race.selectedIndex].text.toUpperCase();
				var owner = document.getElementById("owner").value.toUpperCase();
				var address = document.getElementById("address").value.toUpperCase();
				var image = document.getElementById("imagecreate").getElementsByClassName("image")[0];
				this.pets.push({ "microchip": microchip, "species": species, "sex": sex, "size": size, "potentDangerous": danger, "neighborhood": neighborhood, "race": race, "owner": owner, "address": address, "picture": image });
			} else {

				alert("El microchip ya se encuentra en uso");

			}
		} else {
			alert("Campo vacio");

		}
		return this.createSubLists(this.pets);
	}

	verifymicrochip(microchip) {
		var result = false;
		for (var i = 0; i < this.pets.length; i++) {
			if (microchip === this.pets[i].microchip) {
				result = true;
			}
		}
		return result;
	}

	verifyselectfieldsCreate(sex, size, danger, species, race, image, neighborhood, microchip, owner, address) {
		var result = false
		if (address === null || sex == "Seleccione:" || image === undefined || size === "Elija primero el tamaño" || size === "Seleccione" || danger === "Seleccione" || species === "Seleccione" || race === "Seleccione" || neighborhood === "Seleccione" || microchip === null || owner === null) {
			result = true
		}
		return result;
	}



	getformUp() {
		var microchip = document.formU.microchip.value;
		if (!this.verifyselectfieldsUpgrade(race, image, owner, address)) {
			var image = document.getElementById("imageupgrade").getElementsByClassName("image")[0];
			var race = document.getElementById("raceU").value.toUpperCase();
			var owner = document.getElementById("ownerU").value.toUpperCase();
			var address = document.getElementById("addressU").value.toUpperCase();
			for (var i = 0; i < this.pets.length; i++) {
				if (this.pets[i]["microchip"] === microchip) {
					this.pets[i]["race"] = race;
					this.pets[i]["owner"] = owner;
					this.pets[i]["address"] = address;
					this.pets[i]["image"] = image.src;
				}
			}
		} else {
			alert("Campo vacio")
		}
		return this.createSubLists(this.pets);
	}

	verifyselectfieldsUpgrade(race, image, owner, address) {
		var result = false
		if (address === null || image === undefined || race === "Seleccione" || owner === null) {
			result = true
		}
		return result;
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
			} else if (neighborhood !== "SELECCIONE" && race === "SELECCIONE" && size === "SELECCIONE" && specie === "SELECCIONE") {
				if (neighborhood === this.pets[i]["neighborhood"]) {
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
			} else if (neighborhood !== "SELECCIONE" && race !== "SELECCIONE") {
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

