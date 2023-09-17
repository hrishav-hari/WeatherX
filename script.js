const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Kolkata");

const func = (city) => {
  const cityName = document.getElementById("cityName");
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      const html = `<tr>
  <th scope="row" class="text-start">${city}</th>
  <td>${response.temp}</td>
  <td>${response.feels_like}</td>
  <td>${response.max_temp}</td>
  <td>${response.min_temp}</td>
  <td>${response.cloud_pct}</td>
  <td>${response.humidity}</td>
</tr>`;

      document.querySelector("tbody").innerHTML += html;
    });
};

func("Kolkata");
func("Mumbai");
func("Bangalore");
func("Chennai");
func("Pune");
