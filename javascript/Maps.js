/**
custom mapbox access token
 */

mapboxgl.accessToken = 'pk.eyJ1IjoibmlwZW1vMzAyMnAiLCJhIjoiY2ttZHh5bHhkMHBsMTJwbGp0aDltMWl2ZiJ9.w3m-oPl-u5Ru-cri6HR-zg';
var map;
var map2;

/**
@param mapId, div id where is located the map
@param pLongitudeFieldId, form Longitude field
@param pLatitudeFieldId, form Latitude field

Create the map and assign the eventlisteners
 */

function cretateCreateMap(mapId, pLongitudeFieldId, pLatitudeFieldId) {

	//an object of the map class is created. Code based on the mapbox tutorials
	map = new mapboxgl.Map({
		container: mapId, // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.03126246153175, 4.71103262003309], // starting position
		zoom: 12 // starting zoom
	});
	map.on("click", function(e) {

		// elements are removed from the class marker1
		$(".marker1").remove();

		// the coordinates are obtained
		var coordinates = e.lngLat.wrap();
		var el = document.createElement("div");
		el.className = "marker1";
		document.getElementById(pLongitudeFieldId).value = coordinates["lng"];
		document.getElementById(pLatitudeFieldId).value = coordinates["lat"];

		//the marker is added to the map at the coordinates
		new mapboxgl.Marker(el)
			.setLngLat(coordinates)
			.addTo(map);
		map.resize();
	});

	// the listener is added to the button
	findMapButton();
}

/**
@param mapId, div id where is located the map
@param pLongitudeFieldId, form Longitude field
@param pLatitudeFieldId, form Latitude field

Create the second map and assign the eventlisteners
 */

function cretateUpdateMap(mapId, pLongitudeFieldId, pLatitudeFieldId) {

	//an object of the map class is created. Code based on the mapbox tutorials
	map2 = new mapboxgl.Map({
		container: mapId, // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.03126246153175, 4.71103262003309], // starting position
		zoom: 12,// starting zoom
	});

	// elements are removed from the class marker1
	map2.on("click", function(e) {
		$(".marker1").remove();

		// the coordinates are obtained
		var coordinates = e.lngLat.wrap();
		var el = document.createElement("div");
		el.className = "marker1";
		document.getElementById(pLongitudeFieldId).value = coordinates["lng"];
		document.getElementById(pLatitudeFieldId).value = coordinates["lat"];

		//the marker is added to the map at the coordinates
		new mapboxgl.Marker(el)
			.setLngLat(coordinates)
			.addTo(map2);
		map2.resize();
	});

	// the listener is added to the button
	findMap2Button();
}
/**
method that is responsible for adding the event listener to the button, 
so that when they press search it goes to the established longitude and latitude
 */
function findMapButton() {
	document.getElementById("mapCButton").addEventListener("click", function() {

		// elements are removed from the class marker1 and the latitude and longitude entered is verified
		$(".marker1").remove();
		if (Number.isNaN(document.getElementById("longitudeC").value / 2) || Number.isNaN(document.getElementById("latidudeC").value / 2)) {
			alert("Los valores digitados no son coordenadas");
		} else if (document.getElementById("longitudeC").value > 180 || document.getElementById("longitudeC").value < -180 || document.getElementById("latidudeC").value > 90 || document.getElementById("latidudeC").value < -90) {
			alert("Longitud y latitud fuera del límite");
		} else {
			var el = document.createElement("div");
			el.className = "marker1";

			// the coordinates are obtained
			var coordinates = [document.getElementById("longitudeC").value, document.getElementById("latidudeC").value];

			//the marker is added to the map at the coordinates
			new mapboxgl.Marker(el)
				.setLngLat(coordinates)
				.addTo(map);
			//centers the map on the set conditions
			map.flyTo({
				center: [coordinates[0], coordinates[1]],
				essential: true,
				zoom: 10
			});
			map.resize();

		}
	});
}
/**
method that is responsible for adding the event listener to the button, 
so that when they press search it goes to the established longitude and latitude
 */
function findMap2Button() {
	document.getElementById("mapUButton").addEventListener("click", function() {
		// elements are removed from the class marker1 and the latitude and longitude entered is verified
		$(".marker1").remove();
		if (Number.isNaN(document.getElementById("longitudeU").value / 2) || Number.isNaN(document.getElementById("latidudeU").value / 2)) {

			alert("Los valores digitados no son coordenadas")

		} else if (document.getElementById("longitudeU").value > 180 || document.getElementById("longitudeU").value < -180 || document.getElementById("latidudeU").value > 90 || document.getElementById("latidudeU").value < -90) {
			alert("Longitud y latitud fuera del límite");
		} else {
			var el = document.createElement("div");
			el.className = "marker1";
			// the coordinates are obtained
			var coordinates = [document.getElementById("longitudeU").value, document.getElementById("latidudeU").value];
			//the marker is added to the map at the coordinates
			new mapboxgl.Marker(el)
				.setLngLat(coordinates)
				.addTo(map2);
			//centers the map on the set conditions
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
