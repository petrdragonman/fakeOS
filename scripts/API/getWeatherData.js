export const getWeatherData = async () => {
    const url = "http://api.weatherapi.com/v1/current.json?key=a8cd36a56e7f4faf98821259242412&q=Sydney&aqi=no";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("no data received, please try again later.");
    }
    const data = await response.json();
    return data;
};