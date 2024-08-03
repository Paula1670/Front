import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Opcion } from '../../Models/Desplegable/Opcion';
import { ActivatedRoute, Router } from '@angular/router';
import { OpcionPuesto } from '../../Core/Constants/Constantes';
import { F003Service } from '../../Services/Private/F003.service';
import { HeaderComponent } from '../../Components/Header/Header.component';
import { F003Create_MiembroJuntaDto } from '../../Models/Private/DtosF003/F003Create_MiembroJuntaDto copy';
import { F003Update_MiembroJuntaDto } from '../../Models/Private/DtosF003/F003Update_MiembroJuntaDto';
import { P009Usuario } from '../../Models/Private/DtosP009/P009Get_UsersDto';
import { P009GetJuntaDirectivaDto } from '../../Models/Private/DtosP009/P009GetJuntaDirectivaDto';
import { F003Usuario } from '../../Models/Private/DtosF003/F003Get_UsersDto';

@Component({
  selector: 'app-F003Junta',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './F003Junta.component.html',
  styleUrls: ['./F003Junta.component.scss'],
})
export class F003JuntaComponent implements OnInit {
  juntaForm: FormGroup;
  editMode?: boolean;
  idUser?: number;
  opcionPuesto: Opcion[] = [];
  opcionUsuario: Opcion[] = [];
  constructor(
    private f003Service: F003Service,
    private router: Router,
    private fb: FormBuilder,

    private route: ActivatedRoute
  ) {
    this.juntaForm = this.fb.group({
      puesto: ['', [Validators.required]],
      fechaInicioCargo: ['', [Validators.required]],
      fechaTerminoCargo: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.idUser = params['idUser'];
      if (this.editMode && this.idUser) {
        this.Get_User(this.idUser);
      }
    });
    this.opcionPuesto = OpcionPuesto;
    this.findUsuarios();
  }

  Get_User(id: number) {
    this.f003Service
      .Get_UserMiembroJunta(id)
      .subscribe((data: P009GetJuntaDirectivaDto) => {
        console.log(data);
        this.juntaForm.get('puesto')?.patchValue(data.Puesto);
        this.juntaForm
          .get('fechaTerminoCargo')
          ?.patchValue(data.FechaInicioCargo);
      });
  }

  Update_MiembroJunta(id: number) {
    console.log(id);
    const updateF009Dto: F003Update_MiembroJuntaDto = {
      puesto: this.juntaForm.value.puesto,
      fechaTerminoCargo: this.juntaForm.value.fechaTerminoCargo,
    };
    console.log(updateF009Dto);
    if (id) {
      this.f003Service.Update_MiembroJunta(id, updateF009Dto).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
    this.router.navigate(['/users']);
  }

  Add_MiembroJunta() {
    let createF003Dto: F003Create_MiembroJuntaDto = {
      puesto: this.juntaForm.value.puesto,
      IDUsuario: this.juntaForm.value.usuario,
      fechaInicioCargo: this.juntaForm.value.fechaInicioCargo,
      fechaTerminoCargo: this.juntaForm.value.fechaTerminoCargo,
    };

    this.f003Service
      .Add_MiembroJunta(createF003Dto, createF003Dto.IDUsuario)
      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    this.router.navigate(['/users']);
  }

  private findUsuarios() {
    this.f003Service.findSUsuarios().subscribe((data: F003Usuario[]) => {
      console.log(this.opcionUsuario);
      this.opcionUsuario = data.map((usuario: F003Usuario) => {
        return {
          valor: usuario.IDUsuario,
          etiqueta: usuario.Nombre + ' ' + usuario.Apellido,
        };
      });
    });
  }
}
