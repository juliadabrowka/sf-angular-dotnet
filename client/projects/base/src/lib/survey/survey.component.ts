import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { PageTitleFramedComponent } from '../page-title-framed/page-title-framed.component';
import { SurveyStore } from '@sf/sf-base';
import { NzEmptyComponent } from 'ng-zorro-antd/empty';

@Component({
  selector: 'sf-survey',
  imports: [PageTitleFramedComponent, NzEmptyComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfSurveyComponent {
  private readonly __surveyStore = inject(SurveyStore);

  public readonly surveyComputed = computed(() => this.__surveyStore.survey());
  public readonly title = computed(
    () => this.surveyComputed()?.TripDTOS[0]?.ArticleDTO?.Title,
  );
  public readonly articleImgSrc = computed(
    () => this.surveyComputed()?.TripDTOS[0]?.ArticleDTO?.BackgroundImageUrl,
  );
  public readonly extraLogoSrc = computed(
    () => this.surveyComputed()?.ExtraLogoUrl,
  );
}
