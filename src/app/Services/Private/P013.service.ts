import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { P013Get_EntrenadoresDto } from '../../Models/Private/Dtosp013/P013Get_EntrenadoresDto';

@Injectable({
  providedIn: 'root',
})
export class P013Service {
  constructor(private http: HttpClient) {}

  Get_Entrenadores() {
    const apiUrl: string = environment.UrlBackend + '/P013/Get_Entrenadores';

    return this.http.get<P013Get_EntrenadoresDto>(apiUrl);
  }

  Find_Entrenador(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P013/Find_Entrenador/' + id;

    return this.http.get<P013Get_EntrenadoresDto>(apiUrl);
  }
}
