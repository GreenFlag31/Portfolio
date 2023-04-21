import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
        path: 'eco-actions-project',
        loadChildren: () =>
          import('./eco-actions/eco-actions.module').then(
            (m) => m.EcoActionsModule
          ),
        data: { animation: 'eco-actions' },
      },
      {
        path: 'coffee-api-project',
        loadChildren: () =>
          import('./coffee-api/coffee-api.module').then(
            (m) => m.CoffeeApiModule
          ),
        data: { animation: 'coffee-api' },
      },
      {
        path: 'music-school-project',
        loadChildren: () =>
          import('./music-school/music-school.module').then(
            (m) => m.MusicSchoolModule
          ),
        data: { animation: 'music-school' },
      },
      {
        path: 'demand-project',
        loadChildren: () =>
          import('./demand/demand.module').then((m) => m.DemandModule),
        data: { animation: 'demand' },
      },

      {
        path: 'other-projects',
        loadChildren: () =>
          import('./other-projects/other-projects.module').then(
            (m) => m.OtherProjectsModule
          ),
        data: { animation: 'others' },
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
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
