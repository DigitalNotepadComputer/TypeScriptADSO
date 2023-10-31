class Cita {
    constructor(
      public paciente: string,
      public doctor: string,
      public fecha: string,
      public hora: string,
      public motivo: string
    ) {}
  }
  
  class AgendaCitas {
    private citas: Cita[] = [];
  
    agregarCita(cita: Cita) {
      this.citas.push(cita);
    }
  
    eliminarCita(cita: Cita) {
      const index = this.citas.indexOf(cita);
      if (index !== -1) {
        this.citas.splice(index, 1);
      }
    }
  
    buscarCita(doctor: string): Cita[] {
      return this.citas.filter((cita) => cita.doctor === doctor);
    }
  
    citasHoy(): Cita[] {
      const today = new Date().toISOString().split('T')[0];
      return this.citas.filter((cita) => cita.fecha === today);
    }
  
    citasFecha(fecha: string): Cita[] {
      return this.citas.filter((cita) => cita.fecha === fecha);
    }
  }
  
  // Ejemplo de uso:
  const agenda = new AgendaCitas();
  const cita1 = new Cita("Juan Perez", "Dr. Smith", "2023-10-31", "10:00 AM", "Consulta general");
  const cita2 = new Cita("Maria Rodriguez", "Dr. Johnson", "2023-11-01", "2:30 PM", "Examen de sangre");
  agenda.agregarCita(cita1);
  agenda.agregarCita(cita2);
  console.log(agenda.citasHoy());
  console.log(agenda.buscarCita("Dr. Smith"));
  
  class Producto {
    constructor(public nombre: string, public precio: number) {}
  }
  
  class CajaRegistradora {
    private productos: Producto[] = [];
    private total: number = 0;
  
    cobrar(producto: Producto) {
      this.productos.push(producto);
      this.total += producto.precio;
    }
  
    imprimirTicket() {
      console.log("Productos:");
      this.productos.forEach((producto) => {
        console.log(`${producto.nombre}: $${producto.precio}`);
      });
      console.log(`Total: $${this.total}`);
    }
  }
  
  // Ejemplo de uso:
  const caja = new CajaRegistradora();
  const producto1 = new Producto("Camiseta", 20);
  const producto2 = new Producto("Pantalón", 30);
  caja.cobrar(producto1);
  caja.cobrar(producto2);
  caja.imprimirTicket();
  