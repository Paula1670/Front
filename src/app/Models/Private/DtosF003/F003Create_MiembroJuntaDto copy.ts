import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum copy 4';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum copy 3';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum copy 5';
import { PuestoEnum } from '../../../Core/Constants/Enums/PuestoEnum';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export interface F003Create_MiembroJuntaDto {
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  IDUsuario: number;
}
