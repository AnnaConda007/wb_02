const localStorigSize = 5 * 1024 * 1024 * 8; // 5 мегабайтов переведены в байты

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
console.log( "в LocalStorige доступно" ,Math.floor(remain * 10) / 10, "мегабайт");


