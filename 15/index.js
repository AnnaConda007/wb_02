const first = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("результат первой функции");
    }, 2000);
  });
};
const second = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("результат второй функции");
    }, 1000);
  });
};
const thirt = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("результат третьей функции");
    }, 2000);
  });
};

const collectResults = async () => {
  const firstRes = await first();
  const secondRes = await second();
  const thirtRes = await thirt();
  return { firstRes, secondRes, thirtRes };
};

collectResults().then((allRes) => {
  console.log(allRes);
});
