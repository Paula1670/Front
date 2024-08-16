import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';

export class F007GetCategoriasDto {
  IDCategoria: number;
  NombreCategoria: string;
  AnoInicio: number;
  AnoFin: number;
  Genero: GeneroEnum;

  constructor() {
    this.IDCategoria = 0;
    this.NombreCategoria = 'alevin';
    this.AnoFin = 2002;
    this.AnoInicio = 2004;
    this.Genero = GeneroEnum.Femenino;
  }
}
