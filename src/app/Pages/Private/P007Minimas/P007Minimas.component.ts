import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav_Bar_ENComponent } from '../../../Components/Nav_Bars/Nav_Bar_EN/Nav_Bar_EN.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Table_MinimasComponent } from '../../../Components/Tables/Table_Minimas/Table_Minimas.component';
import {
  P007Get_MinimasDto,
  P007Minima,
} from '../../../Models/Private/DtosP007/P007Get_MinimasDto';
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
import { CategoriaEnum } from '../../../Core/Constants/Enums/CategoriaEnum';
import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum copy 2';
import { P007GetGeneroCategoriaDto } from '../../../Models/Private/DtosP007/P007GetGeneroCategoriaDto';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum copy';
import { FiltrosMinimaDto } from '../../../Models/Private/DtosP007/filtros_minima.dto';

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
  categoriaList: CategoriaEnum[] = [];
  campeonatoList: CampeonatoEnum[] = [];
  esEntrenador?: boolean;
  genero?: GeneroEnum;
  categoriaNombre?: CategoriaEnum;
  categoria?: number;
  constructor(
    private service: P007Service,
    private router: Router,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.authState$.subscribe({
      next: (data) => {
        this.esEntrenador = data.user?.entrenador;
        if (this.esEntrenador) this.Get_Minimas();
        else if (data.user?.idUsuario !== undefined) {
          this.GetGeneroCategoriaByIDUser(data.user?.idUsuario).subscribe(
            (data: P007GetGeneroCategoriaDto) => {
              console.log(data.Genero);
              console.log(data.IDCategoria);
              console.log(data.Categoria);
              this.genero = data.Genero;
              this.categoria = data.IDCategoria;
              this.categoriaNombre = data.Categoria;
              this.Get_MinimasByFilters({
                genero: this.genero,
                categoria: this.categoria,
              });
            }
          );
        } else {
          console.error('idUsuario es undefined');
        }
      },
    });
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
      this.categoriaList = data;
    });
  }

  gotoFormulario() {
    this.router.navigate(['/add_edit_minima']);
  }

  Get_MinimasByFilters(filtros: FiltrosMinimaDto) {
    this.service
      .Get_MinimasByFilters(filtros)
      .subscribe((data: P007Minima[]) => {
        this.minimalist = data;
      });
  }

  GetGeneroCategoriaByIDUser(id: number) {
    return this.service.GetGeneroCategoriaByIDUser(id);
  }
}
