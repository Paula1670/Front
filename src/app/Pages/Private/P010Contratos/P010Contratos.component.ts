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

  constructor(private service: P010Service, private authService: AuthService) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.Get_Contratos();
  }

  Get_Contratos() {
    this.service.Get_Contratos().subscribe((data: any) => {
      this.contratolist = data;
    });
  }
}
