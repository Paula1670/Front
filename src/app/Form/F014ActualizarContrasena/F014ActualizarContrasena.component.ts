import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { F014Service } from '../../Services/Private/F014.service';
import { F014ActualizarContrasena } from '../../Models/Private/DtosF014/F014ActualizarContrasenaDto';
import { AuthService } from '../../Services/Public/Auth.service';

@Component({
  selector: 'app-F014ActualizarContrasena',
  templateUrl: './F014ActualizarContrasena.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  styleUrls: ['./F014ActualizarContrasena.component.scss']
})
export class F014ActualizarContrasenaComponent implements OnInit {

  passwordForm: FormGroup;
  mostrarConfirmacion: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private f014Service:F014Service,private authService: AuthService,

    private route: ActivatedRoute) {
    this.passwordForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
         // Validators.minLength(8), // mínimo de 8 caracteres
         // Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/), // debe contener letras y números
        ],
      ],
    });
  }

  ngOnInit() {
  }

  actualizarContrasena(){
    if (this.passwordForm.invalid) {
      console.log(this.passwordForm.value);
      this.markAllFieldsAsTouched();
      return;
    }

    const usuarioId = this.authService.getUserFromCookies().idUsuario;

console.log(usuarioId);

  let createF014Dto: F014ActualizarContrasena = {
    Contrasena: this.passwordForm.value.password,
    IDUsuario: usuarioId
  };

    this.f014Service.actualizarContrasena(createF014Dto).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error al llamar al endpoint:', error);
        // Maneja el error según tus necesidades
      }
    );

  }
  cancelar() {
    
    this.mostrarConfirmacion = true;
  }

  goBack(){this.mostrarConfirmacion = false;
    this.router.navigate(['/users']);
  }
  notGoBack(){this.mostrarConfirmacion = false}

  markAllFieldsAsTouched() {
    Object.keys(this.passwordForm.controls).forEach(field => {
      const control = this.passwordForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
