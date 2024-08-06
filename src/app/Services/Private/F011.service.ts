import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { P010ContratoDto } from '../../Models/Private/DtosP010/P010Get_contratosDto';
import { F010Update_ContratoDto } from '../../Models/Private/DtosF010/F010Update_ContratoDto';
import { F010Create_ContratoDto } from '../../Models/Private/DtosF010/F010Create_ContratoDto';
import { ActualizarCategoriaDeNadadorDto } from '../../Models/Private/DtosF011/F011actualizarCategoriaDeNadador.dto';
import { F011GetCategoriasDto } from '../../Models/Private/DtosF011/F011Get_CategoriasDto';

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
      environment.UrlBackend + '/F009/actualizarCategoriaDeNadador';
    console.log(apiUrl);
    return this.http.put(apiUrl, actualizarCategoriaDeNadadorDto);
  }

  findCategorias() {
    const apiUrl: string = environment.UrlBackend + '/F007/findCategorias';

    return this.http.get<F011GetCategoriasDto[]>(apiUrl);
  }
  /*
  getCategoria(id: number) {}

  Get_Nadador(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F009/Find_User/' + id;

    return this.http.get<P009Usuario>(apiUrl);
  }*/
}
