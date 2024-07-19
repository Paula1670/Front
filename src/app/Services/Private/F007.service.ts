import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { F007Update_Minima } from '../../Models/Private/DtosF007/F007Update_MinimaDto';
import { F007GetCategoriasDto } from '../../Models/Private/DtosF007/F007Get_CategoriasDto';
import { F007Get_MinimaDto } from '../../Models/Private/DtosF007/F007Get_MinimaDto';

@Injectable({
  providedIn: 'root',
})
export class F007Service {
  constructor(private http: HttpClient) {}

  Create_Minima(createF009Dto: any): Observable<any> {
    return this.http.post(
      environment.UrlBackend + '/F007/Create_Minima',
      createF009Dto
    );
  }
  Update_Minima(
    id: number,
    f009Update_MinimaDto: F007Update_Minima
  ): Observable<any> {
    return this.http.patch(
      environment.UrlBackend + '/F007/Editar_Minima/' + id,
      f009Update_MinimaDto
    );
  }

  Get_Minima(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F007/Find_Minima/' + id;

    return this.http.get<F007Get_MinimaDto>(apiUrl);
  }
  findCategorias() {
    const apiUrl: string = environment.UrlBackend + '/F007/findCategorias';

    return this.http.get<F007GetCategoriasDto[]>(apiUrl);
  }
}
