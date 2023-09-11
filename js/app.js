const btnGetWeather = document.getElementById('btnWeather')
const citySearch = document.getElementById('city')

btnGetWeather.addEventListener('click', () => {
    if(citySearch.value.trim().length > 0) {
        getWheather(citySearch.value)
    }   else {
        alert('Ciudad vacia... no jodas')
        citySearch.focus()
    }
})

const newData = () => {
    const city = document.getElementById('newCity')
    const humedad = document.getElementById('humedad')
    const wind = document.getElementById('wind')
    const hour = document.getElementById('hour')
    const grade = document.getElementById('grade')
    const clima = document.getElementById('clima')
    const maxmin = document.getElementById('max-min')

    city.textContent = cityFound.city
    humedad.textContent = cityFound.humidity
    wind.textContent = cityFound.wind
    hour.textContent = cityFound.last_update
    grade.textContent = cityFound.temp
    clima.textContent = cityFound.current_weather
    maxmin.textContent = cityFound.expected_temp
}