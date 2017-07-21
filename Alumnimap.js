//Set the initial view on the css object tha is in the div
var mymap = L.map('mapid').setView([34.0544,-118], 5);
//the only marker that is visible now (blue marker)
//var marker = L.marker([51.5, -0.09]).addTo(mymap);
// create an empty GeoJSON layer and assign it to a variable so that we can add more features to it later. Took out the ID tag before
var geojsonFeature = [
  {
    "type": "Feature",
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
//    "id": "locality.3603076398664452"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q1070",
      "place_name": "Ahmedabad, Ahmadabad City, Gujarat, India",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        72.58,
        23.03
      ],
      "type": "Point"
    },
//    "id": "locality.6071432280934418"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q1156",
      "place_name": "Mumbai Urban Agglomerate, Maharashtra, India",
      "alumni": 3
    },
    "geometry": {
      "coordinates": [
        72.83333,
        18.96667
      ],
      "type": "Point"
    },
//    "id": "place.10631146842525650"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q34932",
      "place_name": "Brisbane, Queensland, Australia",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        153.0235,
        -27.469
      ],
      "type": "Point"
    },
//    "id": "place.10987281989688270"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q1296",
      "place_name": "Gent, Oost-Vlanderen, Belgium",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        3.71667,
        51.05
      ],
      "type": "Point"
    },
//    "id": "place.1197608670280853"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q275109",
      "place_name": "Jundiaí, São Paulo, Brazil",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -46.8838,
        -23.1882
      ],
      "type": "Point"
    },
//    "id": "place.12090219548669990"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q3181125",
      "place_name": "Dayton, Kentucky, United States",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -84.4727,
        39.1128
      ],
      "type": "Point"
    },
//    "id": "place.12773900931954150"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q17969",
      "place_name": "Jabiru, Northern Territory, Australia",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        132.8366,
        -12.6738
      ],
      "type": "Point"
    },
//    "id": "place.14367640765319630"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q25410",
      "place_name": "Aalborg, Nordjylland, Denmark",
      "alumni": 2
    },
    "geometry": {
      "coordinates": [
        9.91667,
        57.05
      ],
      "type": "Point"
    },
//    "id": "place.18019941690170910"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q12439",
      "place_name": "Detroit, Michigan, United States",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -83.0567,
        42.3487
      ],
      "type": "Point"
    },
//    "id": "place.2063689938327150"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q1871106",
      "place_name": "Clive, Iowa, United States",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -93.7754,
        41.6096
      ],
      "type": "Point"
    },
//    "id": "place.319408268146300"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q60",
      "place_name": "New York, New York, United States",
      "alumni": 5
    },
    "geometry": {
      "coordinates": [
        -73.9808,
        40.7648
      ],
      "type": "Point"
    },
//    "id": "place.3677094975964500"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q16557",
      "place_name": "Dallas, Texas, United States",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -96.7969,
        32.7763
      ],
      "type": "Point"
    },
//    "id": "place.3790103132701420"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q1489",
      "place_name": "Mexico City, Distrito Federal, Mexico",
      "alumni": 8
    },
    "geometry": {
      "coordinates": [
        -99.17,
        19.41
      ],
      "type": "Point"
    },
  //  "id": "place.5154037879100080"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q3141",
      "place_name": "Melbourne, Victoria, Australia",
      "alumni": 3
    },
    "geometry": {
      "coordinates": [
        144.9632,
        -37.8142
      ],
      "type": "Point"
    },
//    "id": "place.7068896531111320"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q79990",
      "place_name": "Christchurch, Canterbury Region, New Zealand",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        172.62028,
        -43.53
      ],
      "type": "Point"
    },
//    "id": "place.765638912397069"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q81033",
      "place_name": "Monterrey, Nuevo León, Mexico",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -100.30861,
        25.67139
      ],
      "type": "Point"
    },
//    "id": "place.7988670281816950"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q133073",
      "place_name": "Dunedin, Otago Region, New Zealand",
      "alumni": 2
    },
    "geometry": {
      "coordinates": [
        170.5,
        -45.86667
      ],
      "type": "Point"
    },
//    "id": "place.8241344385358162"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q4093",
      "place_name": "Glasgow, Glasgow City, Scotland, United Kingdom",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -4.2436,
        55.8567
      ],
      "type": "Point"
    },
//    "id": "place.8421596533720930"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q37100",
      "place_name": "Auckland, Auckland Region, New Zealand",
      "alumni": 3
    },
    "geometry": {
      "coordinates": [
        174.78333,
        -36.85
      ],
      "type": "Point"
    },
//    "id": "place.8780874631580419"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q406",
      "place_name": "Istanbul, Istanbul, Turkey",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        28.96028,
        41.01
      ],
      "type": "Point"
    },
//    "id": "place.9004116418282401"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q1757",
      "place_name": "Helsinki, Uusimaa, Finland",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        24.94861,
        60.17333
      ],
      "type": "Point"
    },
//    "id": "place.9573073199195940"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q84",
      "place_name": "London, Greater London, England, United Kingdom",
      "alumni": 3
    },
    "geometry": {
      "coordinates": [
        -0.127599,
        51.5073
      ],
      "type": "Point"
    },
//    "id": "place.9655698108631530"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q48278",
      "place_name": "Medellín, Antioquia, Colombia",
      "alumni": 2
    },
    "geometry": {
      "coordinates": [
        -75.57483,
        6.24475
      ],
      "type": "Point"
    },
//    "id": "place.9688040195547040"
  },
  {
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
  //  "id": "place.9962989141465270"
  },
  {
    "type": "Feature",
    "properties": {
      "wikidata": "Q631752",
      "place_name": "Arcata, California, United States",
      "alumni": 1
    },
    "geometry": {
      "coordinates": [
        -124.0828,
        40.8665
      ],
      "type": "Point"
    },
//  "id": "place.9995415529228800"
  }
];
//"type": "FeatureCollection"


//tileLayer from mapbox using their dark style
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnNvZmlhYyIsImEiOiJjajI5ZXN1aGowMTFnMzJwMjF6NjF3d3dkIn0.52JMFc1hfHUfeR85H9dHoQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


L.geoJSON(geojsonFeature).addTo(mymap);
