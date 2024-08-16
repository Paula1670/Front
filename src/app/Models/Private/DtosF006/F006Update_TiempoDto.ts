import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
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
