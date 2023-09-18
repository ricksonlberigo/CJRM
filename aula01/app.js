// ==================================== JavaScript Assíncrono - Aula 01-02

// O que é uma operação assíncrona? É um código que inicia um processo agora e finaliza esse processo posteriormente.
// O JavaScript é uma linguagem síncrona, executa uma instrução por vez, de cima para baixo. Resumindo o JavaScript é uma linguagem single Thread significa "fio", resumidamente JavaScript é uma linguagem de um único fio

// =====================================================================================

// ==================================== Código assíncrono na prática - Aula 01-03

console.log(1)
console.log(2)

setTimeout(() => {
  console.log('Função de callback executada')
}, 2000)

console.log(3)
console.log(4)

// =====================================================================================

// ==================================== O que são requests HTTP - Aula 01-04

/**
O que são requests HTTP? São requisições que fazemos para a nossa API ou servidor com os protocolos de redes HTTP.
Por que precisamos deles? Para acessar os endpoints da API ou servidor e obtermos acesso a tais informações.

O que é uma API? Application Programming Interface (Interface de programação de aplicações), é desenvolvida para que uma aplicação use funcionalidades de outro sistema.
API é um ferramenta que um sistema se comunique com outro sistema. 
Dentro das nossas aplicações, informações que estão armazenadas em um outro lugar precisarão ser exibidas, e para obter essas informações a gente faz requisições HTTP para essa API, a requisição é um pedido uma solicitação de informações que a nossa API armazena através de protocolos HTTP - Hypertext Transfer Protocol (Protocolo de transferência de hiper texto).
Quando a gente faz request HTTP para uma API ou banco de dados chamamos de Endpoint, é uma URL que o servidor ou uma API armazena dados que vão ser retornados para o requisitante.
*/

// =====================================================================================
