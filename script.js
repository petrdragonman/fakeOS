import { updateClock } from "./scripts/Maths/getCurrentTime.js";



const weatherApp = document.getElementById("weatherBtn");
const weatherDialog = document.querySelector("dialog");
const closeWeatherApp = document.querySelector("#close-modal");
weatherApp.addEventListener('click', async () => {
    weatherDialog.showModal();
    updateWeatherModal(await getWeatherData());
});
closeWeatherApp.addEventListener('click', () => {
    weatherDialog.close();
});

const getWeatherData = async () => {
    const url = "http://api.weatherapi.com/v1/current.json?key=a8cd36a56e7f4faf98821259242412&q=Sydney&aqi=no";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("no data received, please try again later.");
    }
    const data = await response.json();
    //console.log(data);
    // console.log(data.location.name);
    // console.log(data.current.temp_c);
    // console.log(data.current.condition.icon);
    // console.log(data.current.condition.text);
    return data;
};

const updateWeatherModal = (data) => {
    const locationEl = document.getElementById("loc");
    const temperatureEl = document.getElementById("temp");
    const descriptionEl = document.getElementById("desc");
    locationEl.innerText = data.location.name;
    temperatureEl.innerText = data.current.temp_c;
    descriptionEl.innerText = data.current.condition.text;
};

const isAppOn = 0;
while(isAppOn) {
    await updateClock("time");
}
