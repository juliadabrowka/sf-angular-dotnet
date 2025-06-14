import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { backofficeRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArticleStore, SurveyStore } from '@sf/sf-base';
import { TripApplicationStore } from '../../../base/src/state/trip-application-store';
import { provideQuillConfig } from 'ngx-quill';

const initializeAppFn = async () => {
  const surveyStore = inject(SurveyStore);
  const tripStore = inject(TripApplicationStore);
  const articleStore = inject(ArticleStore);

  await Promise.all([
    surveyStore.loadSurveyList(),
    tripStore.loadTripApplicationList(),
    articleStore.loadArticleList(),
  ]);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      backofficeRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
    ),
    provideHttpClient(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideQuillConfig({ theme: 'snow' }),
    provideAppInitializer(() => {
      return initializeAppFn();
    }),
  ],
};
