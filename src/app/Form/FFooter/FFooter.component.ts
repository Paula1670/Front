import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FFooterService } from '../../Services/Public/FFooter.service';
import { FUpdateFooterDto } from '../../Models/Public/DtosFFooter/FUpdate_Footer';
import { JsonPipe } from '@angular/common';
import { FGetFooterDto } from '../../Models/Public/DtosFFooter/FGet_Footer';

@Component({
  selector: 'app-FFooter',
  templateUrl: './FFooter.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, JsonPipe],
  styleUrls: ['./FFooter.component.scss'],
})
export class FFooterComponent implements OnInit {
  ContactoForm: FormGroup;
  editMode?: boolean;
  idDatosContacto?: number;
mostrarConfirmacion:boolean=false;
  constructor(
    private fb: FormBuilder,
    private fFooterService: FFooterService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ContactoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      dato: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.idDatosContacto = params['idDatosContacto'];
      if (this.editMode && this.idDatosContacto) {
        this.Get_Contacto(this.idDatosContacto);
      }
    });
  }

  Get_Contacto(id: number) {
    this.fFooterService.Get_Contacto(id).subscribe((data: FGetFooterDto) => {
      console.log(data);
      this.ContactoForm.get('nombre')?.patchValue(data.nombre);

      this.ContactoForm.get('dato')?.patchValue(data.dato);
    });
  }

  Add_Contacto() {
    this.fFooterService
      .Create_Contacto({
        dato: this.ContactoForm.value.dato,
        nombre: this.ContactoForm.value.nombre,
      })

      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
          window.history.back();
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    // this.router.navigate(['/galeria']);
    // this.location.back();
  }
  Update_Contacto(id: number | undefined) {
    let fUpdateFooterDto: FUpdateFooterDto = {
      dato: this.ContactoForm.value.dato,
      nombre: this.ContactoForm.value.nombre,
    };
    if (id) {
      this.fFooterService.Update_Contacto(id, fUpdateFooterDto).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
          window.history.back();
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }

  actualizar() {
    
    this.mostrarConfirmacion = true;
  }

  goBack(){this.mostrarConfirmacion = false;
    window.history.back();
  }
  notGoBack(){this.mostrarConfirmacion = false}
}
