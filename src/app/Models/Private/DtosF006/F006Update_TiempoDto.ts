import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class F006Update_TiempoDto {
  IDNadador?: number;
  Tiempo?: string;
  Temporada?: TemporadaEnum;
  Prueba?: PruebaEnum;
  Piscina?: PiscinaEnum;
  FechaMarcaNadador?: Date;
  Estilo?: EstiloEnum;
  constructor() {}
}
