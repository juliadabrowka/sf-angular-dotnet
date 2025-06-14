import { Route, Routes } from '@angular/router';
import { SfBackofficeComponent } from '../../backoffice/backoffice.component';
import { SfBackofficeArticleComponent } from '../../article/article.component';
import { SfBackofficeTripComponent } from '../../trip/trip.component';
import { SfBackofficeSurveyComponent } from '../../survey/survey.component';
import { SfBackofficeSurveyListComponent } from '../../survey/survey-list/survey-list.component';
import { SfTripApplicationListComponent } from '../../../../../base/src/lib/trip/trip-application-list/trip-application-list.component';
import { SfFilteredTableComponent } from '../../filtered-table/filtered-table.component';
import { ArticleCategory, SfIcons, TripType } from '@sf/sf-base';
import { SfBackofficeViewComponent } from './backoffice-view.component';

const filteredTableRoutes: Routes = [
  {
    path: 'recommendations',
    component: SfFilteredTableComponent,
    data: {
      categoryFilter: ArticleCategory.Recommendations,
      title: 'Rekomendacje',
      icon: SfIcons.recommendations,
    },
  },
  {
    path: 'tips',
    component: SfFilteredTableComponent,
    data: {
      categoryFilter: ArticleCategory.Tips,
      title: 'Ciekawostki',
      icon: SfIcons.tips,
    },
  },
  {
    path: 'photo-stories',
    component: SfFilteredTableComponent,
    data: {
      categoryFilter: ArticleCategory.Photostories,
      title: 'Fotorelacje',
      icon: SfIcons.photoRel,
    },
  },
  {
    path: 'classic-trips',
    component: SfFilteredTableComponent,
    data: {
      categoryFilter: ArticleCategory.Trips,
      tripFilter: TripType.Classic,
      title: 'Wyprawy classic',
      icon: SfIcons.classicTrip,
    },
  },
  {
    path: 'weekend-trips',
    component: SfFilteredTableComponent,
    data: {
      categoryFilter: ArticleCategory.Trips,
      tripFilter: TripType.Weekend,
      title: 'Weekendowe wojaże',
      icon: SfIcons.weekendTrip,
    },
  },
  {
    path: 'bike-trips',
    component: SfFilteredTableComponent,
    data: {
      categoryFilter: ArticleCategory.Trips,
      tripFilter: TripType.Bike,
      title: 'Wyprawy rowerowe',
      icon: SfIcons.bikeTrip,
    },
  },
];

export const backofficeViewRoutes: Route[] = [
  {
    path: 'admin-backoffice',
    component: SfBackofficeViewComponent,
    children: [
      {
        path: '',
        component: SfBackofficeComponent,
      },
      {
        path: 'articles/:articleId',
        component: SfBackofficeArticleComponent,
      },
      {
        path: 'create-article',
        component: SfBackofficeArticleComponent,
      },
      {
        path: 'create-trip',
        component: SfBackofficeTripComponent,
      },
      {
        path: 'create-survey',
        component: SfBackofficeSurveyComponent,
      },
      {
        path: 'surveys',
        component: SfBackofficeSurveyListComponent,
      },
      { path: 'surveys/:surveyId', component: SfBackofficeSurveyComponent },
      {
        path: 'trip-applications',
        component: SfTripApplicationListComponent,
      },
      ...filteredTableRoutes,
    ],
  },
];
