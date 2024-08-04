import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum copy';

export interface P007GetGeneroCategoriaDto {
  IDCategoria: number;
  Categoria: CategoriaEnum;
  Genero: GeneroEnum;
}