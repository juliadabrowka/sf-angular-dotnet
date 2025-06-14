import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const backofficeRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./views/backoffice-view/backoffice-view.routes').then(
        (m) => m.backofficeViewRoutes,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login-view/login-view.routes').then((m) => m.loginRoutes),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
