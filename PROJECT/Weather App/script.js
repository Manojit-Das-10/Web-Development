console.log('hello manojit');

const API_KEY = "59f59ea0f114592d49a89e8f05bb675a";

async function showWeather() {
    // let latitude = 15.34212;
    // let longitude = 74.84332; 
    let city = 'goa';

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
 
    const data = await response.json();
    console.log('weather data:-> ' + data);

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);


}