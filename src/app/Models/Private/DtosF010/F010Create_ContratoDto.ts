export class F010Create_ContratoDto {
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: string;

  CuotasPosibles: number;
  Socio: number;
  constructor() {
    this.FechaInicio = new Date('2023-01-01');
    this.FechaVencimiento = new Date('2023-12-31');
    this.Estado = 'Vigente';

    this.Socio = 1;
    this.CuotasPosibles = 1;
  }
}
