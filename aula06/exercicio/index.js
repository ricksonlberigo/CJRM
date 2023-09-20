const form = document.querySelector('form')
const GIFSContainer = document.querySelector('.out')

const APIKey = 'vowkw7Bw40IWsSKUiSmHuxWeoV7j0vWY'

const getGIPHYApiUrl = GIFName =>
  `https://api.giphy.com/v1/gifs/search?apikey=${APIKey}&limit=1&q=${GIFName}`

const generateGIFImg = (downsizedGIFUrl, GIFTitle) => {
  const img = document.createElement('img')

  img.setAttribute('src', downsizedGIFUrl)
  img.setAttribute('alt', GIFTitle)

  return img
}

const fetchGIF = async inputValue => {
  try {
    const GIPHYApiUrl = getGIPHYApiUrl(inputValue)
    const response = await fetch(GIPHYApiUrl)

    if (!response.ok) throw new Error('Não foi possível obter os dados!')

    return response.json()
  } catch (error) {
    alert(`Erro: ${error.message}`)
  }
}

const insertGIFIntoDOM = async inputValue => {
  const GIFData = await fetchGIF(inputValue)

  if (GIFData) {
    const downsizedGIFUrl = GIFData.data[0].images.downsized.url
    const GIFTitle = GIFData.data[0].title
    const img = generateGIFImg(downsizedGIFUrl, GIFTitle)

    GIFSContainer.insertAdjacentElement('afterbegin', img)

    form.reset()
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.search.value

  insertGIFIntoDOM(inputValue)
})
