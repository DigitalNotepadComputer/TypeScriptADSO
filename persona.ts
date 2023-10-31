class Persona {
    constructor(public nombre: string, public edad: number, public documentoIdentidad: string) {}
  
    caminar() {
      console.log(`${this.nombre} está caminando.`);
    }
  
    hablar() {
      console.log(`${this.nombre} está hablando.`);
    }
  
    comer() {
      console.log(`${this.nombre} está comiendo.`);
    }
  }
  
  const persona1 = new Persona('Juan', 30, '12345');
  const persona2 = new Persona('Maria', 25, '67890');
  
  persona1.caminar();
  persona2.hablar();
  