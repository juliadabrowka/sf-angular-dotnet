import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { TripDetailsShortComponent } from '../../trip/trip-details-short/trip-details-short.component';
import { ArticleSiderComponent } from '../article-sider/article-sider.component';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { QuillViewComponent } from 'ngx-quill';
import { SfReviewsComponent } from '../../reviews/reviews.component';
import {
  ArticleDTO,
  ArticleStore,
  SfButtonComponent,
  TripApplicationDTO,
} from '@sf/sf-base';
import { ApplicationFormComponent } from '../../application-form/application-form.component';
import { DatePipe } from '@angular/common';
import { SfFormatPricePipe } from '../../trip/trip-inline/trip-inline-format-price.pipe';
import { Router } from '@angular/router';
import { TripApplicationStore } from '../../../state/trip-application-store';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'sf-article-details-inner',
  imports: [
    TripDetailsShortComponent,
    ArticleSiderComponent,
    NzDividerComponent,
    QuillViewComponent,
    SfReviewsComponent,
    ApplicationFormComponent,
    DatePipe,
    SfButtonComponent,
    SfFormatPricePipe,
  ],
  templateUrl: './article-details-inner.component.html',
  styleUrl: './article-details-inner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticleDetailsInnerComponent {
  private readonly __router = inject(Router);
  private readonly __articleStore = inject(ArticleStore);
  private readonly __tripApplicationStore = inject(TripApplicationStore);
  private readonly __messageService = inject(NzMessageService);

  public readonly sfArticle = input<ArticleDTO | null | undefined>();
  public readonly tripComputed = computed(
    () => this.__articleStore.article()?.TripDTO,
  );

  public readonly showSlider = signal(false);

  public __onShowSlider() {
    this.showSlider.set(!this.showSlider());
  }

  public readonly disabled = signal(true);

  async createTripApplication(tripApplication: TripApplicationDTO) {
    const trip = this.tripComputed();
    tripApplication.TripDTO = trip;
    tripApplication.TripId = trip?.Id;

    await this.__tripApplicationStore.createTripApplication(tripApplication);
    this.__messageService.success('Zgłoszenie zostało wysłane. Dziękujemy!');
    this.showSlider.set(false);
  }
}
