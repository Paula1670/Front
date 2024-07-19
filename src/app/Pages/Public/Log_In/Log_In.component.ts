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

@Component({
  selector: 'app-Log_In',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './Log_In.component.html',
  styleUrls: ['./Log_In.component.scss'],
  providers: [AuthService],
})
export class Log_InComponent implements OnInit {
  Login_Form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.Login_Form = fb.group({
      nombre_usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  login() {
    const nombre_usuario: string = this.Login_Form.get('nombre_usuario')?.value;
    const contrasena: string = this.Login_Form.get('contrasena')?.value;
    this.auth.log_in(nombre_usuario, contrasena);
  }
}
