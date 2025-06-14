import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { sfAppRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { ArticleStore } from '@sf/sf-base';

const initializeAppFn = async () => {
  const articleStore = inject(ArticleStore);

  await articleStore.loadArticleList();
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideNzI18n(en_US),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideRouter(
      sfAppRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
    ),
    provideAppInitializer(() => {
      return initializeAppFn();
    }),
  ],
};
