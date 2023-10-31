class Vehiculo {
    constructor(public tipo: string) {}
  
    desplazarse() {
      console.log(`El ${this.tipo} se está desplazando.`);
    }
  }
  
  class Coche extends Vehiculo {}
  
  class Barco extends Vehiculo {}
  
  class Avion extends Vehiculo {}
  
  const coche = new Coche('Coche');
  const barco = new Barco('Barco');
  const avion = new Avion('Avión');
  
  coche.desplazarse();
  barco.desplazarse();
  avion.desplazarse();
  