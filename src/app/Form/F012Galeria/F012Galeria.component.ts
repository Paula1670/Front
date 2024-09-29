import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../Components/Header/Header.component';
import { F012CreateGaleriaDto } from '../../Models/Public/DtosF012/F012Create_Galeria';
import { F012UpdateGaleriaDto } from '../../Models/Public/DtosF012/F012Update_Galeria';
import { F012Service } from '../../Services/Public/F012.service';
import { pipe } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-F010Galeria',
  templateUrl: './F012Galeria.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, JsonPipe],
  styleUrls: ['./F012Galeria.component.scss'],
})
export class F012GaleriaComponent implements OnInit {
  GaleriaForm: FormGroup;
  editMode?: boolean;
mostrarConfirmacion:boolean=false;
  constructor(
    private fb: FormBuilder,
    private f012Service: F012Service,
    private router: Router
  ) {
    this.GaleriaForm = this.fb.group({
      url: ['', [Validators.required]],
      pie: ['', [Validators.required]],
      nombreFoto: ['', [Validators.required]],
      imagenBase64: [null, [Validators.required]],
    });
  }

  ngOnInit() {}

  Add_Galeria() {
    const fileData = new FormData();

    this.f012Service
      .Create_Galeria({
        pie: this.GaleriaForm.value.pie,
        nombreFoto: this.GaleriaForm.value.nombreFoto,
        url: this.GaleriaForm.value.url,
        imagenBase64: this.GaleriaForm.value.imagenBase64,
      })

      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    this.router.navigate(['/galeria']);
  }
  Update_Galeria(id: number | undefined) {
    let updateF012Dto: F012UpdateGaleriaDto = {
      pie: this.GaleriaForm.value.pie,
      nombreFoto: this.GaleriaForm.value.nombreFoto,
      url: this.GaleriaForm.value.url,
      imagenBase64: this.GaleriaForm.value.imagenBase64,
    };
    if (id) {
      this.f012Service.Update_Galeria(id, updateF012Dto).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error: any) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const binaryString = new Uint8Array(arrayBuffer).reduce(
          (acc, byte) => acc + String.fromCharCode(byte),
          ''
        );
        const base64String = btoa(binaryString);
        this.GaleriaForm.patchValue({ imagenBase64: base64String });
      };
      reader.readAsArrayBuffer(file);
    }
  }

  actualizar() {
    
    this.mostrarConfirmacion = true;
  }

  goBack(){this.mostrarConfirmacion = false;
    this.router.navigate(['/galeria']);
  }
  notGoBack(){this.mostrarConfirmacion = false}
}
