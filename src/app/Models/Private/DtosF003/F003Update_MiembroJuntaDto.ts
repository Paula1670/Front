import { EstiloEnum } from '../../../Core/Constants/Enums/EstiloEnum';
import { PiscinaEnum } from '../../../Core/Constants/Enums/PiscinaEnum';
import { PruebaEnum } from '../../../Core/Constants/Enums/PruebaEnum';
import { PuestoEnum } from '../../../Core/Constants/Enums/PuestoEnum';
import { TemporadaEnum } from '../../../Core/Constants/Enums/TemporadaEnum';

export interface F003Update_MiembroJuntaDto {
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
}
