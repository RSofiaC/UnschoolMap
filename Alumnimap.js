//Set the initial view on the css object tha is in the div
var mymap = L.map('mapid').setView([34.0544,-118], 5);
//the only marker that is visible now (blue marker)
//var marker = L.marker([51.5, -0.09]).addTo(mymap);
// create an empty GeoJSON layer and assign it to a variable so that we can add more features to it later.
var geojsonFeature = [ {
    "type": "Feature",
    "properties": {
      "wikidata": "Q65",
      "place_name": "Los Angeles, California, United States",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -118.2439,
        34.0544
      ],
      "type": "Point"
    },
  },
    {  "type": "Feature",
      "properties": {
        "wikidata": "Q1338324",
        "place_name": "Najing Xian, Zhangzhou Shi, Fujian, China",
        "alumni": 1
      },
      "geometry": {
        "coordinates": [
          117.35972,
          24.51743
        ],
        "type": "Point"
      },
    },
]

//tileLayer from mapbox using their dark style
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnNvZmlhYyIsImEiOiJjajI5ZXN1aGowMTFnMzJwMjF6NjF3d3dkIn0.52JMFc1hfHUfeR85H9dHoQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


L.geoJSON(geojsonFeature).addTo(mymap);
