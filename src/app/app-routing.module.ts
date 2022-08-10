import { RemoveArtComponent } from './pages/remove-art/remove-art.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'pub-articles', component: RemoveArtComponent },
  { path: '', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
