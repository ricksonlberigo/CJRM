// ==================================== Fazendo requests HTTP - Aula 02-03
const request = new XMLHttpRequest() // Cria a requisição

// Colocando um eventListener para cada vez que o readystatechange mudar, quando o readyState for igual a 4 que significa que está pronto a requisição, imprmir no console.log o resultado de todos os todos com o responseText
request.addEventListener('readystatechange', () => {
    // Estados do request são 5 ao total
    /**
        0	UNSENT	Client has been created. open() not called yet.
        1	OPENED	open() has been called.
        2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        3	LOADING	Downloading; responseText holds partial data.
        4	DONE	The operation is complete.
    */
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos') // Abre uma requisição com um método HTTP e a URL que queremos fazer o endpoint
request.send() // Enviamos dados, como na abertura da requisição colocamos o método GET, não vamos enviar nada
// =====================================================================================

// ==================================== Status de respostas HTTP - Aula 02-04
{
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todoss')
request.send()
}

// =====================================================================================
