mapboxgl.accessToken = 'pk.eyJ1IjoibmlwZW1vMzAyMnAiLCJhIjoiY2ttZHh5bHhkMHBsMTJwbGp0aDltMWl2ZiJ9.w3m-oPl-u5Ru-cri6HR-zg';
var map;
var map2;

function cretateCreateMap(mapId, pLongitudeFieldId, pLatitudeFieldId) {
	map = new mapboxgl.Map({
		container: mapId, // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.03126246153175, 4.71103262003309], // starting position
		zoom: 12 // starting zoom
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
	map2 = new mapboxgl.Map({
		container: mapId, // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.03126246153175, 4.71103262003309], // starting position
		zoom: 12,// starting zoom
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
		if (Number.isNaN(document.getElementById("longitudeC").value / 2) || Number.isNaN(document.getElementById("latidudeC").value / 2)) {
			alert("Los valores digitados no son coordenadas");
		} else if (document.getElementById("longitudeC").value > 180 || document.getElementById("longitudeC").value < -180 || document.getElementById("latidudeC").value > 90 || document.getElementById("latidudeC").value < -90) {
			alert("Longitud y latitud fuera del límite");
		} else {
			var el = document.createElement("div");
			el.className = "marker1";
			var coordinates = [document.getElementById("longitudeC").value, document.getElementById("latidudeC").value];

			new mapboxgl.Marker(el)
				.setLngLat(coordinates)
				.addTo(map);
			map.flyTo({
				center: [coordinates[0], coordinates[1]],
				essential: true,
				zoom: 10
			});
			map.resize();

		}
	});
}
function scopeMap2Button() {
	document.getElementById("mapUButton").addEventListener("click", function() {
		$(".marker1").remove();
		if (Number.isNaN(document.getElementById("longitudeU").value / 2) || Number.isNaN(document.getElementById("latidudeU").value / 2)) {

			alert("Los valores digitados no son coordenadas")

		} else if (document.getElementById("longitudeU").value > 180 || document.getElementById("longitudeU").value < -180 || document.getElementById("latidudeU").value > 90 || document.getElementById("latidudeU").value < -90) {
			alert("Longitud y latitud fuera del límite");
		} else {
			var el = document.createElement("div");
			el.className = "marker1";
			var coordinates = [document.getElementById("longitudeU").value, document.getElementById("latidudeU").value];

			new mapboxgl.Marker(el)
				.setLngLat(coordinates)
				.addTo(map2);

			map.flyTo({
				center: [coordinates[0], coordinates[1]],
				essential: true,
				zoom: 10
			});
			map2.resize();
		}
	});
}


export { cretateCreateMap, cretateUpdateMap }
