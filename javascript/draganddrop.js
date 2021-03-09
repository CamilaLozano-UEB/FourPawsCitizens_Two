var file = "";
function dropHandler(evento) {
    console.log('Fichero(s) arrastrados');

    // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
    evento.preventDefault();

    if (evento.dataTransfer.items) {
        // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
        for (var i = 0; i < evento.dataTransfer.items.length; i++) {
            // Si los elementos arrastrados no son ficheros, rechazarlos
            if (evento.dataTransfer.items[i].kind === 'file') {
                file = evento.dataTransfer.items[i].getAsFile();
            }
        }
    } else {
        // Usar la interfaz DataTransfer para acceder a el/los archivos
        for (var i = 0; i < evento.dataTransfer.files.length; i++) {
        }
    }

    // Pasar el evento a removeDragData para limpiar
    removeDragData(evento)
}
function removeDragData(evento) {
    if (evento.dataTransfer.items) {
        // Use DataTransferItemList interface to remove the drag data
        evento.dataTransfer.items.clear();
    } else {
        // Use DataTransfer interface to remove the drag data
        evento.dataTransfer.clearData();
    }
}