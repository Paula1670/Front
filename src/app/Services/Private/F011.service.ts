import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { P010ContratoDto } from '../../Models/Private/DtosP010/P010Get_contratosDto';
import { F010Update_ContratoDto } from '../../Models/Private/DtosF010/F010Update_ContratoDto';
import { F010Create_ContratoDto } from '../../Models/Private/DtosF010/F010Create_ContratoDto';
import { ActualizarCategoriaDeNadadorDto } from '../../Models/Private/DtosF011/F011actualizarCategoriaDeNadador.dto';
import { F011GetCategoriasDto } from '../../Models/Private/DtosF011/F011Get_CategoriasDto';
import { P009Nadador } from '../../Models/Private/DtosP009/P009Get_NadadoresDto';

@Injectable({
  providedIn: 'root',
})
export class F011Service {
  constructor(private http: HttpClient) {}

  actualizarCategoriaDeNadador(
    actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto
  ) {
    console.log(actualizarCategoriaDeNadadorDto);
    const apiUrl: string =
      environment.UrlBackend + '/F011/actualizarCategoriaDeNadador';

    let f = this.http.put(apiUrl, actualizarCategoriaDeNadadorDto);
    console.log(f);
    return f;
  }

  findCategorias() {
    const apiUrl: string = environment.UrlBackend + '/F011/findCategorias';
    //console.log(this.http.get<F011GetCategoriasDto[]>(apiUrl));
    return this.http.get<F011GetCategoriasDto[]>(apiUrl);
  }
  /*
  getCategoria(id: number) {}
*/
  Get_Nadador(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F011/Find_User/' + id;

    return this.http.get<P009Nadador>(apiUrl);
  }
}
