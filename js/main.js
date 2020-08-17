// create a map
var div = document.createElement('div');
div.setAttribute('style', 'position:fixed;margin:0;padding:0;left:0;top:0;width:100%;height:100%;');
document.documentElement.appendChild(div);

var map = L.map(div).setView([54.5, -2], 6);

var tileLayer = L.tileLayer('/maptiles_uk/{z}/{x}/{y}.png', {
  minZoom: 5,
  maxZoom: 8,
});

fetch('/geojson/roads/rutland_roads.geojson')
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    console.log(result);
    var roadslayer = L.geoJSON(result);

    var group = L.FeatureGroup.loadEvents([tileLayer, roadslayer]);

    group.on({
      loading: function() {
        console.log('The layer group just fired the "loading" event!');
        document.body.className = "loading";
      },
      load: function() {
        console.log('The layer group just fired the "load" event!');
        document.body.className = "";
        const millis = Date.now() - start;
        console.log('seconds elapsed = ' + millis / 1000);
      }
    });

    group.addTo(map);
  })
