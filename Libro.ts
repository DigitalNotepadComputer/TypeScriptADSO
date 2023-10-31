class Libro {
    constructor(public titulo: string, public autor: string, public numPaginas: number) {}
    
    mostrarInfo() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numPaginas}`);
    }
  }
  
  const libro1 = new Libro('El Gran Gatsby', 'F. Scott Fitzgerald', 250);
  const libro2 = new Libro('Cien Años de Soledad', 'Gabriel García Márquez', 368);
  
  libro1.mostrarInfo();
  libro2.mostrarInfo();
  