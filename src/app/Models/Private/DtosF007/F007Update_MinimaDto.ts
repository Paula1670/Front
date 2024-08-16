import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum';
import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class F007Update_Minima {
  TiempoMinimo?: string;
  Temporada?: TemporadaEnum;
  Prueba?: PruebaEnum;
  Piscina?: PiscinaEnum;
  Categoria?: CategoriaEnum;
  Estilo?: EstiloEnum;
  Genero?: GeneroEnum;
  Campeonato?: CampeonatoEnum;
}
