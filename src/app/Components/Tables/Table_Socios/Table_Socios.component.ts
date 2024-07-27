import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { P009Service } from '../../../Services/Private/P009.service';
import { CommonModule, DatePipe } from '@angular/common';
import { P009Socio } from '../../../Models/Private/DtosP009/P009Get_SociosDto';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Table_Socios',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table_Socios.component.html',
  styleUrls: ['./Table_Socios.component.scss'],
})
export class Table_SociosComponent implements OnInit {
  @Input({ required: true })
  sociolist: P009Socio[] = [];
  authState$: Observable<AuthState>;

  //member: P009Usuario;

  constructor(
    private router: Router,
    private service: P009Service,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {}
  editarMiembro(id: number) {
    this.router.navigate(['/add_edit_user'], {
      queryParams: { editMode: true, idUser: id },
    });
  }
  Delete_User(id: number) {
    if (id) {
      this.service.Delete_User(id).subscribe(
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
