// эта функция выдет примерный результат, нет 100% точности результата.
//Поэтому результат может отличаться от размеров, уазнных в документации браузера
const maxLocalSize = () => {
  let i = 0;
  let testKey = "testValue";
  try {
    for (i = 0; ; i++) {
      localStorage.setItem(testKey + i, new Array(1024 * 1024).join("a"));
    }
  } catch (e) {
    localStorage.clear();
    return i;
  }
};

console.log(maxLocalSize() + " мегабайт доступно в вашем localStorage");
