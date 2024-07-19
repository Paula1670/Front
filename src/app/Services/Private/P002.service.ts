import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class P002Service {
  private apiUrl = 'URL_DEL_BACKEND/api/members?'; // Reemplaza 'URL_DEL_BACKEND' con la URL real de tu backend

  constructor(private http: HttpClient) {}

  /*Get_swimmers(Dto: P006Update_TiempoDto) {
    const apiUrl: string = environment.UrlBackend + '/P006/Get_Tiempos';

    return this.http.get<P006Get_TiemposDto>(apiUrl);
  }*/
}
