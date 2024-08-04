import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { Nav_Bar_ENComponent } from '../../../Components/Nav_Bars/Nav_Bar_EN/Nav_Bar_EN.component';
import { Time } from '../../../Models/time';
import { CommonModule } from '@angular/common';
import { Table_TiemposComponent } from '../../../Components/Tables/Table_Tiempos/Table_Tiempos.component';
import { P006Service } from '../../../Services/Private/p006.service';
import { Router } from '@angular/router';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-P006Tiempos',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    Table_TiemposComponent,
  ],
  templateUrl: './P006Tiempos.component.html',
  styleUrls: ['./P006Tiempos.component.scss'],
})
export class P006TiemposComponent implements OnInit {
  timelist: Time[] = [];
  esEntrenador?: boolean;
  authState$: Observable<AuthState>;

  constructor(
    private service: P006Service,
    private router: Router,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }
  ngOnInit() {
    this.authState$.subscribe({
      next: (data) => {
        this.esEntrenador = data.user?.entrenador;
        if (this.esEntrenador) this.Get_Tiempos();
        else if (data.user?.idUsuario !== undefined) {
          this.findAllByUserId(data.user.idUsuario);
        } else {
          console.error('idUsuario es undefined');
        }
      },
    });
  }

  Get_Tiempos() {
    this.service.Get_Tiempos().subscribe((data: any) => {
      this.timelist = data;
    });
  }
  gotoFormulario() {
    this.router.navigate(['/add_edit_tiempo']);
  }

  findAllByUserId(id: number) {
    this.service.findAllByUserId(id).subscribe((data: any) => {
      this.timelist = data;
    });
  }
}
