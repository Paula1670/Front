export class P004Get_CuotasDto {
  contratolist: P004Cuotas[] = [];
}
export interface P004Cuotas {
  IdCuota: number;
  Nombre: string;

  Precio: number;
  Federado: number;
}
