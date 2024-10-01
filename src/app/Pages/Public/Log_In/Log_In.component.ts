import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../Services/Public/Auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';

@Component({
  selector: 'app-Log_In',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './Log_In.component.html',
  styleUrls: ['./Log_In.component.scss'],
})
export class Log_InComponent implements OnInit {
  Login_Form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.Login_Form = fb.group({
      direccion_usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  login() {
    
    if (this.Login_Form.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    const direccion_usuario: string =
      this.Login_Form.get('direccion_usuario')?.value;
    const contrasena: string = this.Login_Form.get('contrasena')?.value;
    this.auth.log_in(direccion_usuario, contrasena);
  }

  markAllFieldsAsTouched() {
    Object.keys(this.Login_Form.controls).forEach(field => {
      const control = this.Login_Form.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
