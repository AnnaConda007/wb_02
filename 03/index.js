class MyMath {
  static generateFibo(max) {
    //формирование числа Фибоначчи
    const fibo = [0, 1];
    for (let i = 0; i <= max; i++) {
      fibo.push(fibo[i] + fibo[i + 1]);
    }
    return fibo;
  }

  static generatePrime(max) {
    // формирование массива простых чисел
    const primes = [];
    for (let i = 2; i <= max; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        // проверяются только те потенциальные делители, квадрат которых меньше делимого
        if (i % j === 0) {
          isPrime = false;
          break; // добавлен break для оптимизации
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }

  static getFuboNum(num, max) {
    //вычисление N-го числа в ряду Фибоначчи
    const fibo = this.generateFibo(max);
    console.log(fibo[num]);
  }
  static getAllFibo(num, max) {
    //вычисление всех чисел в ряду Фибоначчи до числа N
    const fibo = this.generateFibo(max);
    const slisedFibo = fibo.slice(0, num - 1);
    console.log(slisedFibo);
  }

  static getPrimeNum(num, max) {
    const primes = this.generatePrime(max);
    console.log(primes[num]);
  }
}

MyMath.getPrimeNum(7, 20);
