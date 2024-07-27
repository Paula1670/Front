import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { F012UpdateGaleriaDto } from '../../Models/Public/DtosF012/F012Update_Galeria';
import { F012CreateGaleriaDto } from '../../Models/Public/DtosF012/F012Create_Galeria';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class F012Service {
  constructor(private http: HttpClient) {}

  Create_Galeria(F012CreateGaleriaDto: F012CreateGaleriaDto): Observable<any> {
    console.log('creando galeria');
    return this.http.post(
      environment.UrlBackend + '/F012/create_Galeria',
      F012CreateGaleriaDto
    );
  }
  Update_Galeria(
    id: number,
    f012Update_GaleriaDto: F012UpdateGaleriaDto
  ): Observable<any> {
    return this.http.patch(
      environment.UrlBackend + '/F012/edit_ Galeria/' + id,
      f012Update_GaleriaDto
    );
  }
}
