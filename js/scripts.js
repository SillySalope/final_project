var defaultCenter = [40.622813, -74.028282];
var defaultZoom = 12;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);;

// function LookupLine(Route_1) { //You can use this for categories too!
// 	console.log(Route_1)
// 	return Route_1 === '1' ? '#BD0026' :
// 			Route_1 === '2'  ? '#BD0026' :
// 			Route_1 === '3'  ? '#BD0026' :
// 			Route_1 === '4'  ? '#008000' :
// 			Route_1 === '5'  ? '#008000' :
// 			Route_1 === '6'  ? '#008000' :
// 			Route_1 === '7'  ? '#710B37' :
// 			Route_1 ===  'E' ? '#0057e7' :
// 			Route_1 ===  'A' ? '#0057e7' :
// 			Route_1 ===  'C' ? '#0057e7' :
// 			Route_1 ===  'G' ? '#D2E764' :
// 			Route_1 ===  'B' ? '#f37735' :
// 			Route_1 ===  'D' ? '#f37735' :
// 			Route_1 ===  'F' ? '#f37735' :
// 			Route_1 ===  'M' ? '#f37735' :
// 			Route_1 ===  'L' ? '#808080' :
// 			Route_1 ===  'N' ? '#FFDD00' :
// 			Route_1 ===  'Q' ? '#FFDD00' :
// 			Route_1 ===  'R' ? '#FFDD00' :
// 			Route_1 ===  'W' ? '#FFDD00' :
// 			Route_1 ===  'J' ? '#8d5524' :
// 			Route_1 ===  'Z' ? '#8d5524' :
// 			Route_1 ===  'S' ? '#808080' :
// 						'#000000';
// }

//signaling accesible stations
function Accesibility(ADA) { //You can use this for categories too!
	console.log(ADA)
	return ADA === 'Accessible' ? '#008000' :
				ADA === 'Not accessible'  ? '#BD0026' :
						'#000000';
}

// $.getJSON('data/BARUCH/subway_4326b.geojson', function(subways) {
//     L.geoJSON(subways, {
// 			pointToLayer: function (feature,latlng) {
// 				return L.circleMarker (latlng, {
// 					color: LookupLine(feature.properties.Route_1),
// 					radius: 2
// 				}).bindPopup("The" + " " + feature.properties.North_Sout + " " + feature.properties.East_West_ + " " + feature.properties.Corner + " " + "corner" + " " + "subway entrance is" + " " + feature.properties.ADA)
// 			}
//     }).addTo(map)
// })

$.getJSON('data/BARUCH/subway_4326b.geojson', function(subways) {
    L.geoJSON(subways, {
			pointToLayer: function (feature,latlng) {
				return L.circleMarker (latlng, {
					color: Accesibility(feature.properties.ADA),
					radius: 2
				}).bindPopup("The" + " " + feature.properties.North_Sout + " " + feature.properties.East_West_ + " " + feature.properties.Corner + " " + "corner" + " " + "subway entrance is" + " " + feature.properties.ADA)
			}
    }).addTo(map)
})
