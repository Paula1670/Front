export class F010Create_ContratoDto {
  Nombre: string;
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: string;
  Precio: number;

  constructor() {
    this.Nombre = 'Federados sin hermano';
    this.FechaInicio = new Date('2023-01-01');
    this.FechaVencimiento = new Date('2023-12-31');
    this.Estado = 'Vigente';
    this.Precio = 30;
  }
}
