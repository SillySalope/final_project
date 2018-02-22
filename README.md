# final_project
A map with
NYC Subway Stations that are accessible to wheelchairs
The map will feature every station point, every line and train in NYC
It will have features that will make possible to toggle on and off by
certain lines
accessible or Not

* MTA

* MTA SUBWAY entrances SHAPEFILE
`https://data.cityofnewyork.us/Transportation/Subway-Entrances/drex-xx56/data`

* MTA ACCESSIBLE STATIONS info
`http://web.mta.info/accessibility/stations.htm`
`https://data.ny.gov/Transportation/NYC-Transit-Subway-Entrance-And-Exit-Data/i9wp-a4ja`

* Baruch College


* Github Example
file:///C:/Users/Mariano/Documents/GitHub/subway_examples/nyc-subway-entrances-map/index.html

* leaflet
http://leafletjs.com/examples/quick-start/

* papa parse for csvs
https://www.papaparse.com/

* cloropleth?
http://leafletjs.com/examples/choropleth/

* chris examples
https://chriswhong.github.io/leaflet-landuse-demo/

* mapshaper
http://mapshaper.org/

* Class Doc
https://docs.google.com/document/d/1wlEAFtoJMjeBE8XuznjjivVZ7tuPgRyqPDUeidHgfg4/edit

The assignment just says to make use of geoJSON formatted data, and use L.geoJSON() in leaflet to make a map...

The steps I went through in class were:
1) download data
2) use QGIS to open the data and export a small part of the original data on geoJSON format, and to convert the coordinate reference system from 2263 to 4326 (NY state plate to WGS84(lat/lon))
3) add the geojson to a leaflet project, either by creating a .js file from the geoJSON and prepending `var myData = ` to it
or, adding the raw `.geojson` file to the project and using jquery `$.getJSON()` to load it
I then added data-driven styling to it by passing an options object to L.geoJSON()

## Progress
So I dowloaded the dataset with the info and the updated entrances shapefile
