export class P012Get_NadadoresDto {
  nadadorlist: P012Nadador[] = [];
}
export interface P012Nadador {
  idNadador: number;

  usuario: number;

  entrenador: number;

  tiempos: number[];

  socio: number;
}
