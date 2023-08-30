Funções que eu não conhecia
reverse() - inverte a ordem do array
Exemplo:

<script>
  var myArray = ["one", "two", "three"];
  myArray.reverse();

  console.log(myArray); // ['three', 'two', 'one']
</script>

Essa função muta o array, significa que ela vai mudar o array original.

shift() - remove o primeiro item do array e retorna ele, e ele muda o array original

<script>
  var minhaLista = ["anjo", "casa", "mandarim", "medico"];

  console.log("minhaLista antes: " + minhaLista);
  // minhaList antes: ['anjo', 'casa', 'mandarim', 'medico']
  var shifted = minhaLista.shift();

  console.log("minhaLista depois: " + minhaLista);
  // minhaList depois: ['casa', 'mandarim', 'medico']
  console.log("Elemento removido: " + shifted);
  // Elemento removido: anjo
</script>

find() - retorna o valor do primeiro elemento que retornar true no callback
Diferente do findIndex, aqui ele não retorna apenas o index, mas sim retorna o valor inteiro
Exemplos:

<script>
  const inventory = [
    { name: "maças", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  const result = inventory.find((fruit) => fruit.name === "cherries");

  console.log(result); // { name: 'cherries', quantity: 5 }
</script>
