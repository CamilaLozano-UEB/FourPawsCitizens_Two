class Manager {
	static constructor(data) {
		this.pets = data;
		console.log(data);
	}

	static getformCreate(data) {
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
	}
	static getformUp(data) {
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
		return data;
	}

	static createSubLists(data) {
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

	fiterFromMultipleFields(species, size, race, neighborhood) {
		
	}

	get data() {
		return data;
	}



}
export { Manager };