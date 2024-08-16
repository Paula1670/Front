import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';

export interface F009Usuario {
  IDUsuario: number;
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Domicilio: string;
  Telefono: string;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  Nadador: number;
}
