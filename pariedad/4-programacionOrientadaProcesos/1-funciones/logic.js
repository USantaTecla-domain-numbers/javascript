let number = +prompt("Escribe un número? ")
alert("El " + number + " es " + (number % 2 == 0 ? "par" : "impar"))


{
  // Mostrar si un número es par o impar
  

  function isEven(value) {
    return value % 2 == 0;
  }

  {
    // sentencia if simple
    let number = 18;
    let answer = "NO";
    if (isEven(number)) {
      answer = "SI";
    }
    console.log("El número " + number + " " + answer + " es par.");
  }

  {
    // sentencia if compuesta
    let number = 18;
    let answer;
    if (isEven(number)) {
      answer = "SI";
    } else {
      answer = "NO";
    }
    console.log("El número " + number + " " + answer + " es par.");
  }

  {
    // código repetido
    let number = 18;
    if (isEven(number)) {
      console.log("El número " + number + " SI es par.");
    } else {
      console.log("El número " + number + " NO es par.");
    }
  }

  {
    // operador alternativo ? :, devuelve un valor, no controla el flujo!!!
    let number = 18;
    console.log("El número " + number + " " + (isEven(number) ? "SI" : "NO") + " es par.");
  }
}
