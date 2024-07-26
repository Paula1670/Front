import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { P006Get_TiemposDto } from '../../Models/Private/DtosP006/P006Get_TiemposDto';
import { F006Update_TiempoDto } from '../../Models/Private/DtosF006/F006Update_TiempoDto';

@Injectable({
  providedIn: 'root',
})
export class F006Service {
  constructor(private http: HttpClient) {}

  Create_Tiempo(createF009Dto: any): Observable<any> {
    return this.http.post(
      environment.UrlBackend + '/F006/Create_Tiempo',
      createF009Dto
    );
  }
  Update_Tiempo(
    id: number,
    f009Update_UserDto: F006Update_TiempoDto
  ): Observable<any> {
    return this.http.patch(
      environment.UrlBackend + '/F006/Editar_Tiempo/' + id,
      f009Update_UserDto
    );
  }

  Get_Tiempo(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F006/Find_Tiempo/' + id;

    return this.http.get<P006Get_TiemposDto>(apiUrl);
  }
}
