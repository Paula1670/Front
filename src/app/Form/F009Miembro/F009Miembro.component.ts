import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';

import { ActivatedRoute, Router } from '@angular/router';
import { F009Service } from '../../Services/Private/F009.service';
import { F009Update_UserDto } from '../../Models/Private/DtosF009/F009Update_UserDto';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Opcion } from '../../Models/Desplegable/Opcion';
import { F009GetCuotasDto } from '../../Models/Private/DtosF009/F009Get_CuotasDto';
import { F009GetSociosDto } from '../../Models/Private/DtosF009/F009Get_SociosDto';
import { F009Get_EntrenadoresDto } from '../../Models/Private/DtosF009/F009Get_EntrenadoresDto';

@Component({
  selector: 'app-F009Miembro',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './F009Miembro.component.html',
  styleUrls: ['./F009Miembro.component.scss'],
})
export class F009MiembroComponent implements OnInit {
  userForm: FormGroup;
  editMode?: boolean;
  idUser?: number;
  opcionCuota: Opcion[] = [];
  opcionSocio: Opcion[] = [];
  opcionEntrenador: Opcion[] = [];
  constructor(
    private f009Service: F009Service,
    private router: Router,
    private fb: FormBuilder,

    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      fechaInscripcion: ['', [Validators.required]],
      genero: ['', [Validators.required]],

      crearSocio: [false],
      crearNadador: [false],
      crearEntrenador: [false],
      idCuota: [0],
      socioasociado: [0],
      entrenadorasociado: [0],
      especialidad: [''],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.idUser = params['idUser'];
      if (this.editMode && this.idUser) {
        this.Get_User(this.idUser);
      }
      this.findCuotas();
      this.findSocios();
      this.findEntrenadores();
    });
  }

  Get_User(id: number) {
    this.f009Service.Get_User(id).subscribe((data: any) => {
      this.userForm.get('nombre')?.patchValue(data.Nombre);
      this.userForm.get('apellido')?.patchValue(data.Apellido);
      this.userForm.get('contrasena')?.patchValue(data.Contrasena);
      this.userForm.get('direccion')?.patchValue(data.Direccion);
      this.userForm.get('genero')?.patchValue(data.Genero);
      this.userForm.get('telefono')?.patchValue(data.Telefono);
    });
  }

  Update_User(id: number | undefined) {
    const updateF009Dto: F009Update_UserDto = {
      Nombre: this.userForm.value.nombre,
      Apellido: this.userForm.value.apellido,
      Contrasena: this.userForm.value.contrasena,
      Direccion: this.userForm.value.direccion,
      Telefono: this.userForm.value.telefono,
      Genero: this.userForm.value.genero,
    };
    if (id) {
      this.f009Service.Update_User(id, updateF009Dto).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }

  Add_User() {
    let createF009Dto = {
      Nombre: this.userForm.value.nombre,
      Apellido: this.userForm.value.apellido,
      Contrasena: this.userForm.value.contrasena,
      Direccion: this.userForm.value.direccion,
      FechaInscripcion: this.userForm.value.fechaInscripcion,
      FechaNacimiento: this.userForm.value.fechaNacimiento,
      Genero: this.userForm.value.genero,
      Telefono: this.userForm.value.telefono,
      crearSocio: this.userForm.value.crearSocio,
      crearNadador: this.userForm.value.crearNadador,
      crearEntrenador: this.userForm.value.crearEntrenador,
      especialidad: this.userForm.value.especialidad,
      idCuota: this.userForm.value.idCuota,
      socioasociado: this.userForm.value.socioasociado,
      entrenadorasociado: this.userForm.value.entrenadorasociado,
    };

    this.f009Service.Create_User(createF009Dto).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
      },
      (error: any) => {
        console.error('Error al llamar al endpoint:', error);
      }
    );
  }

  opcionPersonal: Opcion[] = [
    { valor: 1, etiqueta: 'Soy socio' },
    { valor: 2, etiqueta: 'Soy nadador' },
    { valor: 3, etiqueta: 'Soy Entrenador' },
  ];

  private findCuotas() {
    this.f009Service.findCuotas().subscribe((data: F009GetCuotasDto[]) => {
      this.opcionCuota = data.map((cuota: F009GetCuotasDto) => {
        return {
          valor: cuota.IdCuota,
          etiqueta:
            (cuota.Federado ? 'Federado: ' : 'No Federado: ') + cuota.Nombre,
        };
      });
      console.log(data);
    });
  }

  private findSocios() {
    this.f009Service.findSocios().subscribe((data: F009GetSociosDto[]) => {
      this.opcionSocio = data.map((socio: F009GetSociosDto) => {
        return {
          valor: socio.IDSocio,
          etiqueta: socio.nombreUsuario + ' ' + socio.apellidoUsuario,
        };
      });
      console.log(data);
    });
  }

  private findEntrenadores() {
    this.f009Service
      .findEntrenadores()
      .subscribe((data: F009Get_EntrenadoresDto[]) => {
        this.opcionEntrenador = data.map(
          (entrenador: F009Get_EntrenadoresDto) => {
            return {
              valor: entrenador.IDEntrenador,
              etiqueta:
                entrenador.nombreUsuario + ' ' + entrenador.apellidoUsuario,
            };
          }
        );
        console.log(data);
      });
  }
}
