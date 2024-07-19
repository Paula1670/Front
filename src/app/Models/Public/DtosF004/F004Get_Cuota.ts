export class F004GetCuotaDto {
  IdCuota: number;
  Precio: number;
  Nombre: string;
  Federado: Boolean;
  constructor() {
    this.IdCuota = 1;
    this.Federado = true;
    this.Nombre = '';
    this.Precio = 1;
  }
}
