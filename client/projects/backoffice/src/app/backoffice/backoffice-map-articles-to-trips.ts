import { Pipe, PipeTransform } from '@angular/core';
import { ArticleDTO } from '@sf/sf-base';

@Pipe({
  name: 'sfBackofficeMapArticlesToTrips',
})
export class SfBackofficeMapArticlesToTripsPipe implements PipeTransform {
  transform(articles: ArticleDTO[]) {
    return articles.filter((a) => !!a.TripDTO);
  }
}
