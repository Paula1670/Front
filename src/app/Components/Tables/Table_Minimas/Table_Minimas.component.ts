import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P007Minima } from '../../../Models/Private/DtosP007/P007Get_MinimasDto';
import { Router } from '@angular/router';
import { P007Service } from '../../../Services/Private/P007.service';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Table_Minimas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Table_Minimas.component.html',
  styleUrls: ['./Table_Minimas.component.scss'],
})
export class Table_MinimasComponent implements OnInit {
  @Input({ required: true })
  minimalist: P007Minima[] = [];
  authState$: Observable<AuthState>;

  constructor(
    private router: Router,
    private service: P007Service,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {}

  editarMinima(id: number) {
    this.router.navigate(['/add_edit_minima'], {
      queryParams: { editMode: true, idMinima: id },
    });
  }
  Delete_Minima(id: number) {
    if (id) {
      this.service.Delete_Minima(id).subscribe(
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
