import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class F006Update_TiempoDto {
  IDNadador?: number;
  Tiempo?: string;
  Temporada?: TemporadaEnum;
  Prueba?: PruebaEnum;
  Piscina?: PiscinaEnum;
  Categoria?: CategoriaEnum;
  Estilo?: EstiloEnum;
  constructor() {}
}

export enum PruebaEnum {
  Metros50 = '50m',
  Metros100 = '100m',
  Metros200 = '200m',
  Metros400 = '400m',
  Metros800 = '800m',
  Metros1500 = '1500m',
}

export enum PiscinaEnum {
  Metros25 = '25m',
  Metros50 = '50m',
}

export enum CategoriaEnum {
  benjamin = 'benjamin',
  Alevin = 'alevin',
  Infantil = 'infantil',
  Junior = 'junior',
  Absoluto = 'absoluto',
}

export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
