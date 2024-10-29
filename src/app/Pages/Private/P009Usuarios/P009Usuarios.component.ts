import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../Components/Tables/Table/Table.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { P009Usuario } from '../../../Models/Private/DtosP009/P009Get_UsersDto';
import { P009Service } from '../../../Services/Private/P009.service';
import { Router } from '@angular/router';
import { Table_NadadoresComponent } from '../../../Components/Tables/Table_Nadadores/Table_Nadadores.component';
import { P009Nadador } from '../../../Models/Private/DtosP009/P009Get_NadadoresDto';
import { Table_SociosComponent } from '../../../Components/Tables/Table_Socios/Table_Socios.component';
import { Table_EntrenadoresComponent } from '../../../Components/Tables/Table_Entrenadores/Table_Entrenadores.component';
import { P009Entrenador } from '../../../Models/Private/DtosP009/P009Get_EntrenadoresDto';
import { P009Socio } from '../../../Models/Private/DtosP009/P009Get_SociosDto';
import { Observable } from 'rxjs';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';
import { P009GetJuntaDirectivaDto } from '../../../Models/Private/DtosP009/P009GetJuntaDirectivaDto';
import { Table_JuntaComponent } from '../../../Components/Tables/Table_Junta/Table_Junta.component';

@Component({
  selector: 'app-P009Usuarios',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    Final_Nav_BarComponent,
    HeaderComponent,
    FooterComponent,
    Table_NadadoresComponent,
    Table_SociosComponent,
    Table_EntrenadoresComponent,
    Table_JuntaComponent,
  ],
  templateUrl: './P009Usuarios.component.html',
  styleUrls: ['./P009Usuarios.component.scss'],
})
export class P009UsuariosComponent implements OnInit {
  authState$: Observable<AuthState>;
  memberlist: P009Usuario[] = [];
  swimerlist: P009Nadador[] = [];
  entrenadorlist: P009Entrenador[] = [];
  sociolist: P009Socio[] = [];
  juntalist: P009GetJuntaDirectivaDto[] = [];
  usuariosActivos: boolean = true;
  entrenadoresTabla: boolean = false;
  nadadoresTabla: boolean = false;
  usuariosTabla: boolean = false;
  socioTabla: boolean = false;
  juntaTabla: boolean = false;
  mostrarConfirmacion: boolean = false;
  esJunta?: boolean;
  esSocio?: boolean;
  esEntrenador?: boolean;
  constructor(
    private service: P009Service,
    private router: Router,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }
  ngOnInit() {
    this.authState$.subscribe({
      next: (data) => {
        this.esJunta = data.user?.juntaDirectiva;
        this.esEntrenador = data.user?.entrenador;
        this.esSocio = data.user?.socio;
        if (this.esJunta) this.Get_UsersActivated();
        else if (data.user?.idUsuario !== undefined) {
          this.findById(data.user.idUsuario);
        } else {
          console.error('idUsuario es undefined');
        }

        if (data.user?.idUsuario !== undefined && this.esEntrenador) {
          this.Get_NadadoresForEntrenador(data.user?.idUsuario);
        } else if (data.user?.idUsuario !== undefined && this.esSocio) {
          this.Get_NadadoresForSocio(data.user?.idUsuario);
        } else {
          console.error('idUsuario es undefined');
        }
      },
    });
  }
  findById(id: number) {
    this.service.FindById(id).subscribe((data: P009Usuario) => {
      this.memberlist = [data];
    });
    this.usuariosActivos = true;
    this.usuariosTabla = true;
  }

  Get_UsersActivated() {
    this.service.Get_UsersActivated().subscribe((data: P009Usuario[]) => {
      this.memberlist = data;
    });
    this.resetTablas();
    this.usuariosActivos = true;
    this.usuariosTabla = true;
  }

  Get_UsersInactivated() {
    this.service.Get_UsersInactivated().subscribe((data: P009Usuario[]) => {
      this.memberlist = data;
    });
    this.resetTablas();
    this.usuariosActivos = false;
    this.usuariosTabla = true;
  }

  Get_Socios() {
    this.service.Get_Socios().subscribe((data: P009Socio[]) => {
      this.sociolist = data;
    });
    this.resetTablas();
    this.usuariosActivos = true;
    this.socioTabla = true;
  }

  Get_Nadadores() {
    this.service.Get_Nadadores().subscribe((data: P009Nadador[]) => {
      this.swimerlist = data;
    });

    this.resetTablas();
    this.usuariosActivos = true;
    this.nadadoresTabla = true;
  }

  Get_Entrenadores() {
    this.service.Get_Entrenadores().subscribe((data: P009Entrenador[]) => {
      this.entrenadorlist = data;
    });
    this.resetTablas();
    this.usuariosActivos = true;
    this.entrenadoresTabla = true;
  }

  Get_Junta() {
    this.service.Get_Junta().subscribe((data: P009GetJuntaDirectivaDto[]) => {
      this.juntalist = data;
    });
    this.resetTablas();
    this.usuariosActivos = true;
    this.juntaTabla = true;
  }

  gotoFormulario() {
    this.router.navigate(['/add_edit_user']);
  }

  gotoFormularioJunta() {
    this.router.navigate(['/add_edit_miembroJunta']);
  }
  private resetTablas() {
    this.entrenadoresTabla = false;
    this.socioTabla = false;
    this.usuariosTabla = false;
    this.nadadoresTabla = false;
    this.juntaTabla = false;
  }

  actualizarAllCategorias() {
    this.service.actualizarAllCategorias();
    this.mostrarConfirmacion = false;
  }
  abrirConfirmacion() {
    this.mostrarConfirmacion = true;
  }
  cancelarActualizacion() {
    this.mostrarConfirmacion = false;
  }
  getMisNadadores() {
    this.service.Get_MisNadadores().subscribe((data: P009Nadador[]) => {
      this.swimerlist = data;
    });
  }

  Get_NadadoresForSocio(id: number) {
    this.service.findNadadoresBySocio(id).subscribe((data: P009Nadador[]) => {
      this.swimerlist = data;
    });
  }

  Get_NadadoresForEntrenador(id: number) {
    this.service
      .findNadadoresByEntrenador(id)
      .subscribe((data: P009Nadador[]) => {
        this.swimerlist = data;
      });
  }

  actualizarContrasena() {
    this.router.navigate(['/edit_contrasena']);
  }
}
