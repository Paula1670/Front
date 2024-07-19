export class P011Get_SociosDto {
  sociolist: P011Socio[] = [];
}
export interface P011Socio {
  idsocio: number;
  usuario: number;
  cuotas: number[];
  nadadores: number[];
}
