// решение через классы ---------------------------------------------------------------------------
class Book {
  constructor(title, author, year) {
    (this.title = title), (this.author = author), (this.year = year);
  }
  getBookData(key) {
    console.log(`вы запросили  ${key} для ${this.title} :  ${this[key]}`);
  }
  changeBookData(key, newValue) {
    this[key] = newValue;
    console.log(
      ` 'вы изменили значение ${key} для ${this.title}, новое значение : ${this[key]}`
    );
  }
}
const HarryPotter = new Book("Гарри Поттер", "Дж. Роулинг", "1997");
HarryPotter.getBookData("title"); //Гарри Поттер

const textbook = new Book("Учебник", "Некий ученый", "2007");
textbook.changeBookData("author", "З. Фрейд"); // З. Фрейд



// решение через обычный метод -----------------------------------------------------------------------
const book = {
  title: "Гарри Поттер и философский камень",
  author: "Дж. Роулинг",
  year: "1997",
  getBookData(key) {
    console.log(this[key]);
  },
  changeBookData(key, newValue) {
    this[key] = newValue;
    console.log(this[key]);
  },
};

//book.getBookData("title"); //Гарри Поттер и философский камень
//book.changeBookData("title", "НЕ Гарри Поттер"); // НЕ Гарри Поттер
