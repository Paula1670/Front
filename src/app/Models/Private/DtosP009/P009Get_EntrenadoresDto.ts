export interface P009Entrenador {
  IDUsuario: number;
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Telefono: string;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  especialidad: string;
}
export enum GeneroEnum {
  Femenino = 'fem',
  Masclino = 'masc',
  Otro = 'otro',
}
