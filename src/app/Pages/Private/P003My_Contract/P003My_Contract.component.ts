import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Nav_BarComponent } from '../../../Components/Nav_Bars/Nav_Bar/Nav_Bar.component';
import { Table_MisContratosComponent } from '../../../Components/Tables/Table_MisContratos/Table_MisContratos.component';
@Component({
  selector: 'app-P003My_Contract',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    Nav_BarComponent,
    Table_MisContratosComponent,
  ],
  templateUrl: './P003My_Contract.component.html',
  styleUrls: ['./P003My_Contract.component.scss'],
})
export class P003My_ContractComponent implements OnInit {
  // contratolist: Contrato[];

  constructor() {
    /* let contrato = new Contrato();
    this.contratolist = [contrato];*/
  }

  ngOnInit() {}

  /* pagado() {
    let contratoPagado = true; // Puedes cambiar este valor según tu lógica

    // Busca el elemento donde quieres mostrar el estado del contrato
    let estadoContratoElement = document.getElementById('estadoContrato');

    // Asigna el texto según si el contrato está pagado o no
    if (contratoPagado) {
      //estadoContratoElement.textContent = 'Contrato pagado';
    } else {
      //estadoContratoElement.textContent = 'Contrato no pagado';
    }
  }*/
}
