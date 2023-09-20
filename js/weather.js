const APIKey = '735SJLAiJeJLNAhK9l20E1hG1aDujfnd'
const getCityURL = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

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
        const cityWeatherURL = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(cityWeatherURL)

        if(!response.ok) throw new Error('Não foi possível obter os dados.')

        const [cityWeatherData] = await response.json()
        debugger
        return cityWeatherData
    } catch({name, message}) {
        alert(`${name}: ${message}`)
    }
}

getCityWeather('São Paulo')