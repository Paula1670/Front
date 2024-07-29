import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class P006Get_RecordsDto {
  tiempolist: P006Records[] = [];
}
export interface P006Records {
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  NombreCategoria: CategoriaEnum;
  Estilo: EstiloEnum;
  CumpleMinima: boolean;
  IDCategoria: number;
  IDUsuario: number;
  NombreUsuario: string;
  ApellidoUsuario: string;
  IDTiempo: number;
  FechaMarcaNadador: Date;
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
