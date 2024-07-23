import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { P010ContratoDto } from '../../Models/Private/DtosP010/P010Get_contratosDto';
import { F010Update_ContratoDto } from '../../Models/Private/DtosF010/F010Update_ContratoDto';
import { F010Create_ContratoDto } from '../../Models/Private/DtosF010/F010Create_ContratoDto';

@Injectable({
  providedIn: 'root',
})
export class F010Service {
  constructor(private http: HttpClient) {}

  Create_Contrato(createF010Dto: F010Create_ContratoDto): Observable<any> {
    return this.http.post(
      environment.UrlBackend + '/F010/Create_Contrato',
      createF010Dto
    );
  }
  Update_Contrato(
    id: number,
    f010Update_ContratoDto: F010Update_ContratoDto
  ): Observable<any> {
    console.log(id);
    console.log(f010Update_ContratoDto);
    return this.http.patch(
      environment.UrlBackend + '/F010/Editar_Contrato/' + id,
      f010Update_ContratoDto
    );
  }

  Get_Contrato(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F010/Get_Contrato/' + id;

    return this.http.get<P010ContratoDto>(apiUrl);
  }
}
