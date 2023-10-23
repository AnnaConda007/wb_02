const checkString = "А роза упала на лапу азора";

// решение через split
const checkPaliandrom_split = (string) => {
  const orignString = string.replace(/\s+/g, "").toLowerCase(); // Удаление всех пробелов и приведение символов к нижнему регистру
  const reverseString = orignString.split("").reverse().join(""); // Преобразование строки в массив, переворот элементов массива и объединение обратно в строку

  const isPaliandrom = orignString === reverseString;
  const message = isPaliandrom
    ? `эта строка является палиндромом`
    : `эта строка не является палиндромом`;

  console.log(message);
};

// решение через Array.from
const checkPaliandrom_ArrayFrom = (string) => {
  const orignString = string.replace(/\s+/g, "").toLowerCase();
  const reverseString = Array.from(orignString).reverse().join("");

  const isPaliandrom = orignString === reverseString;
  const message = isPaliandrom
    ? `Эта строка является палиндромом`
    : `Эта строка не является палиндромом`;

  console.log(message);
};

//решение через цикл
const checkPaliandrom_cycle = (string) => {
  const orignString = string.replace(/\s+/g, "").toLowerCase();
  let isPaliandrom = true;
  for (let i = 0, j = orignString.length - 1; i < j; i++, j--) {
    // задается инкремент для первых и последних букв
    if (orignString[i] !== orignString[j]) {
      // сравнение букв
      isPaliandrom = false; // если буквы хотя бы раз не совпали , isPaliandrom возвращает false, функция прекращает выполнение
      break;
    }
  }
  const message = isPaliandrom
    ? `Эта строка является палиндромом`
    : `Эта строка не является палиндромом`;

  console.log(message);
};

checkPaliandrom_cycle(checkString);
