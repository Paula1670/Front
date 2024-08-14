import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { F004Service } from '../../Services/Public/F004.service';
import { F004UpdateCuotaDto } from '../../Models/Public/DtosF004/F004Update_Cuota';
import { F004GetCuotaDto } from '../../Models/Public/DtosF004/F004Get_Cuota';

@Component({
  selector: 'app-F004CuotasPosibles',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './F004CuotasPosibles.component.html',
  styleUrls: ['./F004CuotasPosibles.component.scss'],
})
export class F004CuotasPosiblesComponent implements OnInit {
  cuotasForm: FormGroup;
  editMode?: boolean;
  IDCuota?: number;
  constructor(
    private fb: FormBuilder,
    private f004Service: F004Service,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cuotasForm = this.fb.group({
      Nombre: ['', [Validators.required]],
      Precio: ['', [Validators.required]],
      Federado: ['', [Validators.required]],
      cuotas: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.IDCuota = params['IDCuota'];
      if (this.editMode && this.IDCuota) {
        this.Get_Cuota(this.IDCuota);
      }
    });
  }

  Add_Cuota() {
    let createF004Dto = {
      Nombre: this.cuotasForm.value.Nombre,
      Precio: this.cuotasForm.value.Precio,
      Federado: this.cuotasForm.value.Federado,
    };

    this.f004Service
      .Create_Cuota(createF004Dto)

      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    this.router.navigate(['/cuotas']);
  }
  Edit_Cuota(id: number | undefined) {
    let updateF004Dto: F004UpdateCuotaDto = {
      Nombre: this.cuotasForm.value.Nombre,
      Precio: this.cuotasForm.value.Precio,
      Federado: this.cuotasForm.value.Federado,
    };

    if (id) {
      this.f004Service.Update_Cuota(id, updateF004Dto).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
    this.router.navigate(['/cuotas']);
  }

  Get_Cuota(id: number) {
    this.f004Service.Get_Cuota(id).subscribe((data: F004GetCuotaDto) => {
      this.cuotasForm.get('Nombre')?.patchValue(data.Nombre);
      this.cuotasForm.get('Precio')?.patchValue(data.Precio);
      this.cuotasForm.get('Federado')?.patchValue(data.Federado);
    });
  }
}
