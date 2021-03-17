
//Manejo y creación de la paginación

import { createBody } from "./tables.js"

var previousTenLi = document.getElementById("previousTen");
var previousLi = document.getElementById("previous");
var pageLi = document.getElementById("page");
var nextLi = document.getElementById("next");
var nextTenLi = document.getElementById("next10");
var totalPages = document.getElementById("total");
var dataPets = [];

function assignTableNavigationValues(subList) {
	dataPets = subList;
	pageLi.firstChild.textContent = "1";
	totalPages.firstChild.textContent = subList.length - 1;
	createBody(dataPets[0], 0);
	assignListeners();
}

function assignListeners() {
	previousTenLi.addEventListener("click", handlePreviousTenLiEvent);
	previousLi.addEventListener("click", handlePreviousLiEvent);
	nextLi.addEventListener("click", handleNextLiEvent);
	nextTenLi.addEventListener("click", handleNextTenLiEvent);
}

function handlePreviousTenLiEvent() {
	var actual = parseInt(pageLi.firstChild.textContent);
	if (actual <= 10) {
		pageLi.firstChild.textContent = "1";
		createBody(dataPets[0], 0);
	} else {
		pageLi.firstChild.textContent = (actual - 10);
		createBody(dataPets[actual - 10], actual - 10);
	}
}

function handlePreviousLiEvent() {
	var actual = parseInt(pageLi.firstChild.textContent);
	if (actual === 1) {
		pageLi.firstChild.textContent = "1";
		createBody(dataPets[0], 0);
	} else {
		pageLi.firstChild.textContent = (actual - 1);
		createBody(dataPets[actual - 1], actual - 1);
	}
}

function handleNextLiEvent() {
	var actual = parseInt(pageLi.firstChild.textContent);
	var total = parseInt(totalPages.firstChild.textContent);
	if (actual < total) {
		pageLi.firstChild.textContent = (actual + 1);
		createBody(dataPets[actual + 1], actual + 1);
	}
}

function handleNextTenLiEvent() {
	var actual = parseInt(pageLi.firstChild.textContent);
	var total = parseInt(totalPages.firstChild.textContent);
	if (actual <= (total - 10)) {
		pageLi.firstChild.textContent = (actual + 10);
		createBody(dataPets[actual + 10], actual + 10);
	}
}

export { assignTableNavigationValues };