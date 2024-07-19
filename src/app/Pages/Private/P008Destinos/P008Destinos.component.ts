import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav_Bar_JuntaComponent } from '../../../Components/Nav_Bars/Nav_Bar_Junta/Nav_Bar_Junta.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Table_DestinationComponent } from '../../../Components/Tables/Table_Destination/Table_Destination.component';
import { Destino } from '../../../Models/Destino';

@Component({
  selector: 'app-P008Destinos',
  standalone: true,
  imports: [
    CommonModule,
    Nav_Bar_JuntaComponent,
    HeaderComponent,
    Table_DestinationComponent,
  ],
  templateUrl: './P008Destinos.component.html',
  styleUrls: ['./P008Destinos.component.scss'],
})
export class P008DestinosComponent implements OnInit {
  destinolist: Destino[];

  constructor() {
    let destino = new Destino();
    this.destinolist = [destino];
  }

  ngOnInit() {}
}
