class Electrodomestico {
    constructor(public precio: number, public color: string) {}
  }
  
  class Televisor extends Electrodomestico {}
  
  class Nevera extends Electrodomestico {}
  
  class Lavadora extends Electrodomestico {}
  
  const televisor = new Televisor(500, 'Negro');
  const nevera = new Nevera(800, 'Blanco');
  const lavadora = new Lavadora(600, 'Gris');
  
  console.log(`Televisor - Precio: $${televisor.precio}, Color: ${televisor.color}`);
  console.log(`Nevera - Precio: $${nevera.precio}, Color: ${nevera.color}`);
  console.log(`Lavadora - Precio: $${lavadora.precio}, Color: ${lavadora.color}`);
  