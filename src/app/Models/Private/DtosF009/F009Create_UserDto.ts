import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum copy';

export interface F009Create_UserDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Domicilio: string;
  Telefono: number;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  //campos de socio
  crearSocio: boolean;
  idCuota: number;
  socioAsociado: number;
  //campos de nadador
  crearNadador: boolean;
  //campos de Entrenador
  crearEntrenador: boolean;
  especialidad: string;
  entrenadorAsociado: number;
  Categoria: number;
}
