import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Router } from '@angular/router';
import { P012Galeria } from '../../../Models/Public/DtosP012/P012Get_Galeria';
import { P12Service } from '../../../Services/Public/P12.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-p003Galeria',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './p003Galeria.component.html',
  styleUrls: ['./p003Galeria.component.scss'],
})
export class P003GaleriaComponent implements OnInit {
  Competiciones: P012Galeria[] = [];
  imagenParaMostrar: any;
  authState$: Observable<AuthState>;
  constructor(
    private service: P12Service,
    private router: Router,
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.GetGalery();
  }

  gotoFormulario() {
    this.router.navigate(['add_edit_galeria']);
  }

  deleteGalery(id: number) {
    if (id) {
      this.service.Delete_Galeria(id).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }

  GetGalery() {
    this.service.Get_Galerias().subscribe((data: P012Galeria[]) => {
      this.Competiciones = data;
      this.Competiciones.forEach((competicion) => {
        competicion.imagenBase64 = this.mostrarImagen(competicion.imagenBase64);
      });
    });
  }

  mostrarImagen(imagenBase64: string): any {
    const imagen = 'data:image/png;base64,' + imagenBase64;
    return this.sanitizer.bypassSecurityTrustUrl(imagen);
  }
}
