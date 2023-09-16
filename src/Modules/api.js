class weather {
  constructor(city, temp, condition, img, uv) {
    this.city = city;
    this.temp = temp;
    this.condition = condition;
    this.img = img;
    this.uv = uv;
  }
}

const weatherData = async (city) => {
  if (city == '') {
    console.log('Please Enter a City');
  }
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5cbb10eadd1347dabf911239231609&q=${city}`,
      { mode: 'cors' }
    );
    const cityData = await response.json();
    let temp = cityData.current.temp_f;
    let condition = cityData.current.condition.text;
    let img = cityData.current.condition.icon;
    let uv = cityData.current.uv;
    const newWeather = new weather(city, temp, condition, img, uv);
    console.log(newWeather);
    return newWeather;
  } catch (error) {
    console.log(error);
  }
};

export { weatherData };
