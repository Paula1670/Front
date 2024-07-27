import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { P012Galeria } from '../../Models/Public/DtosP012/P012Get_Galeria';

@Injectable({
  providedIn: 'root',
})
export class P12Service {
  constructor(private http: HttpClient) {}
  Get_Galerias() {
    const apiUrl: string = environment.UrlBackend + '/P012/getAllGalerias';

    return this.http.get<P012Galeria[]>(apiUrl);
  }

  Delete_Galeria(id: number) {
    const apiUrl: string =
      environment.UrlBackend + '/P012/delete_Galeria/' + id;

    return this.http.delete(apiUrl);
  }

  /*
  base64ToPng(base64: string): string {
    //console.log(base64);
    return `data:image/png;base64,${base64}`;
  }*/
}
