import { Routes } from '@angular/router';

export const sfAppRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/default-view.routes').then((m) => m.defaultViewRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
