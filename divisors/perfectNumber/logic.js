{
  // Dado un número, determinar si es perfecto
  // (la suma de los divisores es igual a sí mismo)
  function isPerfect(number) {
    let acu = 0;
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        acu += i;
      }
    }
    return number == acu;
  }

  let number = 28;
  let answer = "NO";
  if (isPerfect(number)) {
    answer = "SI";
  }
  console.log("El numero" + " " + number + " " + answer
    + " es perfecto");

  for (let i = 1; i <= 1000; i++) {
    if (isPerfect(i)) {
      console.log(i);
    }
  }

}
