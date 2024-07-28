import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Nav_Bar_JuntaComponent } from '../../../Components/Nav_Bars/Nav_Bar_Junta/Nav_Bar_Junta.component';
import { Table_ContratosComponent } from '../../../Components/Tables/Table_Contratos/Table_Contratos.component';
import { P010ContratoDto } from '../../../Models/Private/DtosP010/P010Get_contratosDto';
import { P010Service } from '../../../Services/Private/P010.service';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-P010Contratos',
  standalone: true,
  imports: [
    CommonModule,
    Table_ContratosComponent,
    Final_Nav_BarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './P010Contratos.component.html',
  styleUrls: ['./P010Contratos.component.scss'],
})
export class P010ContratosComponent implements OnInit {
  contratolist: P010ContratoDto[] = [];
  authState$: Observable<AuthState>;
  esJunta?: boolean;
  constructor(private service: P010Service, private authService: AuthService) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.authState$.subscribe({
      next: (data) => {
        this.esJunta = data.user?.juntaDirectiva;
        if (this.esJunta) this.Get_Contratos();
        else if (data.user?.idUsuario !== undefined) {
          this.Get_ContratosByUser(data.user.idUsuario);
        } else {
          console.error('idUsuario es undefined');
        }
      },
    });
  }

  Get_Contratos() {
    this.service.Get_Contratos().subscribe((data: any) => {
      this.contratolist = data;
    });
  }

  /* Get_ContratosBySocio(id:number) {
    this.service.Get_ContratosBySocio(id).subscribe((data: any) => {
      this.contratolist = data;
    });
  }*/

  Get_ContratosByUser(id: number) {
    this.service.Get_ContratosByUser(id).subscribe((data: any) => {
      this.contratolist = data;
    });
    console.log(this.contratolist);
  }
}
