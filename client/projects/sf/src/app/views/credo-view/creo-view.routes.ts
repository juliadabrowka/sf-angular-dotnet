import { Route } from '@angular/router';
import { SfCredoViewComponent } from './credo-view.component';
import { credoRoutes } from '@sf/sf-base';

export const credoViewRoutes: Route[] = [
  {
    path: '',
    component: SfCredoViewComponent,
    children: [...credoRoutes],
  },
];
