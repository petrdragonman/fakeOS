export const updateWeatherModal = (data) => {
    const locationEl = document.getElementById("loc");
    const temperatureEl = document.getElementById("temp");
    const descriptionEl = document.getElementById("desc");
    locationEl.innerText = data.location.name;
    temperatureEl.innerText = data.current.temp_c;
    descriptionEl.innerText = data.current.condition.text;
};