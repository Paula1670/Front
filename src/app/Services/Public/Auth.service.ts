import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { LogInAuthResponseDto } from '../../Models/Public/DtosAuth/logIn_auth_response.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  log_in(direccion_usuario: string, contrasena: string) {
    console.log(environment.UrlBackend + '/auth/logIn');
    const logInResponse = this.http
      .post<LogInAuthResponseDto>(environment.UrlBackend + '/auth/logIn', {
        direccion: direccion_usuario,
        contrasena: contrasena,
      })
      .subscribe({
        next: (data) => {
          this.router.navigate(['']);
          this.setCookies(data);
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
  }
  log_out() {
    this.http.post(environment.UrlBackend + '/auth/logOut', {});
    this.removeCookies();
  }

  removeCookies() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('apellido');
    sessionStorage.removeItem('idUsuario');
    sessionStorage.removeItem('juntaDirectiva');
    sessionStorage.removeItem('entrenador');
    sessionStorage.removeItem('nadador');
    sessionStorage.removeItem('socio');
  }

  // Getters for individual session data
  get token(): string | null {
    const sessionData = sessionStorage.getItem('token');
    return sessionData ? sessionData : null;
  }

  get nombre(): string | null {
    const sessionData = sessionStorage.getItem('nombre');
    return sessionData ? sessionData : null;
  }

  get apellido(): string | null {
    const sessionData = sessionStorage.getItem('apellido');
    return sessionData ? sessionData : null;
  }

  get idUsuario(): number | null {
    const sessionData = sessionStorage.getItem('idUsuario');
    return sessionData ? JSON.parse(sessionData) : null;
  }

  get juntaDirectiva(): boolean {
    const sessionData = sessionStorage.getItem('juntaDirectiva');
    return sessionData ? JSON.parse(sessionData) : false;
  }

  get entrenador(): boolean {
    const sessionData = sessionStorage.getItem('entrenador');
    return sessionData ? JSON.parse(sessionData) : false;
  }

  get nadador(): boolean {
    const sessionData = sessionStorage.getItem('nadador');
    return sessionData ? JSON.parse(sessionData) : false;
  }

  get socio(): boolean {
    const sessionData = sessionStorage.getItem('socio');
    return sessionData ? JSON.parse(sessionData) : false;
  }
}
