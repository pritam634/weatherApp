const sendBtn = document.getElementById('sendBtn'),
    city_name = document.getElementById("city-name"),
    status_icon = document.getElementById('status_icon'),
    temp_status = document.getElementById("temp_status"),
    cityName_contry = document.getElementById('cityName_contry');

const getEval = async (event) => {
    event.preventDefault();
    let cityVal = city_name.value;
    if (cityVal === "") {
        cityName_contry.innerText = 'Please write the city name before search';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=24989f1446fcbecdbf8bc8fc7a72a3b4`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = await [data];
            console.log(arrData);
            temp_status.innerHTML = `${(arrData[0].main.temp - 273.15).toFixed(2)}<sup>o</sup>C`;
            const tempStatus = arrData[0].weather[0].main;
            cityName_contry.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            if (tempStatus == "Sunny" || tempStatus == "Clear") {
                status_icon.innerHTML = `<i class="fas fa-sun status_temp" style="color: #eccc68;"></i>`;
            } else if (tempStatus == "Clouds") {
                status_icon.innerHTML = `<i class="fas fa-cloud status_temp" style="color: #dfe4ea;"></i>`;
            } else if (tempStatus == "Rainy") {
                status_icon.innerHTML = `<i class="fas fa-rain status_temp" style="color: #a4b0be;"></i>`;
            } else if (tempStatus == "Mist") {
                status_icon.innerHTML = `<i class="fas fa-fog status_temp" style="color: #dfe4ea;"></i>`;
            } else if (tempStatus == "Haze") {
                status_icon.innerHTML = `<i class="fal fa-sun-haze status_temp" style="color: #dfe4ea;"></i>`;
            } else {
                status_icon.innerHTML = `<i class="fas fa-cloud status_temp" style="color: #dfe4ea;"></i>`;
            }
        } catch {
            cityName_contry.innerText = 'Please enter a valid city name';
        }
    }
}

sendBtn.addEventListener('click', getEval);