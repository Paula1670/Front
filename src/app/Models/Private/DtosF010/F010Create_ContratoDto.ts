export class F010Create_ContratoDto {
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: string;

  IDCuotasPosibles: number;
  IDSocio: number;
  constructor() {
    this.FechaInicio = new Date('2023-01-01');
    this.FechaVencimiento = new Date('2023-12-31');
    this.Estado = 'Vigente';

    this.IDSocio = 1;
    this.IDCuotasPosibles = 1;
  }
}
