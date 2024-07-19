export class F007Update_Minima {
  TiempoMinimo?: string;
  Temporada?: TemporadaEnum;
  Prueba?: PruebaEnum;
  Piscina?: PiscinaEnum;
  Categoria?: CategoriaEnum;
  Estilo?: EstiloEnum;
  Genero?: GeneroEnum;
  Campeonato?: CampeonatoEnum;
}
export enum GeneroEnum {
  Femenino = 'fem',
  Masclino = 'masc',
}

export enum CampeonatoEnum {
  Regional = 'regional',
  Nacional = 'nacional',
  Continental = 'continental',
  Mundial = 'mundial',
  Olimpico = 'olimpico',
}
export enum TemporadaEnum {
  Invierno = 'inv',
  Verano = 'ver',
}

export enum PruebaEnum {
  Metros50 = '50',
  Metros100 = '100',
  Metros200 = '200',
  Metros400 = '400',
  Metros800 = '800',
  Metros1500 = '1500',
}

export enum PiscinaEnum {
  Metros25 = '25m',
  Metros50 = '50m',
}

export enum CategoriaEnum {
  Prebenjamin = 'prebenjamin',
  benjamin = 'benjamin',
  Alevin = 'alevin',
  Infantil = 'infantil',
  Junior = 'junior',
  Absoluto = 'absoluto',
}

export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
