export class F009GetCuotasDto {
  IdCuota: number;
  Nombre: string;
  Precio: number;
  Federado: number;

  constructor() {
    this.IdCuota = 0;
    this.Nombre = ' con hermano';
    this.Precio = 60;
    this.Federado = 1;
  }
}
