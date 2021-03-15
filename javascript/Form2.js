var data = [];
function setData(pets) {
	data = pets;
}
function addSpeciesEventListener() {
	fillSpecies();
	document.getElementById("species2").addEventListener("change", fillSizeOptions);
	document.getElementById("size2").addEventListener("change", fillRaceOptions);
}

function fillSizeOptions() {
	var sizes = getSizeWithSpecie();
	console.log(sizes);
	for (var i = 0; i < sizes.length; i++) {
		var newOption = document.createElement("option");
		newOption.textContent = sizes[i];
		document.getElementById("size2").appendChild(newOption);
	}
}

function getSizeWithSpecie() {
	var sizes = [];
	var specie = document.formT.species[document.formT.species.selectedIndex].text.toUpperCase();
	for (var i = 0; i < data.length; i++) {
		if (specie === data[i]["species"])
			if (!isRepeated(data[i]["size"], sizes))
				sizes.push(data[i]["size"]);
	}
	return sizes;
}

function isRepeated(item, array) {
	var repeated = false;
	for (var i = 0; i < array.length; i++)
		if (item === array[i])
			repeated = true;
	return repeated;
}

function fillRaceOptions() {
	var races = getRaceWithSpecieSize();
	for (var i = 0; i < races.length; i++) {
		var newOption = document.createElement("option");
		newOption.textContent = races[i];
		document.getElementById("race").appendChild(newOption);
	}
}

function getRaceWithSpecieSize() {
	var races = [];
	var specie = document.formT.species[document.formT.species.selectedIndex].text.toUpperCase();
	var size = document.formT.size[document.formT.size.selectedIndex].text.toUpperCase();

	for (var i = 0; i < data.length; i++)
		if (specie === data[i]["species"] && size === data[i]["size"])
			if (!isRepeated(data[i]["race"], races))
				races.push(data[i]["race"]);
	return races;
}

function fillSpecies() {
	var species = [];
	document.getElementById("species2");
	for (var i = 0; i < data.length; i++) {
		if (!isRepeated(data[i]["species"], species)) {
			species.push(data[i]["species"]);
			var newOption = document.createElement("option");
			newOption.textContent = data[i]["species"];
			document.getElementById("species2").appendChild(newOption);
		}
	}
}

export { setData, addSpeciesEventListener }