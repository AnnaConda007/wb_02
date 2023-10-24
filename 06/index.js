const data = [
  { name: "John", age: 25 },
  { name: "Ann", age: 12 },
  { name: "Maru", age: 25 },
  { name: "Julia", age: 20 },
  { name: "Anton", age: 25 },
];

// ------------------------пузырьковая сортировка
const bubbleSort = (arr) => {
  const sortedData = [...arr];
  for (let j = sortedData.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (sortedData[i].age > sortedData[i + 1].age) {
        let temp = sortedData[i];
        sortedData[i] = sortedData[i + 1];
        sortedData[i + 1] = temp;
      } else if (
        sortedData[i].age === sortedData[i + 1].age &&
        sortedData[i].name > sortedData[i + 1].name
      ) {
        let temp = sortedData[i];
        sortedData[i] = sortedData[i + 1];
        sortedData[i + 1] = temp;
      }
    }
  }
  console.log(sortedData);
  return sortedData;
};
bubbleSort(data);

//--------------------------- решение через метод sort
const newData = data.sort((a, b) => {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name);
  }
  return a.age - b.age;
});
console.log(newData);

/*
оба решения выводят:
[
  { name: 'Ann', age: 12 },
  { name: 'Julia', age: 20 },
  { name: 'Anton', age: 25 },
  { name: 'John', age: 25 },
  { name: 'Maru', age: 25 }
]
*/
