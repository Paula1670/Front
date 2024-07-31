import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum copy 2';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum copy';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class FiltrosMinimaDto {
  year?: number;
  temporada?: TemporadaEnum;
  piscina?: PiscinaEnum;
  estilo?: EstiloEnum;
  prueba?: PruebaEnum;
  genero?: GeneroEnum;
  categoria?: number;
  campeonato?: CampeonatoEnum;
}
