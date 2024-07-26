import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { P006Get_TiemposDto } from '../../Models/Private/DtosP006/P006Get_TiemposDto';

@Injectable({
  providedIn: 'root',
})
export class P006Service {
  constructor(private http: HttpClient) {}
  Delete_Tiempo(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P006/Delete_Tiempo/' + id;

    return this.http.delete(apiUrl);
  }

  Get_Tiempos() {
    const apiUrl: string = environment.UrlBackend + '/P006/Get_Tiempos';

    return this.http.get<P006Get_TiemposDto>(apiUrl);
  }
}
