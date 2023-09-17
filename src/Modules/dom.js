import { weatherData } from './api';
const conditionDOM = document.querySelector('#condition');
const conditionImgDOM = document.querySelector('#img');
const cityDOM = document.querySelector('#city');
const regionDOM = document.querySelector('#region');
const tempDOM = document.querySelector('#temp');
const feelsLikeDOM = document.querySelector('#feels-like');
const uvDOM = document.querySelector('#uv');
const humidityDOM = document.querySelector('#humidity');

const updateWeather = async (place) => {
  const weather = await weatherData(place);
  conditionDOM.textContent = `${weather.condition}`;
  conditionImgDOM.src = `${weather.img}`;
  cityDOM.textContent = `${weather.city}`;
  regionDOM.textContent = `${weather.region}`;
  tempDOM.textContent = `${Math.round(weather.temp)}\u00B0`;
  feelsLikeDOM.textContent = `${Math.round(weather.feelsLike)}\u00B0`;
  uvDOM.textContent = `${weather.uv}`;
  humidityDOM.textContent = `${weather.humidity}%`;
};

export { updateWeather };
