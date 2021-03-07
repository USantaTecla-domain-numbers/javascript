let dividend = +prompt("Dame el dividendo: ");
let divisor = +prompt("Dame el divisor: ");
let remainder = dividend % divisor;
let integer = dividend - remainder;
let quotient = integer / divisor;
alert(dividend + " / " + divisor + " = " + quotient + " y sobran " + remainder);
