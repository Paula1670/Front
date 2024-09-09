import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/Public/Auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  authService.authState$.subscribe((auth) => {
    const authState = auth;
    if (authState.isAuthenticated) {
      return true;
    } else {
      return router.navigate(['/**']);
    }
  });
  return true;
};
