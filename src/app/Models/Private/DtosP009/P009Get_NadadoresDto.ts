import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';

export interface P009Nadador {
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
  NombreCategoria: string;
  Nadador: number;
}
