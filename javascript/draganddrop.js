function allowDrop(ev) {
	ev.preventDefault();
	if (ev.target.getElementsByClassName("image")[0] !== undefined) {
		ev.target.removeChild(ev.target.getElementsByClassName("image")[0]);
	}
}
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	var mimeType = data.split(".")[data.split(".").length - 1].toUpperCase();
	
	if (mimeType !== "JPG" && mimeType !== "JPEG" && mimeType !== "PNG" && mimeType !== "GIF") {
		alert("El archivo seleccionado no es una imagen");
	} else {
		var image = document.createElement("img");
		image.className = "image";
		image.src = data;
		image.width = document.body.clientWidth / 2;
		ev.target.appendChild(image);
	}
}