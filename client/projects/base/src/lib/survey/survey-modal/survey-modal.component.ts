import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SfIconAndTextComponent } from '../../icon-and-text/icon-and-text.component';
import { SfIcons } from '../../icons';
import { SfSurveyComponent } from '../survey.component';
import { SurveyDTO } from '../../../data-types';
import { SurveyStore } from '../../../state/survey-store';

@Component({
  selector: 'sf-survey-modal',
  imports: [NzModalModule, SfIconAndTextComponent, SfSurveyComponent],
  templateUrl: './survey-modal.component.html',
  styleUrl: './survey-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfSurveyModalComponent {
  private readonly __surveyStore = inject(SurveyStore);

  public readonly icons = SfIcons;
  public readonly visible = signal(false);

  openSurveyModal(survey: SurveyDTO | undefined) {
    this.visible.set(true);
    this.__surveyStore.setSurvey(survey);
  }
}
