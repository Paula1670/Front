import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Opcion } from '../../Models/Desplegable/Opcion';
import { ActivatedRoute, Router } from '@angular/router';
import { F010Service } from '../../Services/Private/F010.service';
import { OpcionEstado } from '../../Core/Constants/Constantes';
import { F010Update_ContratoDto } from '../../Models/Private/DtosF010/F010Update_ContratoDto';
import { F010Create_ContratoDto } from '../../Models/Private/DtosF010/F010Create_ContratoDto';
import { F009GetSociosDto } from '../../Models/Private/DtosF009/F009Get_SociosDto';
import { F009Service } from '../../Services/Private/F009.service';
import { F009GetCuotasDto } from '../../Models/Private/DtosF009/F009Get_CuotasDto';

@Component({
  selector: 'app-F005Contratos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './F005Contratos.component.html',
  styleUrls: ['./F005Contratos.component.scss'],
})
export class F005ContratosComponent implements OnInit {
  contratoForm: FormGroup;
  editMode?: boolean;
  IDMiCuota?: number;

  opcionCuota: Opcion[] = [];
  // opcionSocio: Opcion[] = OpcionSocio;
  opcionEstado: Opcion[] = OpcionEstado;
  opcionSocio: Opcion[] = [];
  opcionCuotasPosibles: Opcion[] = [];

  constructor(
    private f010Service: F010Service,
    private router: Router,
    private fb: FormBuilder,
    private f009Service: F009Service,

    private route: ActivatedRoute
  ) {
    this.contratoForm = this.fb.group({
      cuotaAsociada: [null, [Validators.required]],
      Socio: [null, [Validators.required]],
      FechaVencimiento: [null, [Validators.required]],
      FechaInicio: [null, [Validators.required]],
      Estado: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];

      this.IDMiCuota = params['id'];

      if (this.editMode && this.IDMiCuota) {
        this.Get_Contrato(this.IDMiCuota);
      }
      this.findSocios();
      this.findCuotas();
    });
  }

  Get_Contrato(id: number) {
    this.f010Service.Get_Contrato(id).subscribe((data: any) => {
      const fechaInicio = new Date(data.FechaInicio)
        .toISOString()
        .split('T')[0];
      const fechaVencimiento = new Date(data.FechaVencimiento)
        .toISOString()
        .split('T')[0];

      this.contratoForm.get('FechaInicio')?.patchValue(fechaInicio);
      this.contratoForm.get('FechaVencimiento')?.patchValue(fechaVencimiento);
      this.contratoForm
        .get('Estado')
        ?.patchValue(data.Estado === 'Pagado' ? 'Pagado' : 'Pendiente');
      this.contratoForm.get('Socio')?.patchValue(data.Socio);
      this.contratoForm.get('tipoCuota')?.patchValue(data.IDMiCuota);
    });
  }

  Update_Contrato(id: number | undefined) {
    const updateF010Dto: F010Update_ContratoDto = {
      FechaInicio: this.contratoForm.value.FechaInicio,
      FechaVencimiento: this.contratoForm.value.FechaVencimiento,
      Estado: this.contratoForm.value.Estado,
    };
    if (id) {
      this.f010Service.Update_Contrato(id, updateF010Dto).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Haz lo que necesites con la respuesta del servidor
          this.router.navigate(['/contratos']);
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
          // Maneja el error según tus necesidades
        }
      );
    }
  }

  Add_Contrato() {
    let createF010Dto: F010Create_ContratoDto = {
      Estado: this.contratoForm.value.Estado,
      FechaInicio: this.contratoForm.value.FechaInicio,
      FechaVencimiento: this.contratoForm.value.FechaVencimiento,
      Socio: this.contratoForm.value.Socio,
      CuotasPosibles: this.contratoForm.value.cuotaAsociada,
    };
    console.log(createF010Dto);
    this.f010Service.Create_Contrato(createF010Dto).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Haz lo que necesites con la respuesta del servidor
        this.router.navigate(['/contratos']);
      },

      (error) => {
        console.error('Error al llamar al endpoint:', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private findSocios() {
    this.f009Service.findSocios().subscribe((data: F009GetSociosDto[]) => {
      this.opcionSocio = data.map((socio: F009GetSociosDto) => {
        return {
          valor: socio.IDSocio,
          etiqueta: socio.nombreUsuario + ' ' + socio.apellidoUsuario,
        };
      });
    });
  }

  private findCuotas() {
    this.f009Service.findCuotas().subscribe((data: F009GetCuotasDto[]) => {
      this.opcionCuota = data.map((cuota: F009GetCuotasDto) => {
        return {
          valor: cuota.IdCuota,
          etiqueta:
            (cuota.Federado ? 'Federado: ' : 'No Federado: ') + cuota.Nombre,
        };
      });
    });
  }
}
