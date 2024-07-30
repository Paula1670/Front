import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class P006Get_TiemposDto {
  tiempolist: P006Tiempo[] = [];
}
export interface P006Tiempo {
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Categoria: CategoriaEnum;
  Estilo: EstiloEnum;
  CumpleMinima: boolean;
  IDCategoria: number;
  IDUsuario: number;
  Nombre: string;
  Apellido: string;
  IDTiempo: number;
  FechaMarcaNadador: Date;
}
