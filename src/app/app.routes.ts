import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard, publicGuard } from './Core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        canMatch: [publicGuard],
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'products',
        canMatch: [authGuard],
        loadComponent: () =>
          import('./pages/product/product.component').then(
            (c) => c.ProductComponent
          ),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
