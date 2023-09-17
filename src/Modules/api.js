class weather {
  constructor(city, region, temp, condition, img, uv, feelsLike, humidity) {
    this.city = city;
    this.region = region;
    this.temp = temp;
    this.condition = condition;
    this.img = img;
    this.uv = uv;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
  }
}

const weatherDataC = async (city) => {
  if (city == '') {
    console.log('Please Enter a City');
  }
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5cbb10eadd1347dabf911239231609&q=${city}`,
    { mode: 'cors' }
  );
  try {
    const cityData = await response.json();
    let name = cityData.location.name;
    let region = cityData.location.region;
    let temp = cityData.current.temp_c;
    let condition = cityData.current.condition.text;
    let img = cityData.current.condition.icon;
    let uv = cityData.current.uv;
    let feelsLike = cityData.current.feelslike_c;
    let humidity = cityData.current.humidity;
    const newWeather = new weather(
      name,
      region,
      temp,
      condition,
      img,
      uv,
      feelsLike,
      humidity
    );
    return newWeather;
  } catch (error) {
    console.log(error);
  }
};

const weatherDataF = async (city) => {
  if (city == '') {
    console.log('Please Enter a City');
  }
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5cbb10eadd1347dabf911239231609&q=${city}`,
      { mode: 'cors' }
    );
    const cityData = await response.json();
    let name = cityData.location.name;
    let region = cityData.location.region;
    let temp = cityData.current.temp_f;
    let condition = cityData.current.condition.text;
    let img = cityData.current.condition.icon;
    let uv = cityData.current.uv;
    let feelsLike = cityData.current.feelslike_f;
    let humidity = cityData.current.humidity;
    const newWeather = new weather(
      name,
      region,
      temp,
      condition,
      img,
      uv,
      feelsLike,
      humidity
    );
    return newWeather;
  } catch (error) {
    console.log(error);
  }
};

export { weatherDataF, weatherDataC };
