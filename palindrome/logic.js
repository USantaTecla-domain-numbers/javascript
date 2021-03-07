{
  //  Dado un número, determinar si es palíndromo 
  function inverse(number) {
    let inverso = 0;
    do {
      inverso = inverso * 10 + number % 10;
      number = parseInt(number / 10);
    } while (number > 0);
    return inverso;
  }

  function isPalindrome(number) {
    return number == inverse(number);
  }

  let number = 9876789;
  let answer = "NO";
  if (isPalindrome(number)) {
    answer = "SI";
  }
  console.log("El numero " + number + " " + answer + " es palidromo");
}