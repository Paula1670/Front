import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum';
import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
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
  Conseguida: boolean;
}
