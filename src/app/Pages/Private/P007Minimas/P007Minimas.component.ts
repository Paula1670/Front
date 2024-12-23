import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Table_MinimasComponent } from '../../../Components/Tables/Table_Minimas/Table_Minimas.component';
import {
  P007Get_MinimasDto,
  P007Minima,
} from '../../../Models/Private/DtosP007/P007Get_MinimasDto';
import { P007Service } from '../../../Services/Private/P007.service';
import { ActivatedRoute, Router } from '@angular/router';
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
import { CampeonatoEnum } from '../../../Core/Constants/Enums/CampeonatoEnum';
import { P007GetGeneroCategoriaDto } from '../../../Models/Private/DtosP007/P007GetGeneroCategoriaDto';
import { GeneroEnum } from '../../../Core/Constants/Enums/GeneroEnum';
import { FiltrosMinimaDto } from '../../../Models/Private/DtosP007/filtros_minima.dto';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { F007Service } from '../../../Services/Private/F007.service';
import { F007GetCategoriasDto } from '../../../Models/Private/DtosF007/F007Get_CategoriasDto';
import { FooterComponent } from '../../../Components/Footer/Footer.component';

@Component({
  selector: 'app-P007Minimas',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    Table_MinimasComponent,
    ReactiveFormsModule,
    FooterComponent,
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

  minimaForm: FormGroup;
  opcionGenero: Opcion[] = OpcionGenero;
  opcionCategoria: Opcion[] = [];
  constructor(
    private service: P007Service,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private f007Service: F007Service
  ) {
    this.authState$ = this.authService.authState$;

    this.minimaForm = this.fb.group({
      categoria: [null, [Validators.required]],
    });
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
    this.findCategorias();
  }
  GetMinimas() {
    this.service.findNadadorByUserId(this.authService.getUserFromCookies().idUsuario)
    .subscribe((idNadador: number) => {

    this.Get_MinimasEuropeas(idNadador);
    this.Get_MinimasRegionales(idNadador);
    this.Get_MinimasMundiales(idNadador);
    this.Get_MinimasNacionales(idNadador);
    this.Get_MinimasOlimpicas(idNadador);
    })
  }
  Get_MinimasEuropeas(idNadador:number) {
    //Si es entrenador, que me coja el valor de genero del formulario, sino, el del idUser
    this.service
      .Get_MinimasByFilters({
        IDNadador: this.esEntrenador ? undefined : idNadador,
        campeonato: CampeonatoEnum.Continental,
        genero: this.esEntrenador ? this.minimaForm.value.genero : this.genero,
        categoria: this.esEntrenador
          ? this.minimaForm.value.categoria
          : this.categoria,
      })
      .subscribe((data: any) => {
        this.europeolist = data;
      });
  }

  Get_MinimasRegionales(idNadador:number) {
   
        this.service
          .Get_MinimasByFilters({
            IDNadador: this.esEntrenador ? undefined : idNadador,
            campeonato: CampeonatoEnum.Regional,
            genero: this.esEntrenador ? this.minimaForm.value.genero : this.genero,
            categoria: this.esEntrenador ? this.minimaForm.value.categoria : this.categoria,
          })
          .subscribe((data: any) => {
            this.regionalList = data;
          });
      
  }
  
  

  Get_MinimasNacionales(idNadador:number) {
    this.service
      .Get_MinimasByFilters({
        IDNadador: this.esEntrenador ? undefined : idNadador,
        campeonato: CampeonatoEnum.Nacional,
        genero: this.esEntrenador ? this.minimaForm.value.genero : this.genero,
        categoria: this.esEntrenador
          ? this.minimaForm.value.categoria
          : this.categoria,
      })
      .subscribe((data: any) => {
        this.nacionalList = data;
      });
  }

  Get_MinimasMundiales(idNadador:number) {
    this.service
      .Get_MinimasByFilters({
        IDNadador: this.esEntrenador ? undefined : idNadador,
        campeonato: CampeonatoEnum.Mundial,
        genero: this.esEntrenador ? this.minimaForm.value.genero : this.genero,
        categoria: this.esEntrenador
          ? this.minimaForm.value.categoria
          : this.categoria,
      })
      .subscribe((data: any) => {
        this.mundiallist = data;
      });
  }

  Get_MinimasOlimpicas(idNadador:number) {
    this.service
      .Get_MinimasByFilters({
        IDNadador: this.esEntrenador ? undefined : idNadador,
        campeonato: CampeonatoEnum.Olimpico,
        genero: this.esEntrenador ? this.minimaForm.value.genero : this.genero,
        categoria: this.esEntrenador
          ? this.minimaForm.value.categoria
          : this.categoria,
      })
      .subscribe((data: any) => {
        this.olimpicolist = data;
      });
  }

  gotoFormulario() {
    this.router.navigate(['/add_edit_minima']);
  }

  Get_MinimasByFilters(filtros: FiltrosMinimaDto) {
    return this.service.Get_MinimasByFilters(filtros);
  }

  GetGeneroCategoriaByIDUser(id: number) {
    return this.service.GetGeneroCategoriaByIDUser(id);
  }

  private findCategorias() {
    this.f007Service
      .findCategorias()
      .subscribe((data: F007GetCategoriasDto[]) => {
        this.opcionCategoria = data.map((categoria: F007GetCategoriasDto) => {
          return {
            valor: categoria.IDCategoria,
            etiqueta: categoria.NombreCategoria + ' - ' + categoria.Genero,
          };
        });
      });
  }
}
