import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class F006CreateTiempoDto {
  IDNadador: number;
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Estilo: EstiloEnum;
  FechaMarcaNadador: Date;

  constructor() {
    this.IDNadador = 1;
    this.FechaMarcaNadador = new Date();
    this.Tiempo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.Estilo = EstiloEnum.Braza;
  }
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
