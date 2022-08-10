/*
  Implemente uma função que receba um número inteiro positivo e
  Retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao
  número passado.
*/

function divisiveisPorTresECinco(numero) {
  if(numero <= 0 || numero == undefined) {
    throw new Error("Digitar um número maior que 0 ou que seja válido");
  }

  let total = 0;
  for (let index = 1; index < numero; index++) {
    (index % 3 == 0 || index % 5 == 0) ? total += index : '';
  }

  return total;
}

console.log(divisiveisPorTresECinco(6));



