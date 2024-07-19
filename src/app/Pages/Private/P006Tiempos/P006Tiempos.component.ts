import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Nav_Bar_ENComponent } from '../../../Components/Nav_Bars/Nav_Bar_EN/Nav_Bar_EN.component';
import { Time } from '../../../Models/time';
import { CommonModule } from '@angular/common';
import { Table_TiemposComponent } from '../../../Components/Tables/Table_Tiempos/Table_Tiempos.component';
import { P006Service } from '../../../Services/Private/p006.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-P006Tiempos',
  standalone: true,
  imports: [
    CommonModule,
    Nav_Bar_ENComponent,
    HeaderComponent,
    Table_TiemposComponent,
  ],
  templateUrl: './P006Tiempos.component.html',
  styleUrls: ['./P006Tiempos.component.scss'],
})
export class P006TiemposComponent implements OnInit {
  timelist: Time[] = [];

  constructor(private service: P006Service, private router: Router) {}
  ngOnInit() {
    this.Get_Tiempos();
  }

  Get_Tiempos() {
    this.service.Get_Tiempos().subscribe((data: any) => {
      this.timelist = data;
    });
  }
  gotoFormulario() {
    this.router.navigate(['/add_edit_tiempo']);
  }
}
