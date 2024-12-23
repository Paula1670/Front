import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { F007Update_Minima } from '../../Models/Private/DtosF007/F007Update_MinimaDto';
import { F007GetCategoriasDto } from '../../Models/Private/DtosF007/F007Get_CategoriasDto';
import { F007Get_MinimaDto } from '../../Models/Private/DtosF007/F007Get_MinimaDto';
import { F005UpdateDocumentacionDto } from '../../Models/Public/DtosF005/F005Update_Documentacion';
import { F005CreateDocumentacionDto } from '../../Models/Public/DtosF005/F005Create_Documentacion';
import { F005DocumentacionComponent } from '../../Form/F005Documentacion/F005Documentacion.component';
import { F005GetDocumentacionDto } from '../../Models/Public/DtosF005/F005Get_Documentacion';

@Injectable({
  providedIn: 'root',
})
export class F005Service {
  constructor(private http: HttpClient) {}

  Create_Documento(createF005Dto: F005CreateDocumentacionDto): Observable<any> {
    return this.http.post(
      environment.UrlBackend + '/F005/create',
      createF005Dto
    );
  }
  Update_Documento(
    id: number,
    f005: F005UpdateDocumentacionDto
  ): Observable<any> {
    return this.http.patch(environment.UrlBackend + '/F005/edit/' + id, f005);
  }

  Get_Documentacion(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/F005/Find_Documento/' + id;

    return this.http.get<F005GetDocumentacionDto>(apiUrl);
  }
}
