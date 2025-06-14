import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import {
  ArticleStore,
  SfIconAndTextComponent,
  SfIcons,
  SfSiderComponent,
  SurveyStore,
} from '@sf/sf-base';
import {
  NzContentComponent,
  NzHeaderComponent,
  NzLayoutComponent,
} from 'ng-zorro-antd/layout';
import { NzMenuDirective, NzSubMenuComponent } from 'ng-zorro-antd/menu';

@Component({
  selector: 'sf-backoffice-backoffice-view',
  imports: [
    NzContentComponent,
    NzHeaderComponent,
    NzLayoutComponent,
    NzMenuDirective,
    NzSubMenuComponent,
    SfIconAndTextComponent,
    SfSiderComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './backoffice-view.component.html',
  styleUrl: './backoffice-view.component.css',
})
export class SfBackofficeViewComponent {
  private readonly __router = inject(Router);
  private readonly __activatedRoute = inject(ActivatedRoute);
  private readonly __articleStore = inject(ArticleStore);
  private readonly __surveyStore = inject(SurveyStore);

  public readonly icons = SfIcons;

  public onElementIdClicked(elementId: number) {
    console.log(elementId);
  }

  async createNewArticle() {
    this.__articleStore.setArticle(undefined);
    await this.__router.navigate(['create-article'], {
      relativeTo: this.__activatedRoute,
    });
  }

  async createNewTrip() {
    this.__articleStore.setArticle(undefined);
    await this.__router.navigate(['create-trip'], {
      relativeTo: this.__activatedRoute,
    });
  }

  async createNewSurvey() {
    this.__surveyStore.setSurvey(undefined);
    await this.__router.navigate(['create-survey'], {
      relativeTo: this.__activatedRoute,
    });
  }
}
