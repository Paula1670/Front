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
import { P009GetJuntaDirectivaDto } from '../../Models/Private/DtosP009/P009GetJuntaDirectivaDto';
import { F003Create_MiembroJuntaDto } from '../../Models/Private/DtosF003/F003Create_MiembroJuntaDto copy';
import { F003Update_MiembroJuntaDto } from '../../Models/Private/DtosF003/F003Update_MiembroJuntaDto';
import { F003Usuario } from '../../Models/Private/DtosF003/F003Get_UsersDto';

@Injectable({
  providedIn: 'root',
})
export class F003Service {
  constructor(private http: HttpClient) {}
  Get_UserMiembroJunta(id: number) {
    const apiUrl: string = environment.UrlBackend + '/F003/findById/' + id;

    return this.http.get<P009GetJuntaDirectivaDto>(apiUrl);
  }
  Add_MiembroJunta(createF003Dto: F003Create_MiembroJuntaDto, id: number) {
    return this.http.post(
      environment.UrlBackend + '/F003/create/' + id,
      createF003Dto
    );
  }
  Update_MiembroJunta(id: number, updateF009Dto: F003Update_MiembroJuntaDto) {
    return this.http.patch(
      environment.UrlBackend + '/F003/edit/' + id,
      updateF009Dto
    );
  }

  findSUsuarios() {
    const apiUrl: string = environment.UrlBackend + '/F003/findUsuarios';

    return this.http.get<F003Usuario[]>(apiUrl);
  }
}
