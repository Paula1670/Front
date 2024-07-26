import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav_Bar_ENComponent } from '../../../Components/Nav_Bars/Nav_Bar_EN/Nav_Bar_EN.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Table_MinimasComponent } from '../../../Components/Tables/Table_Minimas/Table_Minimas.component';
import { P007Minima } from '../../../Models/Private/DtosP007/P007Get_MinimasDto';
import { P007Service } from '../../../Services/Private/P007.service';
import { Router } from '@angular/router';
import {
  OpcionEstilo,
  OpcionGenero,
  OpcionPiscina,
  OpcionPrueba,
  OpcionTemporada,
} from '../../../Core/Constants/Constantes';
import { Opcion } from '../../../Models/Desplegable/Opcion';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-P007Minimas',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    Table_MinimasComponent,
  ],
  templateUrl: './P007Minimas.component.html',
  styleUrls: ['./P007Minimas.component.scss'],
})
export class P007MinimasComponent implements OnInit {
  minimalist: P007Minima[] = [];
  authState$: Observable<AuthState>;
  constructor(
    private service: P007Service,
    private router: Router,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.Get_Minimas();
  }

  Get_Minimas() {
    this.service.Get_Minimas().subscribe((data: any) => {
      this.minimalist = data;
    });
  }

  Get_MinimasByAno() {
    this.service.Get_MinimasByAno(2024).subscribe((data: any) => {
      this.minimalist = data;
    });
  }

  Get_MinimasByCategoria() {
    this.service.Get_MinimasByCategoria(1).subscribe((data: any) => {
      this.minimalist = data;
    });
  }
  gotoFormulario() {
    this.router.navigate(['/add_edit_minima']);
  }
}
