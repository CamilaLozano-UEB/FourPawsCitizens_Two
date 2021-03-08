
var previousTenLi = document.getElementById("previousTen");
var previousLi = document.getElementById("previous");
var pageLi = document.getElementById("page");
var nextLi = document.getElementById("nex");
var nextTenLi = document.getElementById("nex10");
var totalPages = document.getElementById("total");

function assignTableNavigationValues(numOfPages) {
	previousTenLi.firstChild.href = "#tabla1";
	previousLi.firstChild.href = "#tabla1";

	if (numOfPages > 10) {
		nextTenLi.firstChild.href = "#tabla11";
		nextLi.firstChild.href = "#tabla2";
	} else if (numOfPages > 1) {
		nextLi.firstChild.href = "#tabla2";
		nextTenLi.firstChild.href = "#tabla1";
	} else {
		nextLi.firstChild.href = "#tabla1";
		nextTenLi.firstChild.href = "#tabla1";
	}

	pageLi.firstChild.textContent = "1";
	totalPages.firstChild.textContent = numOfPages;

	assignListeners();
}

function assignListeners() {
	previousTenLi.addEventListener("click", handlePreviousTenLiEvent);
	previousLi.addEventListener("click", handlePreviousLiEvent);
	nextLi.addEventListener("click", handleNextLiEvent);
	nextTenLi.addEventListener("click", handleNextTenLiEvent);

}

function handlePreviousTenLiEvent() {
	var actualNumHref = parseInt(pageLi.firstChild.textContent);
	
	if (actualNumHref <= 10) {
		previousTenLi.firstChild.href = "#tabla1";
		pageLi.firstChild.textContent = "1";
	} else {
		previousTenLi.firstChild.href = "#tabla" + (actualNumHref - 10);
		pageLi.firstChild.textContent = (actualNumHref - 10);
	}
}

function handlePreviousLiEvent() {
	var actualNumHref = parseInt(pageLi.firstChild.textContent);

	if (actualNumHref === 1) {
		previousTenLi.firstChild.href = "#tabla1";
		pageLi.firstChild.textContent = "1";
	} else {
		previousTenLi.firstChild.href = "#tabla" + (actualNumHref - 1);
		pageLi.firstChild.textContent = (actualNumHref - 1);
	}
}

function handleNextLiEvent() {
	var actual = parseInt(pageLi.firstChild.textContent);
	var total = parseInt(totalPages.firstChild.textContent);
	if (actual !== total) {
		nextLi.firstChild.href = "#tabla" + (actual + 1);
		pageLi.firstChild.textContent = (actual + 1);
	}
}

function handleNextTenLiEvent() {
	var actual = parseInt(pageLi.firstChild.textContent);
	var total = parseInt(totalPages.firstChild.textContent);
	if (actual <= (total - 10)) {
		nextLi.firstChild.href = "#tabla" + (actual + 10);
		pageLi.firstChild.textContent = (actual + 10);
	}
}

export { assignTableNavigationValues };