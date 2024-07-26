import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav_BarComponent } from '../../../Components/Nav_Bars/Nav_Bar/Nav_Bar.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';

@Component({
  selector: 'app-p001Principal_Site',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './p001Principal_Site.component.html',
  styleUrls: ['./p001Principal_Site.component.scss'],
})
export class P001Principal_SiteComponent implements OnInit {
  readmore: boolean = false;

  constructor() {}

  ngOnInit() {}
}
