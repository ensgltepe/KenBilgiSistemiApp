var map = L.map('map').setView([39,32], 13);
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position){
    console.log(position)
    var lat = position.coords.latitude
    var long = position.coords.longitude
    console.log('İşte Konumunuz, Enlem:' + lat, 'Boylam:' + long)
    var konummarker = L.marker([lat, long]).addTo(map);
    var circle = L.circle([lat, long], 30).addTo(map);
    console.log(lat, long);
    map.flyTo([lat, long], 17);
    
}