const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');


const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;




// Windchill Calculation

function calWindChill(temp, windSpeed) {

    const windChillCal = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    
    return windChillCal.toFixed(1);

}

// Windchill variables

const tempInfo = document.getElementById('temp').textContent;
const windSpeedInfo = document.getElementById('windSpeed').textContent;

const temp = parseFloat(tempInfo);
const windSpeed = parseFloat(windSpeedInfo);

// Windchill element selector

const windChill = document.querySelector('#windChill')

if (temp <= 10 && windSpeed > 4.8) {
    windChill.textContent = calWindChill(temp, windSpeed) + "°C";
}
else {
    windChill.textContent = "Not Available"
};