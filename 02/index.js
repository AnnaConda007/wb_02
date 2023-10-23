const num = 28;

const isWeirdNumber = (number) => {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    // цикл для числа, деленного на 2. Так как  делитель не может быть больше половины числа
    if (number % i === 0) {
      sum += i; // если число делится без остатка то оно суммируется
    }
    if (sum > number) break;
  }
  const isWeird = sum === number;
  const message = isWeird
    ? "это число является странным"
    : "это число не является странным";
  console.log(message);
};

isWeirdNumber(268); // не странное число
isWeirdNumber(28); // странное число
