import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { F007Update_Minima } from '../../Models/Private/DtosF007/F007Update_MinimaDto';
import { F007GetCategoriasDto } from '../../Models/Private/DtosF007/F007Get_CategoriasDto';
import { F007Get_MinimaDto } from '../../Models/Private/DtosF007/F007Get_MinimaDto';
import { F005UpdateDocumentacionDto } from '../../Models/Public/DtosF005/F005Update_Documentacion';
import { F005CreateDocumentacionDto } from '../../Models/Public/DtosF005/F005Create_Documentacion';
import { F005DocumentacionComponent } from '../../Form/F005Documentacion/F005Documentacion.component';
import { F005GetDocumentacionDto } from '../../Models/Public/DtosF005/F005Get_Documentacion';
import { F004CreateCuotaDto } from '../../Models/Public/DtosF004/F004Create_Cuota';
import { F004UpdateCuotaDto } from '../../Models/Public/DtosF004/F004Update_Cuota';
import { F004GetCuotaDto } from '../../Models/Public/DtosF004/F004Get_Cuota';

@Injectable({
  providedIn: 'root',
})
export class F004Service {
  constructor(private http: HttpClient) {}

  Create_Cuota(createF004Dto: F004CreateCuotaDto): Observable<any> {
    console.log(createF004Dto);
    return this.http.post(
      environment.UrlBackend + '/F004/Create_Cuota',
      createF004Dto
    );
  }
  Update_Cuota(id: number, f004: F004UpdateCuotaDto): Observable<any> {
    return this.http.patch(
      environment.UrlBackend + '/F004/Editar_Cuota/' + id,
      f004
    );
  }

  Get_Cuota(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F004/Find_Cuota/' + id;

    return this.http.get<F004GetCuotaDto>(apiUrl);
  }
}
