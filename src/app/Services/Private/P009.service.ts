import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { P009Usuario } from '../../Models/Private/DtosP009/P009Get_UsersDto';
import { P009Entrenador } from '../../Models/Private/DtosP009/P009Get_EntrenadoresDto';
import { P009Socio } from '../../Models/Private/DtosP009/P009Get_SociosDto';
import { P009Nadador } from '../../Models/Private/DtosP009/P009Get_NadadoresDto';

@Injectable({
  providedIn: 'root',
})
export class P009Service {
  constructor(private http: HttpClient) {}

  Delete_User(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P009/Delete_User/' + id;

    return this.http.delete(apiUrl);
  }
  Activate_User(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P009/Activate_User/' + id;

    return this.http.put(apiUrl, null);
  }

  Get_UsersActivated() {
    const apiUrl: string = environment.UrlBackend + '/P009/Get_UsersActivated';

    return this.http.get<P009Usuario[]>(apiUrl);
  }
  FindById(id: number) {
    const apiUrl: string = environment.UrlBackend + '/users/findById/' + id;

    return this.http.get<P009Usuario>(apiUrl);
  }

  Get_UsersInactivated() {
    const apiUrl: string =
      environment.UrlBackend + '/P009/Get_UsersInactivated';

    return this.http.get<P009Usuario[]>(apiUrl);
  }

  Get_Socios() {
    const apiUrl: string = environment.UrlBackend + '/P009/findAllSocios';

    return this.http.get<P009Socio[]>(apiUrl);
  }

  Get_Entrenadores() {
    const apiUrl: string = environment.UrlBackend + '/P009/findAllEntrenadores';

    return this.http.get<P009Entrenador[]>(apiUrl);
  }

  Get_Nadadores() {
    const apiUrl: string = environment.UrlBackend + '/P009/findAllNadadores';

    return this.http.get<P009Nadador[]>(apiUrl);
  }

  actualizarAllCategorias() {
    const apiUrl: string =
      environment.UrlBackend + '/P009/actualizarAllCategorias';

    return this.http.put(apiUrl, null);
  }
}
