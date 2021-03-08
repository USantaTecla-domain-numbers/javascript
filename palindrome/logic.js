function inverse(number) {
  let result = 0;
  do {
    result = result * 10 + number % 10;
    number = parseInt(number / 10);
  } while (number > 0);
  return result;
}

function isPalindrome(number) {
  return number == inverse(number);
}

let number = +prompt("Introduce un número: ");
let answer = "NO";
if (isPalindrome(number)) {
  answer = "SI";
}
console.log("El numero " + number + " " + answer + " es palidromo");
