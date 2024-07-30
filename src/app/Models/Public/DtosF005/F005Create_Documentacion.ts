import { CategoriaDocumentoEnum } from '../../../Core/Constants/Enums/CategoriaDocumentoEnum';

export class F005CreateDocumentacionDto {
  titulo: string;
  nombreUrl: string;
  url: string;
  categoriaDocumento: CategoriaDocumentoEnum;
  constructor() {
    this.titulo = '';
    this.nombreUrl = '';
    this.url = '';
    this.categoriaDocumento = CategoriaDocumentoEnum.Andalucia;
  }
}
