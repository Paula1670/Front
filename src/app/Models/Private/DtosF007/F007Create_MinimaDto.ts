import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum copy 2';
import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum copy';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class F007CreateMinimaDto {
  TiempoMinimo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Categoria: CategoriaEnum;
  Estilo: EstiloEnum;
  Genero: GeneroEnum;
  Campeonato: CampeonatoEnum;

  constructor() {
    this.TiempoMinimo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.Categoria = CategoriaEnum.Alevin;
    this.Estilo = EstiloEnum.Braza;
    this.Genero = GeneroEnum.Femenino;
    this.Campeonato = CampeonatoEnum.Continental;
  }
}
