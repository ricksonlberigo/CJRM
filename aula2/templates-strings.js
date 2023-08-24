const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
const postMessage =
  'O post "' +
  postTitle +
  '", do ' +
  postAuthor +
  ', tem ' +
  postComments +
  ' comentários.'

// usando template strings
const postMessageTemplate = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
console.log(postMessageTemplate)

// criando templates HTML
