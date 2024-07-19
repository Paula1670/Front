export class P013Get_EntrenadoresDto {
  entrenadorlist: P013Entrenador[] = [];
}
export interface P013Entrenador {
  idEntrenador: number;

  fechaContratacion: Date;

  especialidad: string;

  usuario: number;

  nadadores: number[];
}
