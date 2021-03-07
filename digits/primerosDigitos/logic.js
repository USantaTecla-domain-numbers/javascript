let number = +prompt("Dame un número entero");
let ones = number % 10
alert("Unidades: " + ones + "\n")
number = number / 10
let tens = number % 10
alert("Decenas: " + tens + "\n")
number = number / 10
let hundreds = number % 10
alert("Centenas: " + hundreds + "\n")
