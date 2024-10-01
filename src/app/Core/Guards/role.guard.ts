import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Public/Auth.service';
import { firstValueFrom } from 'rxjs';

export const roleGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRoles: string[] = route.data['roles'] || [];

  const authState = await firstValueFrom(authService.authState$);

  const user = authState.user;

  if (user && hasRole(user, expectedRoles)) {
    return true;
  } else {
    return router.navigate(['/**']);
  }

  return false;
};

// Función auxiliar para verificar los roles
function hasRole(user: any, expectedRoles: string[]): boolean {
  return expectedRoles.some((role) => {
    switch (role) {
      case 'juntaDirectiva':
        return user.juntaDirectiva;
      case 'entrenador':
        return user.entrenador;
      case 'nadador':
        return user.nadador;
      case 'socio':
        return user.socio;
      case 'miembroPuesto':
        return (
          user.miembroPuesto === 'Presidente' ||
          user.miembroPuesto === 'Vicepresidente'
        );
      default:
        return false;
    }
  });
}
