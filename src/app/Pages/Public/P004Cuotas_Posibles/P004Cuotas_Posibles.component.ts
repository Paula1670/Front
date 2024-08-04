import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Nav_BarComponent } from '../../../Components/Nav_Bars/Nav_Bar/Nav_Bar.component';
import { P004Cuotas } from '../../../Models/Private/DtosP004/P004Get_CuotaDto';
import { P004Service } from '../../../Services/Public/P004.service';
import { Router } from '@angular/router';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-P004Cuotas_Posibles',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    Final_Nav_BarComponent,
    FooterComponent,
  ],
  templateUrl: './P004Cuotas_Posibles.component.html',
  styleUrls: ['./P004Cuotas_Posibles.component.scss'],
})
export class P004Cuotas_PosiblesComponent implements OnInit {
  @Input({ required: true })
  cuotaslist: P004Cuotas[] = [];
  idCuota?: number;
  authState$: Observable<AuthState>;

  constructor(
    private service: P004Service,
    private router: Router,
    private authService: AuthService
  ) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {
    this.Get_Cuotas();
  }

  Get_Cuotas() {
    this.service.Get_Cuotas().subscribe((data: any) => {
      this.cuotaslist = data;
    });
  }

  goToFormulario() {
    this.router.navigate(['add_edit_cuota']);
  }

  Update_Cuota(id: number) {
    this.router.navigate(['/add_edit_cuota'], {
      queryParams: { editMode: true, IDCuota: id },
    });
  }
  Delete_Cuota(id: number) {
    if (id) {
      this.service.Delete_Cuota(id).subscribe(
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
