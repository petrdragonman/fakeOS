import { getCurrentTime } from "../Maths/getCurrentTime.js";

export const updateClock = async (elId) => {
    await getCurrentTime();
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeString = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    // use the elId and update .innerText
    document.getElementById(elId).innerText = timeString; 
};