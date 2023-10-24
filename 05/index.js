const jsonData = JSON.stringify([
  // создается объект в формате json, согласно условию задания
  { name: "Анна", age: 25 },
  { name: "Иван", age: 30 },
  { name: "Мария", age: 35 },
]);

function jsonToList(jsonStr) {
  const data = JSON.parse(jsonStr); // преобразуем json обратно в объект js
  if (data.length === 0) return; // проверка, на то что полученный масив не пуст

  const head = {
    // создаем объект с первой записью
    userName: data[0].name,
    age: data[0].age,
    next: null,
  };

  let currentNode = head;// ссылка на весь объект с первой записью

  for (let i = 1; i < data.length; i++) {
    currentNode.next = { // перезаписываем свойство next последней записи из null на новый объект
      userName: data[i].name,
      age: data[i].age,
      next: null,
    };
    currentNode = currentNode.next; //  сохраняем в переменную ссылкуна последний объект. Именно на объект , а не на его свойство next 
  }
  return head;
}
const nodeLists = jsonToList(jsonData);

console.log(nodeLists);
