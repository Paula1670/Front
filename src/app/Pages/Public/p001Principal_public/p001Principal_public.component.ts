import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Nav_Bar_publicComponent } from '../../../Components/Nav_Bars/Nav_Bar_public/Nav_Bar_public.component';
import { Nav_Bar_JuntaComponent } from '../../../Components/Nav_Bars/Nav_Bar_Junta/Nav_Bar_Junta.component';

@Component({
  selector: 'app-p001Principal_public',
  standalone: true,
  imports: [
    CommonModule,
    Nav_Bar_publicComponent,
    HeaderComponent,
    FooterComponent,
    Nav_Bar_JuntaComponent,
  ],
  templateUrl: './p001Principal_public.component.html',
  styleUrls: ['./p001Principal_public.component.scss'],
})
export class P001Principal_publicComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
