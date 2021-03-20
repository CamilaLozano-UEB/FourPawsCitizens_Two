// preventDefault prevents the file from executing by default. If the image is different from undefined, delete it to avoid mistakes

function allowDrop(ev) {
	ev.preventDefault();
	if (ev.target.getElementsByClassName("image")[0] !== undefined) {
		ev.target.removeChild(ev.target.getElementsByClassName("image")[0]);
	}
}

// It takes the image file and classifies it, if it is an image it saves it, if it does not return an alert

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