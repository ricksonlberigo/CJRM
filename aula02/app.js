// ==================================== Construindo um Relógio Digital - Aula 02-02
const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `
  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)

// =====================================================================================

// ==================================== Conhecendo a date-fns - Aula 02-03
// date-fns é uma lib em JavaScript para que possamos trabalhar com datas de forma mais rápida e eficiente, para chamar ela devemos usar o objeto dateFns. e a função
{
  // Verificando se a data é igual a hoje
  const present = new Date('September 13 2023 9:04:00')
  console.log(dateFns.isToday(present))
}

// Formatando a data e hora no padrão brasileiro
const present = new Date()
console.log(dateFns.format(present, 'DD/MM/YYYY hh:mm:ss'))

// Pegando a diferença de datas, e retornando uma string
const past = new Date('April 7 2023 17:00:00')
console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))
// =====================================================================================
