import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav_Bar_publicComponent } from '../../../Components/Nav_Bars/Nav_Bar_public/Nav_Bar_public.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';

@Component({
  selector: 'app-p002Equipo',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './p002Equipo.component.html',
  styleUrls: ['./p002Equipo.component.scss'],
})
export class P002EquipoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
