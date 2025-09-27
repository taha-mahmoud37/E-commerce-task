import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'system', pathMatch: 'full' },
  {
    path: 'system',
    loadChildren: () =>
      import('./system/system.routes').then((m) => m.systemRoutes),
  },
];
