  var mymap = L.map('mapid').setView([28.61346, 7.38281], 2);
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB2d3R3MTBqeHVrbHk0NGM5ajRjcCJ9.ts4qRmVk4Wf7wyKwomlAKw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jake8940.01gj7ih1',
    accessToken: 'pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB5OWl3MTBqenVrbHl6dWxkMWwxNyJ9._UKAJjElysUixu5b7S-xNg',
    detectRetina: true
  }).addTo(mymap);

  gon.trips.forEach(function(trip) {
    var marker = L.marker([trip.latitude, trip.longitude]).addTo(mymap);
    marker.bindPopup("<a href='https://www.google.com'>Hello world!</a><br>I am a popup.").openPopup();
  });





// var mymap = L.map('mapid').setView([28.61346, 7.38281], 2);
//
// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB2d3R3MTBqeHVrbHk0NGM5ajRjcCJ9.ts4qRmVk4Wf7wyKwomlAKw', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'jake8940.01gj7ih1',
//     accessToken: 'pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB5OWl3MTBqenVrbHl6dWxkMWwxNyJ9._UKAJjElysUixu5b7S-xNg',
//     detectRetina: true
// }).addTo(mymap);
//
// var marker = L.marker([51.5, -0.09]).addTo(mymap);
//
// var circle = L.circle([51.508, -0.11], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5
// }).addTo(mymap);
//
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);
//
// // var popup = L.popup();
// // function onMapClick(e) {
// //   popup
// //     .setLatLng(e.latlng)
// //     .setContent("You clicked the map at " + e.latlng.toString())
// //     .openOn(mymap);
// // }
// // mymap.on('click', onMapClick);
//
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
