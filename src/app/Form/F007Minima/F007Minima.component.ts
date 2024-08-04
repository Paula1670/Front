import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { F007Update_Minima } from '../../Models/Private/DtosF007/F007Update_MinimaDto';
import { F007CreateMinimaDto } from '../../Models/Private/DtosF007/F007Create_MinimaDto';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { F007Service } from '../../Services/Private/F007.service';
import { Opcion } from '../../Models/Desplegable/Opcion';
import {
  OpcionCampeonato,
  OpcionEstilo,
  OpcionGenero,
  OpcionPiscina,
  OpcionPrueba,
  OpcionTemporada,
} from '../../Core/Constants/Constantes';
import { F007GetCategoriasDto } from '../../Models/Private/DtosF007/F007Get_CategoriasDto';
import { F007Get_MinimaDto } from '../../Models/Private/DtosF007/F007Get_MinimaDto';

@Component({
  selector: 'app-F007Minima',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './F007Minima.component.html',
  styleUrls: ['./F007Minima.component.scss'],
})
export class F007MinimaComponent implements OnInit {
  minimaForm: FormGroup;
  editMode?: boolean;
  idMinima?: number;

  opcionEstilo: Opcion[] = OpcionEstilo;
  opcionPrueba: Opcion[] = OpcionPrueba;
  opcionPiscina: Opcion[] = OpcionPiscina;
  opcionGenero: Opcion[] = OpcionGenero;
  opcionCategoria: Opcion[] = [];
  opcionTemporada: Opcion[] = OpcionTemporada;
  opcionCampeonato: Opcion[] = OpcionCampeonato;

  constructor(
    private f007Service: F007Service,
    private router: Router,
    private fb: FormBuilder,

    private route: ActivatedRoute
  ) {
    this.minimaForm = this.fb.group({
      tiempoMinimo: ['', [Validators.required]],
      temporada: [null, [Validators.required]],
      prueba: [null, [Validators.required]],
      piscina: [null, [Validators.required]],
      campeonato: [null, [Validators.required]],
      categoria: [null, [Validators.required]],
      estilo: [null, [Validators.required]],
      genero: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.idMinima = params['idMinima'];
      if (this.editMode && this.idMinima) {
        this.Get_Minima(this.idMinima);
      }
      this.findCategorias();
    });
  }

  Get_Minima(id: number) {
    this.f007Service.Get_Minima(id).subscribe((data: F007Get_MinimaDto) => {
      this.minimaForm.get('tiempoMinimo')?.patchValue(data.TiempoMinimo);

      this.minimaForm.get('temporada')?.patchValue(data.Temporada);

      this.minimaForm.get('prueba')?.patchValue(data.Prueba);

      this.minimaForm.get('piscina')?.patchValue(data.Piscina);

      this.minimaForm.get('campeonato')?.patchValue(data.Campeonato);

      this.minimaForm.get('categoria')?.patchValue(data.Categoria);

      this.minimaForm.get('estilo')?.patchValue(data.Estilo);

      this.minimaForm.get('genero')?.patchValue(data.Genero);
    });
  }

  Update_Minima(id: number | undefined) {
    const updateF007Dto: F007Update_Minima = {
      TiempoMinimo: this.minimaForm.value.tiempoMinimo,
      Temporada: this.minimaForm.value.temporada,
      Prueba: this.minimaForm.value.prueba,
      Piscina: this.minimaForm.value.piscina,
      Categoria: this.minimaForm.value.categoria,
      Estilo: this.minimaForm.value.estilo,
      Genero: this.minimaForm.value.genero,
      Campeonato: this.minimaForm.value.campeonato,
    };
    if (id) {
      this.f007Service.Update_Minima(id, updateF007Dto).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }

  Add_Minima() {
    let createF007Dto = new F007CreateMinimaDto();

    createF007Dto.TiempoMinimo = this.minimaForm.value.tiempoMinimo;
    createF007Dto.Temporada = this.minimaForm.value.temporada;
    createF007Dto.Prueba = this.minimaForm.value.prueba;
    createF007Dto.Piscina = this.minimaForm.value.piscina;
    createF007Dto.Categoria = this.minimaForm.value.categoria;
    createF007Dto.Estilo = this.minimaForm.value.estilo;
    createF007Dto.Genero = this.minimaForm.value.genero;
    createF007Dto.Campeonato = this.minimaForm.value.campeonato;
    this.f007Service.Create_Minima(createF007Dto).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error al llamar al endpoint:', error);
      }
    );
  }

  private findCategorias() {
    this.f007Service
      .findCategorias()
      .subscribe((data: F007GetCategoriasDto[]) => {
        this.opcionCategoria = data.map((categoria: F007GetCategoriasDto) => {
          return {
            valor: categoria.IDCategoria,
            etiqueta: categoria.NombreCategoria + '-' + categoria.Genero,
          };
        });
      });
  }
}
