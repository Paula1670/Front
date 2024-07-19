import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../Components/Tables/Table/Table.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Nav_Bar_JuntaComponent } from '../../../Components/Nav_Bars/Nav_Bar_Junta/Nav_Bar_Junta.component';
import { P009Usuario } from '../../../Models/Private/DtosP009/P009Get_UsersDto';
import { P009Service } from '../../../Services/Private/P009.service';
import { Router } from '@angular/router';
import { Table_NadadoresComponent } from '../../../Components/Tables/Table_Nadadores/Table_Nadadores.component';
import { P009Nadador } from '../../../Models/Private/DtosP009/P009Get_NadadoresDto';
import { Table_SociosComponent } from '../../../Components/Tables/Table_Socios/Table_Socios.component';
import { Table_EntrenadoresComponent } from '../../../Components/Tables/Table_Entrenadores/Table_Entrenadores.component';
import { P009Entrenador } from '../../../Models/Private/DtosP009/P009Get_EntrenadoresDto';
import { P009Socio } from '../../../Models/Private/DtosP009/P009Get_SociosDto';

@Component({
  selector: 'app-P009Usuarios',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    Nav_Bar_JuntaComponent,
    HeaderComponent,
    FooterComponent,
    Table_NadadoresComponent,
    Table_SociosComponent,
    Table_EntrenadoresComponent,
  ],
  templateUrl: './P009Usuarios.component.html',
  styleUrls: ['./P009Usuarios.component.scss'],
})
export class P009UsuariosComponent implements OnInit {
  memberlist: P009Usuario[] = [];
  swimerlist: P009Nadador[] = [];
  entrenadorlist: P009Entrenador[] = [];
  sociolist: P009Socio[] = [];
  usuariosActivos: boolean = true;
  entrenadoresTabla: boolean = false;
  nadadoresTabla: boolean = false;
  usuariosTabla: boolean = false;
  socioTabla: boolean = false;
  mostrarConfirmacion: boolean = false;
  constructor(private service: P009Service, private router: Router) {}
  ngOnInit() {
    this.Get_UsersActivated();
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
  gotoFormulario() {
    this.router.navigate(['/add_edit_user']);
  }

  private resetTablas() {
    this.entrenadoresTabla = false;
    this.socioTabla = false;
    this.usuariosTabla = false;
    this.nadadoresTabla = false;
  }

  actualizarAllCategorias() {
    this.service.actualizarAllCategorias();
  }
  abrirConfirmacion() {
    this.mostrarConfirmacion = true;
  }
  cancelarActualizacion() {
    this.mostrarConfirmacion = false;
  }
}
