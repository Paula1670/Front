export interface P009Nadador {
  IDUsuario: number;
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Telefono: string;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  NombreCategoria: string;
}
export enum GeneroEnum {
  Femenino = 'fem',
  Masclino = 'masc',
  Otro = 'otro',
}
