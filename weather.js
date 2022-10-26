fetch("https://api.openweathermap.org/data/2.5/weather?q=çaycuma&appid=e61d14ff79dc5243aabcf12cc87a354f&units=metric"
).then(response => {
  return response.json()
}
).then(responseJson=>{
  console.log(responseJson)
    var temp = Math.round(responseJson.main.temp);
    var max_temp = Math.round(responseJson.main.temp_max);
    var min_temp = Math.round(responseJson.main.temp_min);
    var diffmaks = max_temp - temp;
    var diffmin = temp - min_temp
    document.getElementById('temp').innerHTML = temp+"°";
    document.getElementById('diffmax').innerHTML = "+"+diffmaks+"°";
    document.getElementById('diffmin').innerHTML = "-" + diffmin+"°";
});
const d = new Date();
document.getElementById("date").innerHTML = d;

