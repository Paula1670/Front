export class Destino {
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

  constructor() {
    this.IDDestinos = 1;
    this.Destino = 'Madrid';
    this.FechaSalida = new Date('2023-12-25');
    this.FechaRegreso = new Date('2023-12-28');
    this.Hotel = 'Hotel XYZ';
    this.Personas = 4;
    this.Precio = 450.0;
    this.NumeroContacto = '123456789';
    this.Comentarios = 'Comentarios sobre el destino';
    this.IDMiembroJunta = 45;
  }
}
