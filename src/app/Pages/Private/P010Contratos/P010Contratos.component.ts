import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Nav_Bar_JuntaComponent } from '../../../Components/Nav_Bars/Nav_Bar_Junta/Nav_Bar_Junta.component';
import { Table_ContratosComponent } from '../../../Components/Tables/Table_Contratos/Table_Contratos.component';
import { P010Contrato } from '../../../Models/Private/DtosP010/P010Get_contratosDto';
import { P010Service } from '../../../Services/Private/P010.service';

@Component({
  selector: 'app-P010Contratos',
  standalone: true,
  imports: [
    CommonModule,
    Table_ContratosComponent,
    Nav_Bar_JuntaComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './P010Contratos.component.html',
  styleUrls: ['./P010Contratos.component.scss'],
})
export class P010ContratosComponent implements OnInit {
  contratolist: P010Contrato[] = [];

  constructor(private service: P010Service) {}

  ngOnInit() {
    this.Get_Contratos();
  }

  Get_Contratos() {
    this.service.Get_Contratos().subscribe((data: any) => {
      this.contratolist = data;
    });
  }
}
