class Tarea {
    constructor(public descripcion: string, public completada: boolean = false) {}
  
    marcarComoCompletada() {
      this.completada = true;
    }
  }
  
  const tarea1 = new Tarea('Hacer la compra');
  const tarea2 = new Tarea('Preparar la presentación', true);
  
  tarea1.marcarComoCompletada();
  
  console.log(`Tarea 1: ${tarea1.descripcion} (Completada: ${tarea1.completada ? 'Sí' : 'No'})`);
  console.log(`Tarea 2: ${tarea2.descripcion} (Completada: ${tarea2.completada ? 'Sí' : 'No'})`);
  