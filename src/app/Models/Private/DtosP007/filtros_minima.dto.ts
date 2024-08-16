import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
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
  IDNadador?: number;
}
