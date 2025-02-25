import { updateClock } from "./scripts/DOM/updateClock.js";
import { getWeatherData } from "./scripts/API/getWeatherData.js";
import { updateWeatherModal } from "./scripts/DOM/updateWeatherModal.js";
import { loadingInfo } from "./scripts/DOM/loading.js";


const weatherApp = document.getElementById("weatherBtn");
const weatherDialog = document.querySelector("dialog");
const closeWeatherApp = document.querySelector("#close-modal");

weatherApp.addEventListener('click', async () => {
    weatherDialog.showModal();
    // passing id of the element to display message "loading...."
    loadingInfo("loc");
    updateWeatherModal(await getWeatherData());
});

closeWeatherApp.addEventListener('click', () => {
    weatherDialog.close();
});

// if true -> 1 the continues loop for the current time feature
const isAppOn = 1;
while(isAppOn) {
    await updateClock("time");
}
