import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { F009Update_UserDto } from '../../Models/Private/DtosF009/F009Update_UserDto';
import { Observable } from 'rxjs';
import { F009GetCuotasDto } from '../../Models/Private/DtosF009/F009Get_CuotasDto';
import { F009GetSociosDto } from '../../Models/Private/DtosF009/F009Get_SociosDto';
import { P009Usuario } from '../../Models/Private/DtosP009/P009Get_UsersDto';
import { F009Get_EntrenadoresDto } from '../../Models/Private/DtosF009/F009Get_EntrenadoresDto';
import { F009GetNadadoresDto } from '../../Models/Private/DtosF009/F009Get_NadadoresDto';
import { F003Update_MiembroJuntaDto } from '../../Models/Private/DtosF003/F003Update_MiembroJuntaDto';

@Injectable({
  providedIn: 'root',
})
export class F009Service {
  constructor(private http: HttpClient) {}

  Create_User(createF009Dto: any): Observable<any> {
    return this.http.post(
      environment.UrlBackend + '/F009/Create_User',
      createF009Dto
    );
  }
  Update_User(
    id: number,
    f009Update_UserDto: F009Update_UserDto
  ): Observable<any> {
    return this.http.patch(
      environment.UrlBackend + '/F009/Editar_User/' + id,
      f009Update_UserDto
    );
  }

  Get_User(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F009/Find_User/' + id;

    return this.http.get<P009Usuario>(apiUrl);
  }

  findCuotas() {
    const apiUrl: string = environment.UrlBackend + '/F009/FindCuotas';

    return this.http.get<F009GetCuotasDto[]>(apiUrl);
  }

  findSocios() {
    const apiUrl: string = environment.UrlBackend + '/F009/findSocios';

    return this.http.get<F009GetSociosDto[]>(apiUrl);
  }

  findEntrenadores() {
    const apiUrl: string = environment.UrlBackend + '/F009/findEntrenadores';

    return this.http.get<F009Get_EntrenadoresDto[]>(apiUrl);
  }

  findNadadores() {
    const apiUrl: string = environment.UrlBackend + '/F009/findNadadores';

    return this.http.get<F009GetNadadoresDto[]>(apiUrl);
  }
}
