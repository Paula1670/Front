export class F004CreateCuotaDto {
  Precio: number;
  Nombre: string;
  Federado: Boolean;
  constructor() {
    this.Federado = true;
    this.Nombre = '';
    this.Precio = 1;
  }
}
