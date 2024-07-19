import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { P008Create_DestinoDto } from '../../Models/Private/DtosP008/P006Create_DestinoDto';
import { P008Update_DestinoDto } from '../../Models/Private/DtosP008/P006Update_DestinoDto';
import { P008Get_DestinosDto } from '../../Models/Private/DtosP008/P006Get_DestinosDto';

@Injectable({
  providedIn: 'root',
})
export class P008Service {
  constructor(private http: HttpClient) {}
  Delete_Destino(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P008/Delete_Destino/' + id;

    this.http.delete(apiUrl);
  }

  Create_User(Dto: P008Create_DestinoDto) {
    const apiUrl: string = environment.UrlBackend + '/P008/Create_Destino';
    this.http.post(apiUrl, Dto);
  }
  Editar_User(id: number, Dto: P008Update_DestinoDto) {
    const apiUrl: string =
      environment.UrlBackend + '/P008/Editar_Destino/' + id;
    this.http.patch(apiUrl, Dto);
  }
  Get_Users(Dto: P008Update_DestinoDto) {
    const apiUrl: string = environment.UrlBackend + '/P008/Get_Destino';

    return this.http.get<P008Get_DestinosDto>(apiUrl);
  }
}
