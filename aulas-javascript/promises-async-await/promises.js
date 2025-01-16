"use strict";

let cities = [
  { city: "Sao Paulo", weather: "Raining" },
  { city: "Rio de Janeiro", weather: "Sunny" },
  { city: "Ceará", weather: "Too Hot!" },
  { city: "Bahia", weather: "Sunny" },
  { city: "Minas Gerais", weather: "Cold" },
  { city: "Paraná", weather: "Cloudy" },
  { city: "Santa Catarina", weather: "Snowing" },
  { city: "Rio Grande do Sul", weather: "Cold" },
  { city: "Pernambuco", weather: "Raining" },
  { city: "Amazonas", weather: "Raining" },
  { city: "Pará", weather: "Raining" },
  { city: "Mato Grosso", weather: "Too Hot!" },
  { city: "Mato Grosso do Sul", weather: "Too Hot!" },
  { city: "Goiás", weather: "Too Hot!" },
  { city: "Tocantins", weather: "Too Hot!" },
  { city: "Rondônia", weather: "Too Hot!" },
  { city: "Acre", weather: "Too Hot!" },
  { city: "Roraima", weather: "Too Hot!" },
  { city: "Amapá", weather: "Too Hot!" },
  { city: "Maranhão", weather: "Too Hot!" },
  { city: "Piauí", weather: "Too Hot!" },
  { city: "Paraíba", weather: "Too Hot!" },
  { city: "Alagoas", weather: "Too Hot!" },
  { city: "Sergipe", weather: "Too Hot!" },
  { city: "Espírito Santo", weather: "Cold!" },
  { city: "Distrito Federal", weather: "Too Hot!" },
  { city: "Ceará", weather: "Too Hot!" },
  { city: "Roraima", weather: "Too Hot!" },
  { city: "Amapá", weather: "Too Hot!" },
  { city: "Maranhão", weather: "Too Hot!" },
  { city: "Piauí", weather: "Too Hot!" },
  { city: "Paraíba", weather: "Too Hot!" },
  { city: "Alagoas", weather: "Too Hot!" },
  { city: "Sergipe", weather: "Too Hot!" },
  { city: "Narnia", weather: "" },
];

function getCitiesAPI(myCity) {
  const myWeather = cities.find(({ city }) => city === myCity);
  return myWeather.weather;
}

function searchWeatherForecast(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const forecastWeather = getCitiesAPI(city);
      if (forecastWeather) {
        resolve(`Weather forecast in ${city} is ${forecastWeather}`);
      } else {
        reject(`It was not possible to get the weather forecast for ${city}`);
      }
    }, 2000);
  });
}

const forecastSaoPaulo = searchWeatherForecast("Sao Paulo");
Promise.all([forecastSaoPaulo])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("An error occurs", err);
  });

const forecastRioDeJaneiro = searchWeatherForecast("Rio de Janeiro");
Promise.all([forecastRioDeJaneiro])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("An error occurs", err);
  });

const forecastCeara = searchWeatherForecast("Ceará");
Promise.all([forecastCeara])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("An error occurs", err);
  });

  const forecastNarnia = searchWeatherForecast("Narnia");
  Promise.all([forecastNarnia])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error("An error occurs", err);
    });