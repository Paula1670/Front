import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export class P006Get_RecordsDto {
  tiempolist: P006Records[] = [];
}
export interface P006Records {
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  NombreCategoria: CategoriaEnum;
  Estilo: EstiloEnum;
  CumpleMinima: boolean;
  IDCategoria: number;
  IDUsuario: number;
  NombreUsuario: string;
  ApellidoUsuario: string;
  IDTiempo: number;
  FechaMarcaNadador: Date;
}
