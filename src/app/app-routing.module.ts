import { PrincipleDeskComponent } from './pages/principle-desk/principle-desk.component';
import { ReadPublishedArticlesComponent } from './pages/read-published-articles/read-published-articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CounselorComponent } from './pages/counselor/counselor.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SpecificArticleComponent } from './pages/specific-article/specific-article.component';
import { SpecificReportComponent } from './pages/specific-report/specific-report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counselor',
    component: CounselorComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  { path: 'report/:id', component: SpecificReportComponent },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'article/:id',
    component: SpecificArticleComponent,
  },
  {
    path: 'read-published-articles',
    component: ReadPublishedArticlesComponent,
  },
  {
    path: 'from-principals-desk',
    component: PrincipleDeskComponent,
  },
  {
    path: '**',
    component: FourZeroFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
