import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ArticleDTO,
  ArticleStore,
  SfArticleTableComponent,
  SfIconAndTextComponent,
  SfIcons,
  SfTripTableComponent,
} from '@sf/sf-base';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { SfBackofficeMapArticlesToTripsPipe } from './backoffice-map-articles-to-trips';

@Component({
  selector: 'sf-backoffice',
  imports: [
    SfIconAndTextComponent,
    SfArticleTableComponent,
    SfTripTableComponent,
    NzCardComponent,
    SfBackofficeMapArticlesToTripsPipe,
  ],
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfBackofficeComponent {
  private readonly __router = inject(Router);
  private readonly __activatedRoute = inject(ActivatedRoute);
  private readonly __articleStore = inject(ArticleStore);

  public readonly icons = SfIcons;
  public readonly articles = computed(() => this.__articleStore.articles());
  public readonly loading = computed(() => this.__articleStore.loading());

  async onArticleClicked(article: ArticleDTO) {
    await this.__router.navigate([`articles/${article.Id}`], {
      relativeTo: this.__activatedRoute,
    });
  }
}
