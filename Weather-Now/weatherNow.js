document.addEventListener("DOMContentLoaded", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Abbotsford")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
});

document.getElementById("submit").addEventListener("click", ()=>{
  const location = document.getElementById("search").value
  if(location !== ""){
    const fetch = new main();
    fetch.getWeatherData(location)
    .then(
            //Updating date and time
            document.getElementById("day").innerText = new update().getDateTime())
    .catch((error)=> console.log(error.message));
  }else{
    alert("Please enter something!")
  }
})

document.getElementById("abbotsford").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Abbotsford")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("vancouver").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Vancouver")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("toronto").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Toronto")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("mission").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Mission")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("richmond").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Richmond")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("brampton").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Brampton")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("hope").addEventListener("click", ()=>{
  const fetch = new main();
  fetch.getWeatherData("Hope")
  .then(
          //Updating date and time
          document.getElementById("day").innerText = new update().getDateTime())
  .catch((error)=> console.log(error.message));
})

document.getElementById("langley").addEventListener("click", ()=>{

    const fetch = new main();
    fetch.getWeatherData("Langley")
    .then(
            //Updating date and time
            document.getElementById("day").innerText = new update().getDateTime())
    .catch((error)=> console.log(error.message));
})

class main{

  // function to get weather data
  async getWeatherData(city) {
    try{
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3788aa6ddfmsh099663fd7c3c9a8p1350d0jsn572b8db09b81',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      
    const response= await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    console.log("Location Data Retrieved", response)
    const data = await response.json()
    const updateUtil = new update();
    updateUtil.updateUI(data, city);
    }catch(err){
      console.log(err.message);
    }
  }
}

class update{
  updateUI(data, city){
    const locationBC = document.getElementById("location"),
    temp = document.getElementById("temp"),
    cloud_pctUI = document.getElementById("cloud_pctUI"),
    windUI = document.getElementById("wind-UI"),
    humidityUI = document.getElementById("humidity-UI"),
    //date=document.getElementById("day"),
    feels_like=document.getElementById("feels-like"),
    humidity=document.getElementById("humidity"),
    cloud_pct=document.getElementById("cloud_pct"),
    sunrise=document.getElementById("sunrise"),
    sunset=document.getElementById("sunset"),
    wind=document.getElementById("wind"),
    wind_degree=document.getElementById("wind-deg"),
    min=document.getElementById("min"),
    max=document.getElementById("max");

    locationBC.innerText=city;
    cloud_pct.innerText = data.cloud_pct+"%";
    cloud_pctUI.innerText=data.cloud_pct+"%";
    temp.innerText = data.temp;
    feels_like.innerText="Feels like: "+data.feels_like+" C";
    humidity.innerText=data.humidity+"%";
    humidityUI.innerText=data.humidity+"%";
    min.innerText=data.min_temp+" C";
    max.innerText=data.max_temp+" C";
    wind.innerText=data.wind_speed+" Km/h";
    windUI.innerText=data.wind_speed+" Km/h";
    wind_degree.innerText=data.wind_degree;
    sunrise.innerText=data.sunrise;
    sunset.innerText=data.sunset;
  }

   // function to get date and time
  getDateTime() {
    let now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // 12 hours format
    hour = hour % 12;
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    let dayString = days[now.getDay()];
    return `${dayString}, ${hour}:${minute}`;
  }

}
