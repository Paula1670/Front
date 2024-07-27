import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { P006Get_TiemposDto } from '../../Models/Private/DtosP006/P006Get_TiemposDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Public006Service {
  constructor(private http: HttpClient) {}

  Get_Records() {
    const apiUrl: string = environment.UrlBackend + '/P006/Get_Records';

    return this.http.get<P006Get_TiemposDto>(apiUrl);
  }
}
