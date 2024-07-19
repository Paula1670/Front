import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';
import { CommonModule } from '@angular/common';
import { F006Service } from '../../Services/Private/F006.service';
import { ActivatedRoute, Router } from '@angular/router';
import { F006Update_TiempoDto } from '../../Models/Private/DtosF006/F006Update_TiempoDto';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { F006CreateTiempoDto } from '../../Models/Private/DtosF006/F006Create_TiempoDto';
import { Opcion } from '../../Models/Desplegable/Opcion';
import {
  OpcionEstilo,
  OpcionGenero,
  OpcionPiscina,
  OpcionPrueba,
  OpcionTemporada,
} from '../../Core/Constants/Constantes';

@Component({
  selector: 'app-F006Tiempo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './F006Tiempo.component.html',
  styleUrls: ['./F006Tiempo.component.scss'],
})
export class F006TiempoComponent implements OnInit {
  tiempoForm: FormGroup;
  editMode?: boolean;
  idTiempo?: number;

  opcionEstilo: Opcion[] = OpcionEstilo;
  opcionPrueba: Opcion[] = OpcionPrueba;
  opcionPiscina: Opcion[] = OpcionPiscina;
  opcionGenero: Opcion[] = OpcionGenero;
  opcionTemporada: Opcion[] = OpcionTemporada;

  constructor(
    private f006Service: F006Service,
    private router: Router,
    private fb: FormBuilder,

    private route: ActivatedRoute
  ) {
    this.tiempoForm = this.fb.group({
      tiempo: ['', [Validators.required]],
      prueba: [null, [Validators.required]],
      piscina: [null, [Validators.required]],
      estilo: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.idTiempo = params['idTiempo'];
      if (this.editMode && this.idTiempo) {
        this.Get_Tiempo(this.idTiempo);
      }
    });
  }

  Get_Tiempo(id: number) {
    console.log(id);
    this.f006Service.Get_Tiempo(id).subscribe((data: any) => {
      this.tiempoForm.get('tiempo')?.patchValue(data.Tiempo);

      this.tiempoForm.get('temporada')?.patchValue(data.Temporada);

      this.tiempoForm.get('prueba')?.patchValue(data.Prueba);

      this.tiempoForm.get('piscina')?.patchValue(data.Piscina);

      this.tiempoForm.get('estilo')?.patchValue(data.Estilo);
    });
  }

  Update_Tiempo(id: number | undefined) {
    const updateF006Dto: F006Update_TiempoDto = {
      Tiempo: this.tiempoForm.value.tiempo,
      Temporada: this.tiempoForm.value.temporada,
      Prueba: this.tiempoForm.value.prueba,
      Piscina: this.tiempoForm.value.piscina,
      Categoria: this.tiempoForm.value.categoria,
      Estilo: this.tiempoForm.value.estilo,
    };
    console.log(updateF006Dto);
    if (id) {
      this.f006Service.Update_Tiempo(id, updateF006Dto).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Haz lo que necesites con la respuesta del servidor
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
          // Maneja el error según tus necesidades
        }
      );
    }
  }

  Add_Tiempo() {
    let createF006Dto = new F006CreateTiempoDto();

    createF006Dto.Estilo = this.tiempoForm.value.estilo;
    createF006Dto.Prueba = this.tiempoForm.value.prueba;
    createF006Dto.Piscina = this.tiempoForm.value.piscina;
    createF006Dto.Tiempo = this.tiempoForm.value.tiempo;

    this.f006Service.Create_Tiempo(createF006Dto).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Haz lo que necesites con la respuesta del servidor
      },
      (error) => {
        console.error('Error al llamar al endpoint:', error);
        // Maneja el error según tus necesidades
      }
    );
  }
}
