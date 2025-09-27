import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'system', pathMatch: 'full' },
  {
    path: 'system',
    loadChildren: () =>
      import('./system/system.routes').then((m) => m.systemRoutes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./system/pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
