import { CategoriaDocumentoEnum } from '../../../Core/Constants/Enums/CategoriaDocumentoEnum';

export class P005GetDocumentacion {
  idDocumentacion: number;
  titulo: string;
  nombreUrl: string;
  url: string;
  categoriaDocumento: CategoriaDocumentoEnum;
  constructor() {
    this.idDocumentacion = 1;
    this.titulo = '';
    this.nombreUrl = '';
    this.url = '';
    this.categoriaDocumento = CategoriaDocumentoEnum.Andalucia;
  }
}
