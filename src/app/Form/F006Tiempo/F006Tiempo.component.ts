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
import { F009GetNadadoresDto } from '../../Models/Private/DtosF009/F009Get_NadadoresDto';
import { F009Service } from '../../Services/Private/F009.service';
import { TemporadaEnum } from '../../Core/Constants/Enums/TemporadaEnum';
import { P009Nadador } from '../../Models/Private/DtosP009/P009Get_NadadoresDto';
import { FooterComponent } from '../../Components/Footer/Footer.component';

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
  opcionNadador: Opcion[] = [];
  opcionEstilo: Opcion[] = OpcionEstilo;
  opcionPrueba: Opcion[] = OpcionPrueba;
  opcionPiscina: Opcion[] = OpcionPiscina;
  opcionGenero: Opcion[] = OpcionGenero;
  opcionTemporada: Opcion[] = OpcionTemporada;
mostrarConfirmacion:boolean=false;
  constructor(
    private f006Service: F006Service,
    private router: Router,
    private fb: FormBuilder,
    private f009Service: F009Service,
    private route: ActivatedRoute
  ) {
    this.tiempoForm = this.fb.group({});
    this.findNadadores();
  }
inicialize(){
  this.tiempoForm = this.fb.group({
    tiempo: ['', [Validators.required]],
    prueba: [null, [Validators.required]],
    piscina: [null, [Validators.required]],
    estilo: [null, [Validators.required]],
    nadador: this.editMode ? [''] : ['', [Validators.required]],
    FechaMarcaNadador: [null, [Validators.required]],
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
    this.inicialize();
  }

  Get_Tiempo(id: number) {
    this.f006Service.Get_Tiempo(id).subscribe((data: any) => {
      const FechaMarcaNadador = new Date(data.FechaMarcaNadador)
        .toISOString()
        .split('T')[0];

      this.tiempoForm.get('tiempo')?.patchValue(data.Tiempo);

      this.tiempoForm.get('temporada')?.patchValue(data.Temporada);

      this.tiempoForm.get('prueba')?.patchValue(data.Prueba);

      this.tiempoForm.get('piscina')?.patchValue(data.Piscina);

      this.tiempoForm.get('estilo')?.patchValue(data.Estilo);

      this.tiempoForm
        .get('FechaMarcaNadador')
        ?.patchValue(FechaMarcaNadador);
    });
  }

  Update_Tiempo(id: number | undefined) {

    if (this.tiempoForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    const updateF006Dto: F006Update_TiempoDto = {
      Tiempo: this.tiempoForm.value.tiempo,
      Temporada: TemporadaEnum.Invierno,
      Prueba: this.tiempoForm.value.prueba,
      Piscina: this.tiempoForm.value.piscina,
      FechaMarcaNadador: this.tiempoForm.value.FechaMarcaNadador,
      Estilo: this.tiempoForm.value.estilo,
    };

    if (id) {
      this.f006Service.Update_Tiempo(id, updateF006Dto).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/tiempos']);
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
          // Maneja el error según tus necesidades
        }
      );
    }
  }

  Add_Tiempo() {
    if (this.tiempoForm.invalid) {
      console.log(this.tiempoForm.value);
      this.markAllFieldsAsTouched();
      return;
    }
    let createF006Dto: F006CreateTiempoDto = {
      Estilo: this.tiempoForm.value.estilo,
      Prueba: this.tiempoForm.value.prueba,
      Piscina: this.tiempoForm.value.piscina,
      Tiempo: this.tiempoForm.value.tiempo,
      IDNadador: this.tiempoForm.value.nadador,
      Temporada: TemporadaEnum.Invierno,
      FechaMarcaNadador: this.tiempoForm.value.FechaMarcaNadador,
    };
    console.log("hola");
    console.log(createF006Dto);
    this.f006Service.Create_Tiempo(createF006Dto).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/tiempos']);
      },
      (error) => {
        console.error('Error al llamar al endpoint:', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private findNadadores() {
    this.f009Service
      .findNadadores()
      .subscribe((data: F009GetNadadoresDto[]) => {
        this.opcionNadador = data.map((nadador: F009GetNadadoresDto) => {
          return {
            valor: nadador.IDNadador,
            etiqueta: nadador.nombreUsuario + ' ' + nadador.apellidoUsuario,
          };
        });
      });
  }

  Get_NadadoresForEntrenador(id: number) {
    this.f009Service
      .findNadadoresByEntrenador(id)
      .subscribe((data: P009Nadador[]) => {
        this.opcionNadador = data.map((nadador: P009Nadador) => {
          return {
            valor: nadador.IDUsuario,
            etiqueta: nadador.Nombre + ' ' + nadador.Apellido,
          };
        });
      });
  }

  actualizar() {
    
    this.mostrarConfirmacion = true;
  }

  goBack(){this.mostrarConfirmacion = false;
    this.router.navigate(['/tiempos']);
  }
  notGoBack(){this.mostrarConfirmacion = false}

  markAllFieldsAsTouched() {
    Object.keys(this.tiempoForm.controls).forEach(field => {
      const control = this.tiempoForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
