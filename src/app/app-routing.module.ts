import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/curriculum-vitae', pathMatch: 'full' },
  { path: 'curriculum-vitae', component: CurriculumVitaeComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
