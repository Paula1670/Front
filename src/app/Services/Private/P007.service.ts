import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { P007Get_MinimasDto } from '../../Models/Private/DtosP007/P007Get_MinimasDto';

@Injectable({
  providedIn: 'root',
})
export class P007Service {
  constructor(private http: HttpClient) {}

  Delete_Minima(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P007/Delete_Minima/' + id;

    return this.http.delete(apiUrl);
  }

  Get_Minimas() {
    const apiUrl: string = environment.UrlBackend + '/P007/Get_Minimas';

    return this.http.get<P007Get_MinimasDto>(apiUrl);
  }

  Get_MinimasByAno(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P007/findMinimasByAno/' + id;

    return this.http.get<P007Get_MinimasDto>(apiUrl);
  }

  Get_MinimasByCategoria(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P007/findMinimasByCategoria/' + id;

    return this.http.get<P007Get_MinimasDto>(apiUrl);
  }
}
