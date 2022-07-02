// let x = document.getElementById('locate');

// function getlocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition)
//     } else {
//         x.innerText = "Geo not supported"
//     }

//     function showPosition(data) {
//         console.log(data)
//         let latitude = data.coords.latitude;
//         let longitude = data.coords.longitude;
//         x.innerText = `${latitude} ${longitude}`;
//     }
// }

function showPosition(data) {
    console.log(data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url, {
            method: 'GET'
        })
        .then((res) => console.log(res.json()))
        .then((data) => {
            console.log(data)
            let cityName = data.city.cityName
            x.innerText = ` ${cityName}`;
        })