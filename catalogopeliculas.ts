class Pelicula {
    constructor(public titulo: string, public duracion: number, public director: string) {}
  }
  
  class CatalogoPeliculas {
    private peliculas: Pelicula[] = [];
  
    agregarPelicula(pelicula: Pelicula) {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTitulo(titulo: string): Pelicula[] {
      return this.peliculas.filter((pelicula) => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
  
    filtrarPorDirector(director: string): Pelicula[] {
      return this.peliculas.filter((pelicula) => pelicula.director.toLowerCase() === director.toLowerCase());
    }
  }
  
  const catalogo = new CatalogoPeliculas();
  const pelicula1 = new Pelicula('Pelicula 1', 120, 'Director A');
  const pelicula2 = new Pelicula('Pelicula 2', 90, 'Director B');
  
  catalogo.agregarPelicula(pelicula1);
  catalogo.agregarPelicula(pelicula2);
  
  const peliculasDirectorA = catalogo.filtrarPorDirector('Director A');
  console.log('Peliculas del Director A:', peliculasDirectorA);
  