
var map2 = L.map('map2').setView([39,32], 13);
var osm2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
var personicon = L.icon({
  iconUrl: 'icons/person-walking.png',
  iconSize: [40, 40],
});
fetch("https://www.nosyapi.com/apiv2/pharmacyLink?city=zonguldak&county=caycuma&apikey=zgD1WkxDpzSFpdSD5vNk8qjYxls8nhFwT4xeVqmn4EMrYcOKXCw1xyR0gU4r"
).then(response => {
  return response.json()
}
).then(responseJson => {
    console.log(responseJson)
var latitude0 = responseJson.data[0].latitude
var longitude0 = responseJson.data[0].longitude
var latitude1 = responseJson.data[1].latitude
var longitude1 = responseJson.data[1].longitude   
var latitude2 = responseJson.data[2].latitude
var longitude2 = responseJson.data[2].longitude   
var latitude3 = responseJson.data[3].latitude
var longitude3 = responseJson.data[3].longitude   
var latitude4 = responseJson.data[4].latitude
var longitude4 = responseJson.data[4].longitude 
    navigator.geolocation.getCurrentPosition(getPosition);
    function getPosition(position){
        console.log(position)
        var lat2 = position.coords.latitude
        var long2 = position.coords.longitude
        console.log('İşte Konumunuz, Enlem:' + lat2, 'Boylam:' + long2)
        var konummarker2 = L.marker([lat2, long2], {icon: personicon} ).addTo(map2)
        map2.flyTo([lat2, long2], 12);

        L.Routing.control({
            waypoints: [
              L.latLng(lat2, long2),
              L.latLng(latitude0, longitude0)
            ]
            
          }).addTo(map2); 
         
         
}});