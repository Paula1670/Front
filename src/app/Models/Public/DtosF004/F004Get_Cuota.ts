export class F004GetCuotaDto {
  IdCuota: number;
  Precio: number;
  Nombre: string;
  Federado: number;
  constructor() {
    this.IdCuota = 1;
    this.Federado = 1;
    this.Nombre = '';
    this.Precio = 1;
  }
}
