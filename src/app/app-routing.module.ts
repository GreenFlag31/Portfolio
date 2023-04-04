import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./curriculum-vitae/curriculum-vitae.module').then(
        (m) => m.CurriculumVitaeModule
      ),
    pathMatch: 'full',
    data: { animation: 'portfolio' },
  },
  {
    path: 'portfolio',
    children: [
      {
        path: 'food-app-project',
        loadChildren: () =>
          import('./food-app-project/food-app-project.module').then(
            (m) => m.FoodAppProjectModule
          ),
        data: { animation: 'food-app' },
      },
      {
        path: 'EcoActions-project',
        loadChildren: () =>
          import('./eco-actions/eco-actions.module').then(
            (m) => m.EcoActionsModule
          ),
        data: { animation: 'EcoActions' },
      },
      {
        path: 'MusicSchool-project',
        loadChildren: () =>
          import('./music-school/music-school.module').then(
            (m) => m.MusicSchoolModule
          ),
        data: { animation: 'MusicSchool' },
      },
      {
        path: 'Demand-project',
        loadChildren: () =>
          import('./demand/demand.module').then((m) => m.DemandModule),
        data: { animation: 'Demand' },
      },
      {
        path: 'Calculator-project',
        loadChildren: () =>
          import('./calculator/calculator.module').then(
            (m) => m.CalculatorModule
          ),
        data: { animation: 'Calculator' },
      },
      {
        path: 'Game-project',
        loadChildren: () =>
          import('./game/game.module').then((m) => m.GameModule),
        data: { animation: 'Game' },
      },
      {
        path: 'Portfolio-project',
        loadChildren: () =>
          import('./portfolio-project/portfolio-project.module').then(
            (m) => m.PortfolioProjectModule
          ),
        data: { animation: 'Portfolio' },
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
        data: { animation: 'blog' },
      },
      {
        path: 'blog/what-makes-a-good-dev',
        loadChildren: () =>
          import('./good-dev-article/good-dev-article.module').then(
            (m) => m.GoodDevArticleModule
          ),
        data: { animation: 'goodDev' },
      },
      {
        path: 'blog/clean-code',
        loadChildren: () =>
          import('./clean-code-article/clean-code-article.module').then(
            (m) => m.CleanCodeArticleModule
          ),
        data: { animation: 'CleanCode' },
      },
      {
        path: 'blog/code-maintenance',
        loadChildren: () =>
          import(
            './code-maintenance-article/code-maintenance-article.module'
          ).then((m) => m.CodeMaintenanceArticleModule),
        data: { animation: 'CodeMaintenance' },
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
    data: { animation: 'lost' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
