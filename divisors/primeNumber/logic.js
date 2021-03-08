// primo: solo divisible por sí mismo y la unidad
    // la suma de los primos en los 10 primeros números 
    // la suma de los 10 primeros números primos
    {
      function prime1(number) {
        let isPrime;
        if (number == 1) {
          isPrime = true;
        } else {
          let next = 2;
          while (number % next != 0) {
            next++;
          }
          isPrime = number == next;
        }
        return isPrime;
      }

      function prime2(number) {
        if (number == 1) {
          return true;
        }
        let next = 2;
        while (number % next != 0) {
          next++;
        }
        return number == next;
      }

      function prime3(number) {
        if (number == 1) {
          return true;
        }
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
        return true;
      }

      function prime4(number) {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
        return true;
      }

      function prime(number){
        return prime4(number);
      }

      {
        let sumPrimes = 0;
        for (let i = 1; i <= 10; i++) {
          if (prime(i)) {
            sumPrimes += i;
          }
        }
        console.log("Suma de primos en los 10 primeros números:" + sumPrimes);
      }

      {
        let sumPrimes = 0;
        let primes = 0;
        let magnitude = 1;
        do {
          if (prime(magnitude)) {
            primes++;
            sumPrimes += magnitude;
          }
          magnitude++;
        } while (primes < 10);
        console.log("Suma de los 10 primeros primos:" + sumPrimes);
      }

      {
        let sumPrimes = 0;
        let primes = 0;
        let magnitude = 1;
        do {
          while (!prime(magnitude)) {
            magnitude++;
          }
          primes++;
          sumPrimes += magnitude;
          magnitude++;
        } while (primes < 10);
        console.log("Suma de los 10 primeros primos:" + sumPrimes);
      }

      {
        let sumPrimes = 0;
        let magnitude = 1;
        for (let primes = 0; primes < 10; primes++) {
          while (!prime(magnitude)) {
            magnitude++;
          }
          sumPrimes += magnitude;
          magnitude++;
        }
        console.log("Suma de los 10 primeros primos:" + sumPrimes);
      }

    }