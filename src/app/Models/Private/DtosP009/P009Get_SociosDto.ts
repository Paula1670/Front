export interface P009Socio {
  IDUsuario: number;
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Telefono: string;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
}
export enum GeneroEnum {
  Femenino = 'fem',
  Masclino = 'masc',
  Otro = 'otro',
}