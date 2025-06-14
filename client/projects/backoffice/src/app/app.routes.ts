import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { inject } from '@angular/core';
import { ArticleStore, SurveyStore } from '@sf/sf-base';
import { TripApplicationStore } from '../../../base/src/state/trip-application-store';

export const backofficeRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./views/backoffice-view/backoffice-view.routes').then(
        (m) => m.backofficeViewRoutes,
      ),
    resolve: {
      data: async () => {
        const surveyStore = inject(SurveyStore);
        const tripStore = inject(TripApplicationStore);
        const articleStore = inject(ArticleStore);

        await Promise.all([
          surveyStore.loadSurveyList(),
          tripStore.loadTripApplicationList(),
          articleStore.loadArticleList(),
        ]);
      },
    },
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
