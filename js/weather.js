const APIKey = '735SJLAiJeJLNAhK9l20E1hG1aDujfnd';

const getCityURL = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getCityData = async cityName => {
    try {
        const cityUrl = getCityURL(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok) throw new Error('Não foi possível obter os dados.')

        const [cityData] = await response.json()
        return cityData
    } catch({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityWeather = async cityName => {
    try {
        const {Key} = await getCityData(cityName)
        const cityWeatherURL = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
        const response = await fetch(cityWeatherURL)

        if(!response.ok) throw new Error('Não foi possível obter os dados.')

        const [cityWeatherData] = await response.json()
        return cityWeatherData
    } catch({name, message}) {
        alert(`${name}: ${message}`)
    }
}

getCityWeather('São Paulo')

/*
const requestsInAPI = async (dataURL) => {
  try {
    const url = dataURL;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Não foi possível obter os dados.');

    const [data] = await response.json();
    console.log(data);
    return data
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
};

const getCityData = async cityName => {
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;
  return requestsInAPI(url); 
};

const getCityWeather = async cityName => {
  const { Key } = await getCityData(cityName);
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`;
  return requestsInAPI(url); 
};

getCityWeather('São Paulo')
*/