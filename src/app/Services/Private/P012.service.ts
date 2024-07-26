import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { P012Get_NadadoresDto } from '../../Models/Private/Dtosp012/P012Get_NadadoresDto';

@Injectable({
  providedIn: 'root',
})
export class P012Service {
  constructor(private http: HttpClient) {}

  Get_Nadadores() {
    const apiUrl: string = environment.UrlBackend + '/P012/Get_Nadadores';

    return this.http.get<P012Get_NadadoresDto>(apiUrl);
  }

  Get_Nadador(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P012/Find_Nadador' + id;

    return this.http.get<P012Get_NadadoresDto>(apiUrl);
  }
}
