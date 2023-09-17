import { weatherData } from './api';
const conditionDOM = document.querySelector('#condition');
const conditionImgDOM = document.querySelector('#img');
const cityDOM = document.querySelector('#city');
const regionDOM = document.querySelector('#region');
const tempDOM = document.querySelector('#temp');
const feelsLikeDOM = document.querySelector('#feels-like');
const uvDOM = document.querySelector('#uv');
const humidityDOM = document.querySelector('#humidity');
const searchBtn = document.querySelector('#btn');
const searchInput = document.querySelector('#search-input');

const updateWeather = async (place) => {
  const weather = await weatherData(place);
  const cityUpper = weather.city.toUpperCase();
  const regionUpper = weather.region.toUpperCase();
  conditionDOM.textContent = `${weather.condition}`;
  conditionImgDOM.src = `${weather.img}`;
  cityDOM.textContent = `${cityUpper},`;
  regionDOM.textContent = `${regionUpper}`;
  tempDOM.textContent = `${Math.round(weather.temp)}\u00B0`;
  feelsLikeDOM.textContent = `${Math.round(weather.feelsLike)}\u00B0`;
  uvDOM.textContent = `${weather.uv}`;
  humidityDOM.textContent = `${weather.humidity}%`;
};

const addEvents = () => {
  searchBtn.addEventListener('click', () => {
    updateWeather(searchInput.value);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (searchInput.value == '') {
        alert('Please enter a value');
        return;
      }
      updateWeather(searchInput.value);
    }
  });
};

export { updateWeather, addEvents };
