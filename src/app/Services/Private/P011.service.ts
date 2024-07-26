import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { P011Get_SociosDto } from '../../Models/Private/Dtosp011/P011Get_SociosDto';

@Injectable({
  providedIn: 'root',
})
export class P011Service {
  constructor(private http: HttpClient) {}

  Get_Socios() {
    const apiUrl: string = environment.UrlBackend + '/P011/Get_Socios';

    return this.http.get<P011Get_SociosDto>(apiUrl);
  }

  Get_Socio(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P011/Find_Socio' + id;

    return this.http.get<P011Get_SociosDto>(apiUrl);
  }
}
