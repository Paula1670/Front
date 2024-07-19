export interface LogInAuthResponseDto {
  token: string;
  idUsuario: number;
  nombre: string;
  apellido: string;
  entrenador: boolean;
  nadador: boolean;
  juntaDirectiva: boolean;
  socio: boolean;
}
