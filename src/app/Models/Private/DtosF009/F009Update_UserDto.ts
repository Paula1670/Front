import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';

export class F009Update_UserDto {
  Nombre?: string;
  Apellido?: string;
  Contrasena?: string;
  Direccion?: string;
  Domicilio?: string;
  Telefono?: number;
  FechaNacimiento?: Date;
  FechaIncripcion?: Date;
  Genero?: GeneroEnum;
  constructor() {}
}
