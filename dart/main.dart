divisiveisPorTresECinco(int numero) {
  if (numero <= 0) {
    throw new FormatException("Digitar um número maior que 0");
  }

  int total = 0;

  for (var i = 1; i < numero; i++) {
    (i % 3 == 0 || i % 5 == 0) ? total += i : "";
  }

  return total;
}

main() {
  print(divisiveisPorTresECinco(10));
}
