// create a map
var div = document.createElement('div');
div.setAttribute('style', 'position:fixed;margin:0;padding:0;left:0;top:0;width:100%;height:100%;');
document.documentElement.appendChild(div);

var map = L.map(div).setView([50.7, -1.2], 3);

var tileLayer = L.tileLayer('/maptiles/{z}/{x}/{y}.png', {
    maxZoom: 3,
});

fetch('/geojson/isle_of_wight_pois.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        console.log(result);
        var POIlayer = L.geoJson(result, {
            // use point to layer to create the points
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng).bindPopup("<b>" + feature.properties.name + "</b>");
            }
        })// end of point to layer

        var group = L.FeatureGroup.loadEvents([tileLayer, POIlayer]);

// test
        const start = Date.now();

        group.on({
            loading: function () {
                console.log('The layer group just fired the "loading" event!');
                document.body.className = "loading";
            },
            load: function () {
                console.log('The layer group just fired the "load" event!');
                document.body.className = "";
                const millis = Date.now() - start;
                console.log('seconds elapsed = ' + millis / 1000);
            }
        });

        group.addTo(map);
    });
