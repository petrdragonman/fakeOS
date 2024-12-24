


const weatherApp = document.getElementById("weatherBtn");
const weatherDialog = document.querySelector("dialog");
const closeWeatherApp = document.querySelector("#close-modal");
weatherApp.addEventListener('click', async () => {
    weatherDialog.showModal();
    await getWeatherData();
});
closeWeatherApp.addEventListener('click', () => {
    weatherDialog.close();
});
