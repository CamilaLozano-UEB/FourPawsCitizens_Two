class Manager {
	//Constructor that receives the animals (data) to save them in pets
	constructor(data) {
		this.pets = data;
	}
	//returns the array of the selected animal to update
	getdependenceUp() {
		var microchip = document.formU.microchip.value;
		for (var i = 0; i < this.pets.length; i++) {
			if (microchip === this.pets[i].microchip) {
				return this.pets[i];
			}
		}
	}
	//Method that adds the new animal and saves it in this.pets
	getformCreate() {
		var microchip = document.getElementById("microchip").value.toUpperCase();
		if (!this.verifymicrochip(microchip)) {
			var species = document.formC.species[document.formC.species.selectedIndex].text.toUpperCase();
			var sex = document.formC.sex[document.formC.sex.selectedIndex].text.toUpperCase();
			var size = document.formC.size[document.formC.size.selectedIndex].text.toUpperCase();
			var danger = document.formC.danger[document.formC.danger.selectedIndex].text.toUpperCase();
			var neighborhood = document.formC.neighborhood[document.formC.neighborhood.selectedIndex].text.toUpperCase();
			var race = document.formC.race[document.formC.race.selectedIndex].text.toUpperCase();
			var owner = document.getElementById("owner").value.toUpperCase();
			var address = document.getElementById("address").value.toUpperCase();
			var image = document.getElementById("imagecreation").getElementsByClassName("image")[0];
			var longitude = document.getElementById("longitudeC").value.toUpperCase();
			var latitude = document.getElementById("latidudeC").value.toUpperCase();
			if (!this.verifyselectfieldsCreate(sex, size, danger, species, race, image, neighborhood, microchip, owner, address, latitude, longitude)) {
				this.pets.push({ "microchip": microchip, "species": species, "sex": sex, "size": size, "potentDangerous": danger, "neighborhood": neighborhood, "race": race, "owner": owner, "address": address, "image": image.src, "longitude": longitude, "latitude": latitude });
			} else {
				alert("Campo vacio");
			}
		} else {
			alert("El microchip ya se encuentra en uso");

		}
		return this.createSubLists(this.pets);
	}
	//Method that verifies that the microchip exists before in this.pets receives microchip return a boolean
	verifymicrochip(microchip) {
		var result = false;
		for (var i = 0; i < this.pets.length; i++) {
			if (microchip === this.pets[i].microchip) {
				result = true;
			}
		}
		return result;
	}
	//Method that verifies that the fields are empty return a boolean for create
	verifyselectfieldsCreate(sex, size, danger, species, race, image, neighborhood, microchip, owner, address, latitude, longitude) {
		var result = false
		if (address === null || sex == "SELECCIONE" || image === undefined || size === "ELIJA PRIMERO EL ESPECIE" || size === "SELECCIONE" || danger === "SELECCIONE" || species === "SELECCIONE" || race === "SELECCIONE" || race === "ELIJA PRIMERO EL TAMAÑO" || neighborhood === "SELECCIONE" || microchip === null || owner === null || longitude === null || latitude === null || longitude === "" || latitude === "") {
			result = true
		}
		return result;
	}


	//Method that adds the update pets components
	getformUp() {
		var microchip = document.formU.microchip.value;
		var image = document.getElementById("imageupgrade").getElementsByClassName("image")[0];
		var race = document.formU.race[document.formU.race.selectedIndex].text.toUpperCase();
		var owner = document.getElementById("ownerU").value.toUpperCase();
		var address = document.getElementById("addressU").value.toUpperCase();
		var longitude = document.getElementById("longitudeU").value.toUpperCase();
		var latitude = document.getElementById("latidudeU").value.toUpperCase();
		if (!this.verifyselectfieldsUpgrade(race, image, owner, address, longitude, latitude) && microchip != "") {
			for (var i = 0; i < this.pets.length; i++) {
				if (this.pets[i]["microchip"] === microchip) {
					this.pets[i]["race"] = race;
					this.pets[i]["owner"] = owner;
					this.pets[i]["address"] = address;
					this.pets[i]["image"] = image.src;
					this.pets[i]["longitude"] = longitude;
					this.pets[i]["latitude"] = latitude;
				}
			}
		} else {
			alert("Campo vacio")
		}
		return this.createSubLists(this.pets);
	}
	//Method that verifies that the fields are empty return a boolean for Update
	verifyselectfieldsUpgrade(race, image, owner, address, longitude, latitude) {
		var result = false;
		if (address === null || image === undefined || race === "SELECCIONE" || owner === null || longitude === null || latitude === null || longitude === "" || latitude === "") {
			result = true
		}
		return result;
	}

	//Method that creates a sublist from data return the sublist

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

	//Method that generates a data from the filtering to pass it to the createSublist method

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

