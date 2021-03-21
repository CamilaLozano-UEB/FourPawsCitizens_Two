mapboxgl.accessToken = 'pk.eyJ1IjoibmlwZW1vMzAyMnAiLCJhIjoiY2ttZHh5bHhkMHBsMTJwbGp0aDltMWl2ZiJ9.w3m-oPl-u5Ru-cri6HR-zg';
var map;
var map2;

function cretateCreateMap(mapId, pLongitudeFieldId, pLatitudeFieldId) {
	mapboxgl.accessToken = 'pk.eyJ1IjoibmlwZW1vMzAyMnAiLCJhIjoiY2ttZHh5bHhkMHBsMTJwbGp0aDltMWl2ZiJ9.w3m-oPl-u5Ru-cri6HR-zg';
	map = new mapboxgl.Map({
		container: mapId, // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.03126246153175, 4.71103262003309], // starting position
		zoom: 14 // starting zoom
	});
	map.on("click", function(e) {
		$(".marker1").remove();

		var coordinates = e.lngLat.wrap();
		var el = document.createElement("div");
		el.className = "marker1";
		document.getElementById(pLongitudeFieldId).value = coordinates["lng"];
		document.getElementById(pLatitudeFieldId).value = coordinates["lat"];

		new mapboxgl.Marker(el)
			.setLngLat(coordinates)
			.addTo(map);
		map.resize();
	});
	scopeMapButton();
}

function cretateUpdateMap(mapId, pLongitudeFieldId, pLatitudeFieldId) {
	mapboxgl.accessToken = 'pk.eyJ1IjoibmlwZW1vMzAyMnAiLCJhIjoiY2ttZHh5bHhkMHBsMTJwbGp0aDltMWl2ZiJ9.w3m-oPl-u5Ru-cri6HR-zg';
	map2 = new mapboxgl.Map({
		container: mapId, // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.03126246153175, 4.71103262003309], // starting position
		zoom: 14 ,// starting zoom
	});
	map2.on("click", function(e) {
		$(".marker1").remove();

		var coordinates = e.lngLat.wrap();
		var el = document.createElement("div");
		el.className = "marker1";
		document.getElementById(pLongitudeFieldId).value = coordinates["lng"];
		document.getElementById(pLatitudeFieldId).value = coordinates["lat"];

		new mapboxgl.Marker(el)
			.setLngLat(coordinates)
			.addTo(map2);
		map2.resize();
	});
	scopeMap2Button();
}

function scopeMapButton() {
	document.getElementById("mapCButton").addEventListener("click", function() {
		$(".marker1").remove();
		if (!Number.isNaN(document.getElementById("longitudeC").value / 2) && !Number.isNaN(document.getElementById("latidudeC").value / 2)) {
			var el = document.createElement("div");
			el.className = "marker1";
			var coordinates = [document.getElementById("longitudeC").value, document.getElementById("latidudeC").value];

			new mapboxgl.Marker(el)
				.setLngLat(coordinates)
				.addTo(map);
			map.resize();
			document.getElementById("longitudeC").value = "";
			document.getElementById("latidudeC").value = "";
		} else {
			alert("Los valores digitados no son coordenadas")
		}
	});
}
function scopeMap2Button() {
	document.getElementById("mapUButton").addEventListener("click", function() {
		$(".marker1").remove();
		if (!Number.isNaN(document.getElementById("longitudeU").value / 2) && !Number.isNaN(document.getElementById("latidudeU").value / 2)) {

			var el = document.createElement("div");
			el.className = "marker1";
			var coordinates = [document.getElementById("longitudeU").value, document.getElementById("latidudeU").value];

			new mapboxgl.Marker(el)
				.setLngLat(coordinates)
				.addTo(map2);
			map2.resize();
			document.getElementById("longitudeU").value = "";
			document.getElementById("latidudeU").value = "";
		} else {
			alert("Los valores digitados no son coordenadas")
		}
	});
}


export { cretateCreateMap, cretateUpdateMap }
