export class F009Update_UserDto {
  Nombre?: string;
  Apellido?: string;
  Contrasena?: string;
  Direccion?: string;
  Telefono?: number;
  FechaNacimiento?: Date;
  FechaIncripcion?: Date;
  Genero?: GeneroEnum;
  constructor() {}
}
export enum GeneroEnum {
  Femenino = 'fem',
  Masclino = 'masc',
  Otro = 'otro',
}
