function allowDrop(evento) {
  evento.preventDefault();
}

function drag(evento) {
  evento.dataTransfer.setData("text", evento.target.id);
}

function drop(evento) {
  evento.preventDefault();
  var imagen = evento.dataTransfer.getData("text");
  evento.target.appendChild(document.getElementById(imagen));
}
