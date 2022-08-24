import {Circle, Parallelogram, Rectangle, Square, Triangle, Triangulo} from './Shapes.js';

const triangle = new Triangle(10, 5);
const triangle2 = new Triangle(9, 19);
console.log(triangle.area());
console.log(triangle2.area());

const square = new Square(10);
console.log(`Area: ${square.area()} - Perimeter: ${square.perimeter()}`);

const rectangle = new Rectangle(10, 10);
console.log(`Area: ${rectangle.area()} - Perimeter: ${rectangle.perimeter()}`);

const circle = new Circle(10);
// console.log(circle.perimeter());

const paralelogramo = new Parallelogram(10, 15);
paralelogramo.info();
paralelogramo.draw();

const trianguloEscaleno = new Triangulo(3,4,5)

trianguloEscaleno.info();
trianguloEscaleno.draw();

