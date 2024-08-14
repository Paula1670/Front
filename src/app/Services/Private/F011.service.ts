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
import { F011Get_EntrenadoresDto } from '../../Models/Private/DtosF011/F011Get_EntrenadoresDto';
import { ActualizarEntrenadorDeNadadorDto } from '../../Models/Private/DtosF011/F011actualizarEntrenadorDeNadador.dto';
import { NadadorDto } from '../../Models/Private/DtosF011/F011Nadador.dto';

@Injectable({
  providedIn: 'root',
})
export class F011Service {
  constructor(private http: HttpClient) {}

  actualizarCategoriaDeNadador(
    actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto
  ) {
    const apiUrl: string =
      environment.UrlBackend + '/F011/actualizarCategoriaDeNadador';

    return this.http.put(apiUrl, actualizarCategoriaDeNadadorDto);
  }

  actualizarEntrenadorDeNadador(
    actualizarEntrenadorDeNadadorDto: ActualizarEntrenadorDeNadadorDto
  ) {
    const apiUrl: string =
      environment.UrlBackend + '/F011/actualizarEntrenadorDeNadador';

    return this.http.put(apiUrl, actualizarEntrenadorDeNadadorDto);
  }

  findCategorias() {
    const apiUrl: string = environment.UrlBackend + '/F011/findCategorias';

    return this.http.get<F011GetCategoriasDto[]>(apiUrl);
  }
  /*
  getCategoria(id: number) {}
*/
  Get_Nadador(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F011/Find_User/' + id;

    return this.http.get<P009Nadador>(apiUrl);
  }

  Find_Nadador(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F011/Find_Nadador/' + id;
    return this.http.get<NadadorDto>(apiUrl);
  }

  findEntrenadores() {
    const apiUrl: string = environment.UrlBackend + '/F011/findEntrenadores';

    return this.http.get<F011Get_EntrenadoresDto[]>(apiUrl);
  }
}
