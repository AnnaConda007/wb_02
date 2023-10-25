const jsonStr = '{"name": "Anton", "age": 25}';

const stringToJson = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Введенные даннные не являются строкой");
  }

  let jsonObj;
  try {
    jsonObj = JSON.parse(str);
  } catch (error) {
    throw new Error("Строка не является валидным JSON");
  }

  return jsonObj;
};

const jsonObj = stringToJson(jsonStr);
console.log(jsonObj); //{ name: 'Anton', age: 25 }

//фактически это не преобразование строки в json, а преобразование строкового json  в объект js
