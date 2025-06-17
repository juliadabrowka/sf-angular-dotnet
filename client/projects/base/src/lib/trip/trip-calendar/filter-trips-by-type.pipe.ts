import { Pipe, PipeTransform } from '@angular/core';
import { ArticleDTO, Country, TripType } from '@sf/sf-base';
import { TripFlag } from './trip-calendar.component';

@Pipe({
  name: 'sfFilterTripsByType',
})
export class SfFilterTripsByTypePipe implements PipeTransform {
  transform(articles: ArticleDTO[], type?: TripType): TripFlag[] {
    return articles
      .filter(
        (article) =>
          article.TripDTO?.Type === type && article.TripDTO?.ArticleId,
      )
      .map((article) => ({
        trip: article.TripDTO!,
        flagSrc: this.getFlagByTripCountry(article?.Country),
      }));
  }

  private getFlagByTripCountry(country: Country | undefined) {
    switch (country) {
      case Country.Japan:
        return '/assets/japan-flag.jpg';
      case Country.Cuba:
        return '/assets/cuba-flag.jpg';
      case Country.Portugal:
        return '/assets/portugal-flag.jpg';
      case Country.Poland:
        return '/assets/poland-flag.jpg';
      case Country.Norway:
        return '/assets/norge-flag.png';
      case Country.Taiwan:
        return '/assets/taiwan-flag.jpg';
      default:
        return '/assets/poland-flag.jpg';
    }
  }
}
