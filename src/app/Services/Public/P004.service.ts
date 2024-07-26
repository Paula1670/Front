import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment.prod';
import { P004Get_CuotasDto } from '../../Models/Private/DtosP004/P004Get_CuotaDto';

@Injectable({
  providedIn: 'root',
})
export class P004Service {
  constructor(private http: HttpClient) {}

  Delete_Cuota(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P004/Delete_Cuota/' + id;

    return this.http.delete(apiUrl);
  }

  Get_Cuotas() {
    const apiUrl: string = environment.UrlBackend + '/P004/Get_Cuotas';

    return this.http.get<P004Get_CuotasDto>(apiUrl);
  }
}
