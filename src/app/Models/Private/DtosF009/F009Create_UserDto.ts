export class F009Create_UserDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Telefono: number;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  //campos de socio
  crearSocio: boolean;
  idCuota: number;
  //campos de nadador
  crearNadador: boolean;
  //campos de Entrenador
  crearEntrenador: boolean;
  especialidad: string;

  constructor() {
    this.Nombre = 'Jose';
    this.Apellido = 'Jimenez Sanchez';
    this.Contrasena = '1234';
    this.Direccion = '@gmail';
    this.FechaNacimiento = new Date();
    this.FechaInscripcion = new Date();
    this.Telefono = 666666;
    this.Genero = GeneroEnum.Femenino;
    this.crearSocio = false;
    this.crearNadador = false;
    this.crearEntrenador = false;
    this.especialidad = 'seco';
    this.idCuota = 1;
  }
}
export enum GeneroEnum {
  Femenino = 'Femenino',
  Masclino = 'Masculino',
}
