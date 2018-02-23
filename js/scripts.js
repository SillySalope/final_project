var defaultCenter = [40.622813, -74.028282];
var defaultZoom = 12;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);;

function LookupLine(Route_1) { //You can use this for categories too!
	console.log(Route_1)
	return Route_1 === '1' ? '#800026' :
			Route_1 === '2'  ? '#BD0026' :
			Route_1 ===  'A' ? '#E31A1C' :
			Route_1 ===  'C' ? '#FC4E2A' :
			Route_1 ===  'N' ? '#FD8D3C' :
			Route_1 ===  'Q' ? '#FEB24C' :
			Route_1 ===  'Z' ? '#FED976' :
						'#FFEDA0';
}
//
// var LookupLine = function(route) {
//   switch(route) {
//   case '1':
//     return {
//       color: "#d11141",
//       description: '1'
//     }
//   default:
//     return {
//     color: "#d11141",
//     description: 'default'
//   }
//
//   }
// }
//   case '02':
//     return {
//       color: "#f7d496",
//       description: 'Multi - Family Walk- Up Buldings'
//     }
//   case '03':
//     return {
//       color: "#FF9900",
//       description: 'Multi - Family Elevator'
//     }
//   case '04':
//     return {
//       color: "#f7cabf",
//       description: 'Mixed Residential and Commercial'
//     }
//   case '05':
//     return {
//       color: "#ea6661",
//       description: 'Commercial and Office'
//     }
//   case '06':
//     return {
//       color: "#d36ff4",
//       description: 'Industrial and Manufacturing'
//     }
//   case '07':
//     return {
//       color: "#dac0e8",
//       description: 'Transportation and Utility'
//     }
//   case '08':
//     return {
//       color: "#5CA2D1",
//       description: 'Public Facilities and Institutions'
//     }
//   case '09':
//     return {
//       color: "#8ece7c",
//       description: 'Open Space and Outdoor Recreation'
//     }
//   case '10':
//     return {
//       color: "#bab8b6",
//       description: 'Parking Facilities'
//     }
//   case '11':
//     return {
//       color: "#5f5f60",
//       description: 'Vacant Land'
//     }
//   }
// }
//
// add geojson using jquery's $.getJSON()
// $.getJSON('data/BARUCH/subway_entrance_2018b.geojson',function(entrances) {
//   L.geoJSON(entrances, {
//     style: {
//       dashArray: '3 10',
//       color: 'white',
//       fillOpacity: 0,
//     }
//   }).addTo(map);
// })

//1. Load the fucking map
//2. Study the possibility to bring in fucking street grid
//3.

// add geojson using jquery's $.getJSON()
// $.getJSON('data/study_boundary.geojson', function(study_boundary) {
//   L.geoJSON(study_boundary, {
//     style: {
//       dashArray: '3 10',
//       color: 'white',
//       fillOpacity: 0,
//     }
//   }).addTo(map);
//
// Data is point based, not polygons, it is different...

// var geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: LookupLine(feature.properties.Route_1).color,
//     color: "#fff",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

//Adapting Rigel's code
// $.getJSON('data/BARUCH/subway_entrance_feb2018b.geojson', function(feature) {

// $.getJSON('data/BARUCH/subway_4326.geojson', function(subways) {
//     L.geoJSON(subways, {
//         style: function(feature) {
//             return {
//               color: 'white',
//               fillColor: LookupLine(feature.properties.Route_1).color,
//               fillOpacity: 0.8,
//               weight: 10,
//             }
//         }
//         }).addTo(map)
// })


$.getJSON('data/BARUCH/subway_4326.geojson', function(subways) {
    L.geoJSON(subways, {
			pointToLayer: function (feature,latlng) {
				return L.circleMarker (latlng, {
					color: LookupLine(feature.properties.Route_1)
				}).bindPopup("hello" + feature.properties.ADA)
			}
    }).addTo(map)
})
  // $.getJSON('data/BARUCH/subway_4326.geojson', function(subways) {
  //     L.geoJSON(subways, {
  //         style: function(feature) {
  //             return {
  //               color: 'white',
  //               fillColor: LookupLine(feature.properties.Route_1).color,
  //                         fillColor: 'red',
  //               fillOpacity: 0.8,
  //               weight: 10,
  //             })
  //         },
  //         onEachFeature: function(feature,layer) {
  //                   layer.bindPopup("This station is accesible:" + "feature.properties.ADA")
  //               }
  //             }
  //         }).addTo(map)
//   // Use L.geoJSON to load PLUTO parcel data that we clipped in QGIS and change the CRS from 2263 to 4326
//   // this was moved inside the getJSON callback so that the parcels will load on top of the study area study_boundary
  // var blocksGeojson = L.geoJSON(entrances, {
  //     style: function(feature) {
  //
  //         return {
  //           color: 'white',
  //           fillColor: LookupLine(feature.properties.Route_1).color,
  //           fillOpacity: 1,
  //           weight: 10,
  //         }
  //     },
//     onEachFeature: function(feature, layer) {
//       const description = LookupLine(feature.properties.Line).description;
//
//       layer.bindPopup(`${feature.properties.Address}<br/>${description}`, {
//         closeButton: false,
//         minWidth: 60,
//         offset: [0, -10]
//       });
//       layer.on('mouseover', function (e) {
//         this.openPopup();
//
//         e.target.setStyle({
//           weight: 3,
//           color: '#FFF',
//         });
//
//         if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//             layer.bringToFront();
//         }
//       });
//       layer.on('mouseout', function (e) {
//         this.closePopup();
//         blocksGeojson.resetStyle(e.target);
//       });
//     }
  // }).addTo(map);
// })
