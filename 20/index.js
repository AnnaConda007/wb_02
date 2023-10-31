const maxLocalSize = () => {
  let i = 0;
  let testKey = "testSize";
  try {
    for (i = 0; ; i++) {
      localStorage.setItem(testKey + i, new Array(1024 * 1024).join("a"));
    }
  } catch (e) {
    for (let j = 0; j < i; j++) {
      localStorage.removeItem(testKey + j);
    }
    return i;
  }
};

const maxLocal = maxLocalSize();
const localStorigSize = maxLocal * 1024 * 1024 * 8;
const allLocalVaue = [];
for (let i = 0; i < localStorage.length; i++) {
  const string = new TextEncoder().encode(
    localStorage.getItem(localStorage.key(i))
  );
  const stringWeight = string.reduce((acc, curent) => acc + curent, 0);
  allLocalVaue[i] = stringWeight;
}
const totalWeight = allLocalVaue.reduce((acc, curent) => acc + curent, 0);

const remain = (localStorigSize - totalWeight) / 8 / 1024 / 1024;
console.log(
  "в LocalStorige доступно",
  Math.floor(remain * 10) / 10,
  "мегабайт из ",
  maxLocal
);
