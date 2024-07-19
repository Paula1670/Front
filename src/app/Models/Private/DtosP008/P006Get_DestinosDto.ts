export class P008Get_DestinosDto {
  destinolist: P008Destinos[] = [];
}
export interface P008Destinos {
  IDDestinos: number;
  Destino: string;
  FechaSalida: Date;
  FechaRegreso: Date;
  Hotel: string;
  Personas: number;
  Precio: number;
  NumeroContacto: string;
  Comentarios: string;
  IDMiembroJunta: number;
}
