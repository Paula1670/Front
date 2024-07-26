import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PGetFooterDto } from '../../Models/Public/DtosPFooter/PGet_Footer';
import { PFooterService } from '../../Services/Public/PFooter.service';
import { Router } from '@angular/router';
import { AuthService, AuthState } from '../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss'],
})
export class FooterComponent implements OnInit {
  contactoList: PGetFooterDto[] = [];
  authState$: Observable<AuthState>;

  constructor(
    private router: Router,
    private service: PFooterService,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.Get_Contactos();
  }

  Get_Contactos() {
    this.service.Get_Contactos().subscribe((data: any) => {
      this.contactoList = data;
    });
  }

  Update_Contacto(id: number) {
    this.router.navigate(['/add_edit_contacto'], {
      queryParams: { editMode: true, idDatosContacto: id },
    });
  }
  Delete_Contacto(id: number) {
    if (id) {
      this.service.Delete_Contacto(id).subscribe(
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
  gotoFormulario() {
    this.router.navigate(['/add_edit_contacto']);
  }
}
