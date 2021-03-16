var file = "";
function dropHandler(ev) {
	console.log('Fichero(s) arrastrados');

	// Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
	ev.preventDefault();

	if (ev.dataTransfer.items) {
		// Usar la interfaz DataTransferItemList para acceder a el/los archivos)
		for (var i = 0; i < ev.dataTransfer.items.length; i++) {
			// Si los elementos arrastrados no son ficheros, rechazarlos
			if (ev.dataTransfer.items[i].kind === 'file') {
				file = ev.dataTransfer.items[i].getAsFile();
				console.log('... file[' + i + '].name = ' + file.webkitRelativePath);
			}

		}
	} else {
		// Usar la interfaz DataTransfer para acceder a el/los archivos
		for (var i = 0; i < ev.dataTransfer.files.length; i++) {
			console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].url);
		}
	}
	// Pasar el evento a removeDragData para limpiar
	removeDragData(ev)
}
function removeDragData(ev) {
	console.log('Removing drag data')
	if (ev.dataTransfer.items) {
		// Use DataTransferItemList interface to remove the drag data
		ev.dataTransfer.items.clear();
	} else {
		// Use DataTransfer interface to remove the drag data
		ev.dataTransfer.clearData();
	}
}
