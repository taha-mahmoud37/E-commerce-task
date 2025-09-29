import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../../../app/service/auth.service';

// to prevent user fron enter any  page if this user is not logged in
export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isloggedIn()) {
    return true;
  }

  return router.parseUrl('/');
};

// to prevent user fron enter login page if this user logged in
export const publicGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isloggedIn()) {
    return router.parseUrl('/products');
  }
  return true;
};
