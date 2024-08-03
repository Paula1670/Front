import { PuestoEnum } from '../../../Core/Constants/Enums/PuestoEnum';

export interface P009GetJuntaDirectivaDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Telefono: number;
  FechaInscripcion: Date;
  FechaInicioCargo: Date;
  FechaTerminoCargo: Date;
  Puesto: PuestoEnum;
  idUsuario: number;
  idPuesto: number;
}
