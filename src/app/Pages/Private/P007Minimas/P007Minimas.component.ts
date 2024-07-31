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
  regionalList: P007Minima[] = [];
  nacionalList: P007Minima[] = [];
  europeolist: P007Minima[] = [];
  mundiallist: P007Minima[] = [];
  olimpicolist: P007Minima[] = [];

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
        if (this.esEntrenador) {
          this.GetMinimas();
        } else if (data.user?.idUsuario !== undefined) {
          this.GetGeneroCategoriaByIDUser(data.user?.idUsuario).subscribe(
            (data: P007GetGeneroCategoriaDto) => {
              this.genero = data.Genero;
              this.categoria = data.IDCategoria;
              this.categoriaNombre = data.Categoria;
              this.GetMinimas();
            }
          );
        } else {
          console.error('idUsuario es undefined');
        }
      },
    });
  }
  GetMinimas() {
    this.Get_MinimasEuropeas();
    this.Get_MinimasRegionales();
    this.Get_MinimasMundiales();
    this.Get_MinimasNacionales();
    this.Get_MinimasOlimpicas();
  }
  Get_MinimasEuropeas() {
    this.service
      .Get_MinimasByFilters({
        campeonato: CampeonatoEnum.Continental,
        genero: this.genero,
        categoria: this.categoria,
      })
      .subscribe((data: any) => {
        this.europeolist = data;
      });
  }

  Get_MinimasRegionales() {
    this.service
      .Get_MinimasByFilters({
        campeonato: CampeonatoEnum.Regional,
        genero: this.genero,
        categoria: this.categoria,
      })
      .subscribe((data: any) => {
        this.regionalList = data;
      });
  }

  Get_MinimasNacionales() {
    this.service
      .Get_MinimasByFilters({
        campeonato: CampeonatoEnum.Nacional,
        genero: this.genero,
        categoria: this.categoria,
      })
      .subscribe((data: any) => {
        this.nacionalList = data;
      });
  }

  Get_MinimasMundiales() {
    this.service
      .Get_MinimasByFilters({
        campeonato: CampeonatoEnum.Mundial,
        genero: this.genero,
        categoria: this.categoria,
      })
      .subscribe((data: any) => {
        this.mundiallist = data;
      });
  }

  Get_MinimasOlimpicas() {
    this.service
      .Get_MinimasByFilters({
        campeonato: CampeonatoEnum.Olimpico,
        genero: this.genero,
        categoria: this.categoria,
      })
      .subscribe((data: any) => {
        this.olimpicolist = data;
      });
  }

  /*
  Get_MinimasByAno() {
    this.service.Get_MinimasByAno(2024).subscribe((data: any) => {
      this.europeolist = data;
    });
  }

  Get_MinimasByCategoria() {
    this.service.Get_MinimasByCategoria(1).subscribe((data: any) => {
      this.categoriaList = data;
    });
  }*/

  gotoFormulario() {
    this.router.navigate(['/add_edit_minima']);
  }

  Get_MinimasByFilters(filtros: FiltrosMinimaDto) {
    this.service
      .Get_MinimasByFilters(filtros)
      .subscribe((data: P007Minima[]) => {
        this.europeolist = data;
      });
  }

  GetGeneroCategoriaByIDUser(id: number) {
    return this.service.GetGeneroCategoriaByIDUser(id);
  }
}
