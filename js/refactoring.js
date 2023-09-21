const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]',
)
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const getInformationByAPI = async inputValue => {
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)
  const timeIcon = `<img src="../src/icons/${WeatherIcon}.svg" />`

  return [{ Key, LocalizedName, WeatherText, Temperature, IsDayTime, timeIcon }]
}

const showCardWeather = () => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.add('d-block')
  }
}

const isDayOrNight = IsDayTime => {
  if (!IsDayTime) {
    timeImg.src = '../src/night.svg'
    return
  }
  return (timeImg.src = '../src/day.svg')
}

const addInformationIntoDOM = (
  timeIcon,
  LocalizedName,
  WeatherText,
  Temperature,
) => {
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature
}

const addCardIntoDOM = async inputValue => {
  const getInformationCityByAPI = await getInformationByAPI(inputValue)
  const [{ LocalizedName, WeatherText, Temperature, IsDayTime, timeIcon }] =
    getInformationCityByAPI

  addInformationIntoDOM(
    timeIcon,
    LocalizedName,
    WeatherText,
    Temperature.Metric.Value,
  )

  showCardWeather()
  isDayOrNight(IsDayTime)
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()
  const inputValue = event.target.city.value

  addCardIntoDOM(inputValue)

  cityForm.reset()
})
