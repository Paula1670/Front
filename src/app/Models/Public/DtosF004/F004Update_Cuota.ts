export class F004UpdateCuotaDto {
  Precio: number;
  Nombre: string;
  Federado: number;
  constructor() {
    this.Federado = 1;
    this.Nombre = '';
    this.Precio = 1;
  }
}
