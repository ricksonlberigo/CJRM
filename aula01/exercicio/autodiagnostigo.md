Tive dúvidas em todos os exercícios, menos o primeiro o exercício

02

- Declare uma const que armazena seu primeiro nome com todas as letras
  minúsculas;
- Utilizando (também) o spread operator, exiba no console o seu nome com
  apenas a primeira letra maiúscula.

<script>
  // Para fazer o exercício é simples, é apenas criar um array, onde o primeiro índice da string vai possui o primeira letra maiúscula, logo em seguida um spread operator e como vai transformar a string em array, podemos utilizar o slice(1), onde vai cortar a primeira letra e ir até o final da string, feito isso vai gerar um array e para transformar em string novamente podemos utilizar o método join()
  const myName = 'rickson'
  console.log([myName[0].toUpperCase(), ...myName.slice(1)].join(''))
  // Obs: o spread operator não pode ser concatenado, então para ficar digamos que na mesma situação de uma concatenação, é necessário envolver em um array, assim conseguimos concatenar
</script>
