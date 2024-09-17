export class F004CreateCuotaDto {
  Precio: number;
  Nombre: string;
  Federado: number;
  constructor() {
    this.Federado = 0;
    this.Nombre = '';
    this.Precio = 1;
  }
}
