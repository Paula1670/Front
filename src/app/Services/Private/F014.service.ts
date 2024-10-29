import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { P010ContratoDto } from '../../Models/Private/DtosP010/P010Get_contratosDto';
import { F010Update_ContratoDto } from '../../Models/Private/DtosF010/F010Update_ContratoDto';
import { F010Create_ContratoDto } from '../../Models/Private/DtosF010/F010Create_ContratoDto';
import { ActualizarCategoriaDeNadadorDto } from '../../Models/Private/DtosF011/F011actualizarCategoriaDeNadador.dto';
import { F011GetCategoriasDto } from '../../Models/Private/DtosF011/F011Get_CategoriasDto';
import { P009Nadador } from '../../Models/Private/DtosP009/P009Get_NadadoresDto';
import { F011Get_EntrenadoresDto } from '../../Models/Private/DtosF011/F011Get_EntrenadoresDto';
import { ActualizarEntrenadorDeNadadorDto } from '../../Models/Private/DtosF011/F011actualizarEntrenadorDeNadador.dto';
import { NadadorDto } from '../../Models/Private/DtosF011/F011Nadador.dto';
import { F014ActualizarContrasena } from '../../Models/Private/DtosF014/F014ActualizarContrasenaDto';

@Injectable({
  providedIn: 'root',
})
export class F014Service {
  constructor(private http: HttpClient) {}

  actualizarContrasena(
    actualizarContrasena: F014ActualizarContrasena
  ) {
    const apiUrl: string =
      environment.UrlBackend + '/F009/actualizarContrasena';

    return this.http.put(apiUrl, actualizarContrasena);
  }

  
 /* Get_Nadador(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F011/Find_User/' + id;

    return this.http.get<P009Nadador>(apiUrl);
  }*/

 
}
