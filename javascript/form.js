
//Filtered by species and size
// Atributes in array with the default race and arrays of size that depends of species 
var dog = new Array("Seleccione", "Muy Grande", "Grande", "Mediano", "Pequeño", "Miniatura");
var cat = new Array("Seleccione", "Grande", "Mediano", "Pequeño", "Miniatura");
var mistery = new Array("Seleccione", "No Identificado");

var dogSoBig = new Array("Seleccione", "San Bernardo", "Pastor Aleman", "Gran Danés");
var dogBig = new Array("Seleccione", "Labrador Retriever", "Husky Siberiano", "Dalmata");
var dogMiddle = new Array("Seleccione", "Chow Chow", "Golden Retriever", "Pitbull");
var dogSmall = new Array("Seleccione", "Pug", "Shih tzu", "Salchicha");
var dogToy = new Array("Seleccione", "Chihuahua", "Pomerania", "Yorkshire Terrier");

var catBig = new Array("Seleccione", "Ragdoll", "Maine Coon", "Gato de Bengala");
var catMiddle = new Array("Seleccione", "Esfinge", "Persa", "Scotish");
var catSmall = new Array("Seleccione", "Korat", "Skookum", "Curl americano");
var catToy = new Array("Seleccione", "Singapura", "Munchkin", "Devon rex");
//Array that have all size
var sizes = [
	[],
	dog,
	cat,
	mistery,
];
//array that have all race for dog
var dogRace = [
	[],
	dogSoBig,
	dogBig,
	dogMiddle,
	dogSmall,
	dogToy,
];
//array that have all race for cats
 var catRace = [
	[],
	catBig,
	catMiddle,
	catSmall,
	catToy,
];
// Method that change the size in the selectedindex for filters 
function changeSize() {
	var selectsize
	selectsize = document.formT.species[document.formT.species.selectedIndex].value
	if (selectsize == 2) {
		choosesizes = sizes[1]
		numbersizes = choosesizes.length
		document.formT.size.length = numbersizes
		document.formT.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formT.size.options[i].value = i
			document.formT.size.options[i].text = choosesizes[i]
		}
	} else if (selectsize == 3) {
		choosesizes = sizes[2]
		numbersizes = choosesizes.length
		document.formT.size.length = numbersizes
		document.formT.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formT.size.options[i].value = i
			document.formT.size.options[i].text = choosesizes[i]
		}
	} else if (selectsize == 4) {
		choosesizes = sizes[3]
		numbersizes = choosesizes.length
		document.formT.size.length = numbersizes
		document.formT.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formT.size.options[i].value = i
			document.formT.size.options[i].text = choosesizes[i]
		}
	} else {
		document.formT.size.length = 1
		document.formT.size.options[0].text = "Seleccione"
	}
	document.formT.size.options[0].selected = true
	document.formT.race.length = 1
	document.formT.race.options[0].text = "Seleccione"
}
// Method that call the method necessary of race for the species in forms of filter

function changeRace() {
	selectsize = document.formT.species[document.formT.species.selectedIndex].value
	if (selectsize == 2) {
		changeRaceDog()
	} else if (selectsize == 3) {
		changeRaceCat()
	} else {
		document.formT.race.length = mistery.length
		document.formT.race.options[0].text = mistery[0]
		for (i = 1; i < mistery.length; i++) {
			document.formT.race.options[i].value = i
			document.formT.race.options[i].text = mistery[i]
		}
	}
}
// Method that change the race in the selectedindex for the specie Dog in form for filter

function changeRaceDog() {
	var selectRace
	selectRace = document.formT.size[document.formT.size.selectedIndex].value
	if (selectRace != 0) {
		chooseRace = dogRace[selectRace]
		numberRace = chooseRace.length
		document.formT.race.length = numberRace
		document.formT.race.options[0].text = chooseRace[0]
		for (i = 1; i < numberRace; i++) {
			document.formT.race.options[i].value = i
			document.formT.race.options[i].text = chooseRace[i]
		}
	} else {
		document.formT.race.length = 1
		document.formT.race.options[0].text = "Seleccione"
	}
	document.formT.race.options[0].selected = true
}
// Method that change the race in the selectedindex for the specie Cat in form for filter
function changeRaceCat() {
	var selectRace
	selectRace = document.formT.size[document.formT.size.selectedIndex].value
	if (selectRace != 0) {
		chooseRace = catRace[selectRace]
		numberRace = chooseRace.length
		document.formT.race.length = numberRace
		document.formT.race.options[0].text = chooseRace[0]
		for (i = 1; i < numberRace; i++) {
			document.formT.race.options[i].value = i
			document.formT.race.options[i].text = chooseRace[i]
		}
	} else {
		document.formT.race.length = 1
		document.formT.race.options[0].text = "Seleccione"
	}
	document.formT.race.options[0].selected = true
}
// Method that call the method necessary for the species in the size in forms of filter 
function changeSize() {
	var selectsize
	selectsize = document.formT.species[document.formT.species.selectedIndex].value
	if (selectsize == 2) {
		choosesizes = sizes[1]
		numbersizes = choosesizes.length
		document.formT.size.length = numbersizes
		document.formT.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formT.size.options[i].value = i
			document.formT.size.options[i].text = choosesizes[i]
		}
	} else if (selectsize == 3) {
		choosesizes = sizes[2]
		numbersizes = choosesizes.length
		document.formT.size.length = numbersizes
		document.formT.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formT.size.options[i].value = i
			document.formT.size.options[i].text = choosesizes[i]
		}
	} else if (selectsize == 4) {
		choosesizes = sizes[3]
		numbersizes = choosesizes.length
		document.formT.size.length = numbersizes
		document.formT.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formT.size.options[i].value = i
			document.formT.size.options[i].text = choosesizes[i]
		}
	} else {
		document.formT.size.length = 1
		document.formT.size.options[0].text = "Seleccione"
	}
	document.formT.size.options[0].selected = true
	document.formT.race.length = 1
	document.formT.race.options[0].text = "Seleccione"
}
// Method that call the method necessary of race for the species in forms of create pets
function changeRaceC() {
	selectsize = document.formC.species[document.formC.species.selectedIndex].value
	if (selectsize == 2) {
		changeRaceDogC()
	} else if (selectsize == 3) {
		changeRaceCatC()
	} else {
		document.formT.race.length = mistery.length
		document.formC.race.options[0].text = mistery[0]
		for (i = 1; i < mistery.length; i++) {
			document.formC.race.options[i].value = i
			document.formC.race.options[i].text = mistery[i]
		}
	}
}
// Method that change the race in the selectedindex for the specie Dog in form for create pets
function changeRaceDogC() {
	var selectRace
	selectRace = document.formC.size[document.formC.size.selectedIndex].value
	if (selectRace != 0) {
		chooseRace = dogRace[selectRace]
		numberRace = chooseRace.length
		document.formC.race.length = numberRace
		document.formC.race.options[0].text = chooseRace[0]
		for (i = 1; i < numberRace; i++) {
			document.formC.race.options[i].value = i
			document.formC.race.options[i].text = chooseRace[i]
		}
	} else {
		document.formC.race.length = 1
		document.formC.race.options[0].text = "Seleccione"
	}
	document.formC.race.options[0].selected = true
}
// Method that change the race in the selectedindex for the specie Cat in form for create pets
function changeRaceCatC() {
	var selectRace
	selectRace = document.formC.size[document.formC.size.selectedIndex].value
	if (selectRace != 0) {
		chooseRace = catRace[selectRace]
		numberRace = chooseRace.length
		document.formC.race.length = numberRace
		document.formC.race.options[0].text = chooseRace[0]
		for (i = 1; i < numberRace; i++) {
			document.formC.race.options[i].value = i
			document.formC.race.options[i].text = chooseRace[i]
		}
	} else {
		document.formC.race.length = 1
		document.formC.race.options[0].text = "Seleccione"
	}
	document.formC.race.options[0].selected = true
}
// Method that change the size in the selectedindex for the specie Cat in form for create pets
function changeSizeC() {
	var selectsize
	selectsize = document.formC.species[document.formC.species.selectedIndex].value
	if (selectsize == 2) {
		choosesizes = sizes[1]
		numbersizes = choosesizes.length
		document.formC.size.length = numbersizes
		document.formC.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formC.size.options[i].value = i
			document.formC.size.options[i].text = choosesizes[i]
		}
	} else if (selectsize == 3) {
		choosesizes = sizes[2]
		numbersizes = choosesizes.length
		document.formC.size.length = numbersizes
		document.formC.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formC.size.options[i].value = i
			document.formC.size.options[i].text = choosesizes[i]
		}
	} else if (selectsize == 4) {
		choosesizes = sizes[3]
		numbersizes = choosesizes.length
		document.formC.size.length = numbersizes
		document.formC.size.options[0].text = choosesizes[0]
		for (i = 1; i < numbersizes; i++) {
			document.formC.size.options[i].value = i
			document.formC.size.options[i].text = choosesizes[i]
		}
	} else {
		document.formC.size.length = 1
		document.formC.size.options[0].text = "Seleccione"
	}
	document.formC.size.options[0].selected = true
	document.formC.race.length = 1
	document.formC.race.options[0].text = "Seleccione"
}
