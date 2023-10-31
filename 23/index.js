const checkPassword = (password) => {
  const minPasswordLength = 6;
  const reg = /[!@#$%-_]/;
  
  if (!password) {
    return "вы не ввели пароль";
  } 
  if (password.length < minPasswordLength) {
    return `длина пароля не может быть меньше ${minPasswordLength} символов`;
  } 
  const feedback = [];
  if (!/[a-z]/.test(password)) {
    feedback.push("Добавьте буквы нижнего регистра.");
  }
  if (!/[A-Z]/.test(password)) {
    feedback.push("Добавьте буквы верхнего регистра.");
  }
  if (!reg.test(password)) {
    feedback.push(`Добавьте хотя бы один из следующих символов !@#$%-_.`);
  }

  if (feedback.length > 0) {
    return `пароль слабый. ${feedback.join(' ')}`;
  } else {
    return "ваш пароль принят";
  }
};

console.log(checkPassword()); 
console.log(checkPassword("1234")); 
console.log(checkPassword("123456!")); 
console.log(checkPassword("123456aA!")); 
