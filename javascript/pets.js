class Manager {
	constructor(data) {
		this.pets = data;
	}

	static createSubLists(data) {
		var num = parseInt(data.length / 50) + 1;
		var bidSublist = [];
		for (var i = 0; i < num; i++) {
			if (i === (num - 1) && (i * 50) != data.length) {
				bidSublist[i] = data.slice(i * 50, data.length);
			} else {
				bidSublist[i] = data.slice(i * 50, (i + 1) * 50);
			}
		}
		return bidSublist
	}

	get data() {
		return data;
	}
}
export { Manager };