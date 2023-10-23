const getWordForm = (number, forms) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  let wordForm;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    wordForm = forms[2];
  } else {
    switch (lastDigit) {
      case 1:
        wordForm = forms[0];
        break;
      case 2:
      case 3:
      case 4:
        wordForm = forms[1];
        break;
      default:
        wordForm = forms[2];
    }
  }
  return `${number} ${wordForm}`;
};

module.exports = getWordForm; // экспортирвоание через module. Но можно было бы использовать обычный экспорт

console.log(getWordForm(12, ["сообщение", "сообщения", "сообщений"])); // "сообщений"
console.log(getWordForm(1, ["сообщение", "сообщения", "сообщений"])); // "сообщение"
console.log(getWordForm(3, ["сообщение", "сообщения", "сообщений"])); // "сообщения"
