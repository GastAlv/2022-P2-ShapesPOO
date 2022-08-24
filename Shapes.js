class Shape {
    area() {
        return 0;
    }
  
    perimeter() {
      return 0;
    }

    info(){
        // Crear un método que retorne: Figura: "figura" - Area: "area" - Perimeter: "perimeter" 
        console.log(`Figura: ${this.toString()}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`) 
    }
  
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

    draw(){
        console.log(`Estoy dibujando un: ${this.toString()}`)
    }
}
  
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}
  
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}
  
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

class Parallelogram extends Shape {
    constructor(b,h) {
        super();
        this.base = b;
        this.height = h;
    }
    
    area() {
        return this.base * this.height;

    }
    perimeter() {
        return (2 * (this.base + this.height)) 
    }

}

class Triangulo extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    area() {
        const sp = (this.a + this.b + this.c) / 2
        return Math.sqrt(sp*(sp - this.a) * (sp - this.b) * (sp - this.c))

    }

    perimeter() {
        return this.a + this.b + this.c
    }
}

// class Kite extends 





export {Circle, Rectangle, Square, Triangle, Parallelogram, Triangulo};



