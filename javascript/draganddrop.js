var file = "";
function dropHandler(ev) {
	ev.preventDefault();
	if (ev.dataTransfer.items) {
		for (var i = 0; i < ev.dataTransfer.items.length; i++) {
			if (ev.dataTransfer.items[i].kind === 'file') {
				file = ev.dataTransfer.items[i].getAsFile();
			}
		}
	} else {
		for (var i = 0; i < ev.dataTransfer.files.length; i++) {
		}
	}
	removeDragData(ev)
}
function removeDragData(ev) {
	if (ev.dataTransfer.items) {
		ev.dataTransfer.items.clear();
	} else {
		ev.dataTransfer.clearData();
	}
}
