class MyMath {
  static getFiboNum(n) {
    // вычисление N-го числа в ряду Фибоначчи
    const fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
  }

  static getFiboNumbers(n) {
    // вычисление всех чисел в ряду Фибоначчи до числа N
    const fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo.slice(0, n);
  }

  static getPrimeNum(n) {
    // вычисление N-го просто числа (по индексу)
    const primes = [];
    for (let i = 2; primes.length < n; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes[n - 1];
  }

  static getPrimeNumbers(n) {
    // вычисление всех простых чисел до числа N
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  static isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

console.log(MyMath.getFiboNum(7)); // 13
console.log(MyMath.getFiboNumbers(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(MyMath.getPrimeNum(7)); // 17
console.log(MyMath.getPrimeNumbers(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
