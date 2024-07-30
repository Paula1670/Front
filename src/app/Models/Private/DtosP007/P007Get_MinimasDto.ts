import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum copy 2';
import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum copy';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class P007Get_MinimasDto {
  minimalist: P007Minima[] = [];
}

export interface P007Minima {
  IDMinima: number;
  TiempoMinimo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Categoria: CategoriaEnum;
  Estilo: EstiloEnum;
  Genero: GeneroEnum;
  Campeonato: CampeonatoEnum;
}
