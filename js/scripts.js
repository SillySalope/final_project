var defaultCenter = [40.622813, -74.028282];
var defaultZoom = 12;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);;

const LookupLine = function(LineColor) {
  switch(LineColor) {
  case '1':
    return {
      color: "#d11141",
      description: '1'
    }
  }
}
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
//   // Use L.geoJSON to load PLUTO parcel data that we clipped in QGIS and change the CRS from 2263 to 4326
//   // this was moved inside the getJSON callback so that the parcels will load on top of the study area study_boundary
  var blocksGeojson = L.geoJSON(entrances, {
      style: function(feature) {

          return {
            color: 'white',
            fillColor: LookupLine(feature.properties.Route_1).color,
            fillOpacity: 0.8,
            weight: 10,
          }
      },
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
  }).addTo(map);
// })
