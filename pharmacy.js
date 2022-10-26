fetch("https://www.nosyapi.com/apiv2/pharmacyLink?city=zonguldak&county=caycuma&apikey=zgD1WkxDpzSFpdSD5vNk8qjYxls8nhFwT4xeVqmn4EMrYcOKXCw1xyR0gU4r"
).then(response => {
  return response.json()
}
).then(responseJson => {
    console.log(responseJson)

    
    document.getElementById('pharm1').innerHTML= responseJson.data[0].EczaneAdi;
    document.getElementById('pharm2').innerHTML= responseJson.data[1].EczaneAdi;
    document.getElementById('pharm3').innerHTML= responseJson.data[2].EczaneAdi;
    document.getElementById('pharm4').innerHTML= responseJson.data[3].EczaneAdi;
    document.getElementById('pharm5').innerHTML= responseJson.data[4].EczaneAdi;
    document.getElementById('phone1').innerHTML= responseJson.data[0].Telefon;
    document.getElementById('phone2').innerHTML= responseJson.data[1].Telefon;
    document.getElementById('phone3').innerHTML= responseJson.data[2].Telefon;
    document.getElementById('phone4').innerHTML= responseJson.data[3].Telefon;
    document.getElementById('phone5').innerHTML= responseJson.data[4].Telefon;
});