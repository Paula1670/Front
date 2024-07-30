import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PuestoEnum } from '../../Core/Constants/Enums/PuestoEnum';

interface LogInAuthResponseDto {
  token: string;
  nombre: string;
  apellido: string;
  idUsuario: number;
  juntaDirectiva: boolean;
  entrenador: boolean;
  nadador: boolean;
  socio: boolean;
  miembroPuesto: PuestoEnum;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: LogInAuthResponseDto | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState: BehaviorSubject<AuthState>;

  authState$: Observable<AuthState>;

  constructor(private http: HttpClient, private router: Router) {
    if (this.checkCookies()) {
      this.authState = new BehaviorSubject<AuthState>({
        isAuthenticated: true,
        user: this.getUserFromCookies(),
      });
    } else {
      this.authState = new BehaviorSubject<AuthState>({
        isAuthenticated: false,
        user: null,
      });
    }
    this.authState$ = this.authState.asObservable();

    this.authState$.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  log_in(direccion_usuario: string, contrasena: string) {
    console.log(environment.UrlBackend + '/auth/logIn');

    this.http
      .post<LogInAuthResponseDto>(environment.UrlBackend + '/auth/logIn', {
        direccion: direccion_usuario,
        contrasena: contrasena,
      })
      .subscribe({
        next: (data) => {
          this.setCookies(data);
          console.log('haciendo loggin');
          this.authState.next({
            isAuthenticated: true,
            user: data,
          });
          console.log(this.authState);
          this.router.navigate(['']);
        },
        error: (e: Error) => {
          console.log(e.message);
        },
      });
  }

  setCookies(data: LogInAuthResponseDto) {
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('nombre', data.nombre);
    sessionStorage.setItem('apellido', data.apellido);
    sessionStorage.setItem('idUsuario', JSON.stringify(data.idUsuario));
    sessionStorage.setItem(
      'juntaDirectiva',
      JSON.stringify(data.juntaDirectiva)
    );
    sessionStorage.setItem('entrenador', JSON.stringify(data.entrenador));
    sessionStorage.setItem('nadador', JSON.stringify(data.nadador));
    sessionStorage.setItem('socio', JSON.stringify(data.socio));
    sessionStorage.setItem('miembroPuesto', JSON.stringify(data.miembroPuesto));
  }

  checkCookies(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null;
  }
  getUserFromCookies(): any {
    const user = {
      token: sessionStorage.getItem('token'),
      nombre: sessionStorage.getItem('nombre'),
      apellido: sessionStorage.getItem('apellido'),
      idUsuario: JSON.parse(sessionStorage.getItem('idUsuario') || 'null'),
      juntaDirectiva: JSON.parse(
        sessionStorage.getItem('juntaDirectiva') || 'null'
      ),
      entrenador: JSON.parse(sessionStorage.getItem('entrenador') || 'null'),
      nadador: JSON.parse(sessionStorage.getItem('nadador') || 'null'),
      socio: JSON.parse(sessionStorage.getItem('socio') || 'null'),
      miembroPuesto: JSON.parse(
        sessionStorage.getItem('miembroPuesto') || 'null'
      ),
    };

    return user;
  }

  log_out() {
    sessionStorage.clear();
    this.authState.next({
      isAuthenticated: false,
      user: null,
    });
    this.router.navigate(['']);
  }
}
