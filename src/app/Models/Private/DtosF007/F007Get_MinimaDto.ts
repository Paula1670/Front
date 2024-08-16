import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum';
import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class F007Get_MinimaDto {
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
