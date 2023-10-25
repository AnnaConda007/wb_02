class Shape {
  // базовый класс
  area() {
    throw new Error("метод area не объявлен при наследовании");
  }

  perimeter() {
    throw new Error("метод perimeter не объявлен при наследовании");
  }
}

class Rectangle extends Shape {
  // подкласс прямоугольник
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  // подкласс круг
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  // подкласс триугольник
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }
  area() {
    const p = this.perimeter() / 2; // получение периметра
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // формула Герона
  }
  perimeter() {
    return this.a + this.b + this.c;
  }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.area());
console.log(rectangle.perimeter());

const circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());

const triangle = new Triangle(3, 4, 5);
console.log(triangle.area());
console.log(triangle.perimeter());
