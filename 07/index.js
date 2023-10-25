const first = () => {
  return new Promise((resolve, reject) => {
    console.log("первая функция запущена");
    setTimeout(() => {
      console.log("первая функция завершена");
      resolve();
    }, 3000);
  });
};
const second = () => {
  return new Promise((resolve, reject) => {
    console.log("вторая функция запущена");
    setTimeout(() => {
      console.log("вторая функция завершена");
      resolve();
    }, 1000);
  });
};
const thirt = () => {
  return new Promise((resolve, reject) => {
    console.log("третья функция запущена");
    setTimeout(() => {
      console.log("третья функция завершена");
      resolve();
    }, 0);
  });
};
const funks = [first, second, thirt];

const startFunks = async () => {
  for (let f of funks) {
    await f();
  }
};

 

startFunks()




 