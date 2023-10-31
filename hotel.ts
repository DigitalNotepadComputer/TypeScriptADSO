class Hotel {
    constructor(public nombre: string, public ubicacion: string) {}
  }
  
  class Habitacion {
    constructor(public numeroHabitacion: number, public precio: number, public estado: string) {}
  
    reservar() {
      this.estado = 'Reservada';
    }
  
    liberar() {
      this.estado = 'Disponible';
    }
  }
  
  const hotel1 = new Hotel('Hotel A', 'Ciudad X');
  const habitacion1 = new Habitacion(101, 150, 'Disponible');
  const habitacion2 = new Habitacion(102, 200, 'Disponible');
  
  habitacion1.reservar();
  habitacion2.liberar();
  
  console.log(`Estado de la habitación ${habitacion1.numeroHabitacion}: ${habitacion1.estado}`);
  console.log(`Estado de la habitación ${habitacion2.numeroHabitacion}: ${habitacion2.estado}`);
  