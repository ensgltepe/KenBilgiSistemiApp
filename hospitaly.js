console.log(data.hospitals)
var map3 = L.map('map3').setView([41.42, 32.06], 13);
var osm3 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);
var personicon = L.icon({
    iconUrl: 'icons/person-walking.png',
    iconSize: [40, 40],
  });
navigator.geolocation.getCurrentPosition(getPosition);
    function getPosition(position){
        console.log(position)
        var lat3 = position.coords.latitude
        var long3 = position.coords.longitude
        console.log('İşte Konumunuz, Enlem:' + lat3, 'Boylam:' + long3)
        var konummarker2 = L.marker([lat3, long3], {icon: personicon} ).addTo(map3)
        map3.flyTo([lat3, long3], 12);
        var difflat1 = data.hospitals[0].Latitude - lat3;
        var difflong1 = data.hospitals[0].Longitude - long3;
        var sqrt1 = Math.sqrt((difflat1*difflat1)+(difflong1*difflong1));
        var difflat2 = data.hospitals[1].Latitude - lat3;
        var difflong2 = data.hospitals[1].Longitude - long3;
        var sqrt2 = Math.sqrt((difflat2*difflat2)+(difflong2*difflong2))
        console.log(sqrt1,sqrt2)
        var difflat3 = data.hospitals[2].Latitude - lat3;
        var difflong3 = data.hospitals[2].Longitude - long3;
        var sqrt3 = Math.sqrt((difflat3*difflat3)+(difflong3*difflong3));
        var difflat4 = data.hospitals[3].Latitude - lat3;
        var difflong4 = data.hospitals[3].Longitude - long3;
        var sqrt4 = Math.sqrt((difflat4*difflat4)+(difflong4*difflong4));
        var sqrtgroup = ([sqrt1, sqrt2, sqrt3, sqrt4]);
        console.log(Math.min.apply(Math, sqrtgroup));
        if((Math.min.apply(Math, sqrtgroup))==sqrt1){
            L.Routing.control({
                waypoints: [
                  L.latLng(lat3, long3),
                  L.latLng(data.hospitals[0].Latitude, data.hospitals[0].Longitude)
                ]
                
              }).addTo(map3);
              var marker1 = L.marker([data.hospitals[0].Latitude, data.hospitals[0].Longitude])
              var popup1 = marker1.bindPopup("Çaycuma 2 Numaralı Sağlık Ocağı").openPopup()
              popup1.addTo(map3);
        } else if((Math.min.apply(Math, sqrtgroup))==sqrt2){
            L.Routing.control({
                waypoints: [
                  L.latLng(lat3, long3),
                  L.latLng(data.hospitals[1].Latitude, data.hospitals[1].Longitude)
                ]
                
              }).addTo(map3);
              var marker2 = L.marker([data.hospitals[1].Latitude, data.hospitals[1].Longitude])
              var popup2 = marker2.bindPopup("Çaycuma 2 Numaralı Sağlık Ocağı").openPopup()
              popup2.addTo(map3);
        }else if((Math.min.apply(Math, sqrtgroup))==sqrt3){
            L.Routing.control({
                waypoints: [
                  L.latLng(lat3, long3),
                  L.latLng(data.hospitals[2].Latitude, data.hospitals[2].Longitude)
                ]
                
              }).addTo(map3);
              var marker3 = L.marker([data.hospitals[2].Latitude, data.hospitals[2].Longitude])
              var popup3 = marker3.bindPopup("Çaycuma 1 Numaralı Sağlık Ocağı").openPopup()
              popup3.addTo(map3);
        }
        else if((Math.min.apply(Math, sqrtgroup))==sqrt4){
           
            L.Routing.control({
                waypoints: [
                  L.latLng(lat3, long3),
                  L.latLng(data.hospitals[3].Latitude, data.hospitals[3].Longitude)
                ]
                
              }).addTo(map3);
              var marker4 = L.marker([data.hospitals[3].Latitude, data.hospitals[3].Longitude])
              var popup4 = marker4.bindPopup("Çaycuma 2 Numaralı Sağlık Ocağı").openPopup()
              popup4.addTo(map3);
        }
       
        
        
       
}