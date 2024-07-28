import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { P010ContratoDto } from '../../Models/Private/DtosP010/P010Get_contratosDto';

@Injectable({
  providedIn: 'root',
})
export class P010Service {
  constructor(private http: HttpClient) {}

  Delete_Contrato(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P010/Delete_Contrato/' + id;

    return this.http.delete(apiUrl);
  }

  Get_Contratos() {
    const apiUrl: string = environment.UrlBackend + '/P010/Get_Contratos';

    return this.http.get<P010ContratoDto>(apiUrl);
  }

  /* Get_ContratosBySocio(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P010/Get_ContratosBySocio' + id;

    return this.http.get<P010ContratoDto[]>(apiUrl);
  }*/

  Get_ContratosByUser(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P010/Get_ContratosByUsuario/' + id;

    return this.http.get<P010ContratoDto[]>(apiUrl);
  }
}
