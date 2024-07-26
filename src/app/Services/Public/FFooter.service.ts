import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { FUpdateFooterDto } from '../../Models/Public/DtosFFooter/FUpdate_Footer';
import { FGetFooterDto } from '../../Models/Public/DtosFFooter/FGet_Footer';

@Injectable({
  providedIn: 'root',
})
export class FFooterService {
  constructor(private http: HttpClient) {}

  Create_Contacto(createF009Dto: any): Observable<any> {
    return this.http.post(
      environment.UrlBackend + '/fFooter/Create',
      createF009Dto
    );
  }
  Update_Contacto(
    id: number,
    fUpdateFooterDto: FUpdateFooterDto
  ): Observable<any> {
    return this.http.patch(
      environment.UrlBackend + '/fFooter/Edit/' + id,
      fUpdateFooterDto
    );
  }

  Get_Contacto(id: number) {
    const apiUrl: string = environment.UrlBackend + '/fFooter/FindOne/' + id;

    return this.http.get<FGetFooterDto>(apiUrl);
  }
}
