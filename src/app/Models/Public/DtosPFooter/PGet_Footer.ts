export class PGetFooterDto {
  idDatosContacto: number;
  nombre: string;

  dato: string;
  constructor() {
    this.idDatosContacto = 1;
    this.dato = '';
    this.nombre = '';
  }
}
