console.log('hello manojit');

const API_KEY = "59f59ea0f114592d49a89e8f05bb675a";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara); 
}

async function showWeather() {
    // let latitude = 15.34212;
    // let longitude = 74.84332; 
    try{
        let city = 'Durgapur';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
     
        const data = await response.json();
        console.log('weather data:-> ',data);
    
        renderWeatherInfo(data);
    }

    catch(err){
        // Handle the error
    }
    
}

async function getCustomWeatherDetails (){
    try{
        let latitude = 15.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        let data = await result.json();
        console.log(data);
        renderWeatherInfo(data);
    }

    catch(err){
        console.log('Error Found' , err);
    }
}

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      console.log("No geolocation Support available");
    }
}
  
function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
  
    console.log(lat);
    console.log(longi);
}
  