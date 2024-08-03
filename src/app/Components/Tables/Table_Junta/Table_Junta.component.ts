import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Router } from '@angular/router';
import { P009Service } from '../../../Services/Private/P009.service';
import { P009GetJuntaDirectivaDto } from '../../../Models/Private/DtosP009/P009GetJuntaDirectivaDto';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-Table_Junta',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table_Junta.component.html',
  styleUrls: ['./Table_Junta.component.scss'],
})
export class Table_JuntaComponent implements OnInit {
  @Input({ required: true })
  juntalist: P009GetJuntaDirectivaDto[] = [];
  authState$: Observable<AuthState>;

  constructor(
    private router: Router,
    private service: P009Service,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {}

  editarMiembro(id: number) {
    this.router.navigate(['/add_edit_miembroJunta'], {
      queryParams: { editMode: true, idUser: id },
    });
  }

  Delete_User(id: number) {
    console.log(id);
    if (id) {
      this.service.Delete_Miembro(id).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          console.log();
          window.location.reload();
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }

  activar_User(id: number) {
    if (id) {
      this.service.Activate_User(id).subscribe(
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
}
