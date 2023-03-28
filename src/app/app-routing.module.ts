import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { DemandComponent } from './demand/demand.component';
import { EcoActionsComponent } from './eco-actions/eco-actions.component';
import { FoodAppComponent } from './food-app-project/food-app.component';
import { GameComponent } from './game/game.component';
import { MusicSchoolComponent } from './music-school/music-school.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full',
    data: { animation: 'portfolio' },
  },
  {
    path: 'portfolio',
    component: CurriculumVitaeComponent,
    data: { animation: 'portfolio' },
  },
  {
    path: 'portfolio',
    children: [
      {
        path: 'food-app-project',
        component: FoodAppComponent,
        data: { animation: 'food-app' },
      },
      {
        path: 'EcoActions-project',
        component: EcoActionsComponent,
        data: { animation: 'EcoActions' },
      },
      {
        path: 'MusicSchool-project',
        component: MusicSchoolComponent,
        data: { animation: 'MusicSchool' },
      },
      {
        path: 'Demand-project',
        component: DemandComponent,
        data: { animation: 'Demand' },
      },
      {
        path: 'Calculator-project',
        component: CalculatorComponent,
        data: { animation: 'Calculator' },
      },
      {
        path: 'Game-project',
        component: GameComponent,
        data: { animation: 'Game' },
      },
      {
        path: 'blog',
        component: BlogComponent,
        data: { animation: 'blog' },
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'lost' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
