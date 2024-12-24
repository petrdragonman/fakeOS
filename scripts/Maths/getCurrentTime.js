export const getCurrentTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //// dummy function creating the 1 sec wait
            resolve(1);
        }, 1000);
    });
}

// export const updateClock = async (elId) => {
//     await getCurrentTime();
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();
//     const timeString = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
//     // use the elId and update .innerText
//     document.getElementById(elId).innerText = timeString; 
// };