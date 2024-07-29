export class Time {
  IDTiempos: number;
  Temporada: string;
  Piscina: string;
  Prueba: string;
  Estilo: string;
  Tiempo: string;
  Nombre: string;
  Apellido: string;
  Categoria: string;

  constructor() {
    this.IDTiempos = 1;
    this.Estilo = 'braza';
    this.Temporada = 'inv';
    this.Piscina = '50m';
    this.Prueba = '200m';
    this.Tiempo = '2:48:23';
    this.Apellido = '';
    this.Nombre = '';
    this.Categoria = '';
  }
}
