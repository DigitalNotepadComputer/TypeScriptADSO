class Fruta {
    constructor(public nombre: string, public color: string, public sabor: string) {}
  
    obtenerInformacion() {
      console.log(`Fruta: ${this.nombre}, Color: ${this.color}, Sabor: ${this.sabor}`);
    }
  }
  
  const fruta1 = new Fruta('Manzana', 'Roja', 'Dulce');
  const fruta2 = new Fruta('Naranja', 'Naranja', 'Ácida');
  
  fruta1.obtenerInformacion();
  fruta2.obtenerInformacion();
  