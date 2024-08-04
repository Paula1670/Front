import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { P005GetDocumentacion } from '../../Models/Public/DtosP005/P005Get_Documentacion';

@Injectable({
  providedIn: 'root',
})
export class P005Service {
  constructor(private http: HttpClient) {}

  Delete_Documento(id: number) {
    const apiUrl: string = environment.UrlBackend + '/P005/Delete/' + id;

    return this.http.delete(apiUrl);
  }

  Get_Documentos() {
    const apiUrl: string = environment.UrlBackend + '/P005/GetAll';

    return this.http.get<P005GetDocumentacion>(apiUrl);
  }
}
