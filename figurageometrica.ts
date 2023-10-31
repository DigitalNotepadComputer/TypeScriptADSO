abstract class FiguraGeometrica {
    constructor(public tipo: string) {}
  
    abstract area(): number;
  }
  
  class Triangulo extends FiguraGeometrica {
    constructor(public base: number, public altura: number) {
      super('Triángulo');
    }
  
    area() {
      return 0.5 * this.base * this.altura;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    constructor(public radio: number) {
      super('Círculo');
    }
  
    area() {
      return Math.PI * this.radio ** 2;
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    constructor(public lado: number) {
      super('Cuadrado');
    }
  
    area() {
      return this.lado ** 2;
    }
  }
  
  const triangulo = new Triangulo(5, 8);
  const circulo = new Circulo(4);
  const cuadrado = new Cuadrado(6);
  
  console.log(`Área del ${triangulo.tipo}: ${triangulo.area()}`);
  console.log(`Área del ${circulo.tipo}: ${circulo.area()}`);
  console.log(`Área del ${cuadrado.tipo}: ${cuadrado.area()}`);
  