import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleFramedComponent } from '../page-title-framed/page-title-framed.component';
import { NzDividerComponent } from 'ng-zorro-antd/divider';

@Component({
  selector: 'sf-credo',
  imports: [PageTitleFramedComponent, NzDividerComponent],
  templateUrl: './credo.component.html',
  styleUrl: './credo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCredoComponent {
  public readonly title = 'nasze kobiece aktywne wyprawy - styl oraz idea';
}
