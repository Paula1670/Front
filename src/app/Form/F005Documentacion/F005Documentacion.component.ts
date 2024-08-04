import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { F005Service } from '../../Services/Public/F005.service';
import { F005UpdateDocumentacionDto } from '../../Models/Public/DtosF005/F005Update_Documentacion';
import { Opcion } from '../../Models/Desplegable/Opcion';
import { OpcionDocumento } from '../../Core/Constants/Constantes';
import { F005GetDocumentacionDto } from '../../Models/Public/DtosF005/F005Get_Documentacion';
import { HeaderComponent } from '../../Components/Header/Header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-F005Documentacion',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './F005Documentacion.component.html',
  styleUrls: ['./F005Documentacion.component.scss'],
})
export class F005DocumentacionComponent implements OnInit {
  documentacionForm: FormGroup;
  editMode?: boolean;
  opcionDocumento: Opcion[] = OpcionDocumento;
  idDocumentacion?: number;
  constructor(
    private fb: FormBuilder,
    private f005Service: F005Service,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.documentacionForm = this.fb.group({
      url: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      nombreUrl: ['', [Validators.required]],
      categoriaDocumento: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params['editMode'];
      this.idDocumentacion = params['idDocumentacion'];
      if (this.editMode && this.idDocumentacion) {
        this.Get_Documentacion(this.idDocumentacion);
      }
    });
  }

  Add_Documentacion() {
    this.f005Service
      .Create_Documento({
        titulo: this.documentacionForm.value.titulo,
        nombreUrl: this.documentacionForm.value.nombreUrl,
        url: this.documentacionForm.value.url,
        categoriaDocumento: this.documentacionForm.value.categoriaDocumento,
      })

      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    this.router.navigate(['/documentacion']);
  }
  Edit_Documentacion(id: number | undefined) {
    let updateF005Dto: F005UpdateDocumentacionDto = {
      titulo: this.documentacionForm.value.titulo,
      nombreUrl: this.documentacionForm.value.nombreUrl,
      url: this.documentacionForm.value.url,
      categoriaDocumento: this.documentacionForm.value.categoriaDocumento,
    };

    if (id) {
      this.f005Service.Update_Documento(id, updateF005Dto).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
    this.router.navigate(['/documentacion']);
  }

  Get_Documentacion(id: number) {
    this.f005Service
      .Get_Documentacion(id)
      .subscribe((data: F005GetDocumentacionDto) => {
        this.documentacionForm.get('url')?.patchValue(data.url);
        this.documentacionForm.get('titulo')?.patchValue(data.titulo);
        this.documentacionForm.get('nombreUrl')?.patchValue(data.nombreUrl);
        this.documentacionForm
          .get('categoriaDocumento')
          ?.patchValue(data.categoriaDocumento);
      });
  }
}
