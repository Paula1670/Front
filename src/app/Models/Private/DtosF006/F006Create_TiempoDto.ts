import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
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
