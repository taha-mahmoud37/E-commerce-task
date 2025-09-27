import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import { adminGuard, authGuard } from '../Core/guards/auth.guard';

export const systemRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/product/product.component').then(
            (c) => c.ProductComponent
          ),
      },
      //   {
      //     path: 'dashboard',
      //     canActivate: [authGuard , adminGuard ],
      //     loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
      //   },
      //
      //   {
      //     path: 'product/:id',
      //     loadComponent: () => import('./pages/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
      //   }
    ],
  },
];
