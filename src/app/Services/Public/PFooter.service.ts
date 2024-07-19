import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { PGetFooterDto } from "../../Models/Public/DtosPFooter/PGet_Footer";

@Injectable({
  providedIn: "root",
})
export class PFooterService {
  constructor(private http: HttpClient) {}

  Delete_Contacto(id: number) {
    const apiUrl: string = environment.UrlBackend + "/pFooter/Delete/" + id;
    return this.http.delete(apiUrl);
  }

  Get_Contactos() {
    const apiUrl: string = environment.UrlBackend + "/pFooter/GetAll";
    return this.http.get<PGetFooterDto>(apiUrl);
  }
}
