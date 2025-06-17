import { Pipe, PipeTransform } from '@angular/core';
import { ArticleCategory, ArticleCategoryLabels } from '@sf/sf-base';

@Pipe({
  name: 'sfMapCategory',
})
export class SfMapCategoryPipe implements PipeTransform {
  transform(value: ArticleCategory): string {
    return ArticleCategoryLabels[value];
  }
}
