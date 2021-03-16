function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	var element = document.createElement("p");
	element.textContent = data;
	ev.target.appendChild(element);
	element.style.color = "blue";
}