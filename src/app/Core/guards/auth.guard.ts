import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../../../app/service/auth.service';

export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isloggedIn()) {
    return true;
  }

  return router.parseUrl('/');
};

export const publicGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isloggedIn()) {
    return router.parseUrl('/products');
  }
  return true;
};
