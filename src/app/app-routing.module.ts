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
    title: 'Manu Claeys | Portfolio',
  },
  {
    path: 'portfolio',
    children: [
      {
        path: 'carousel-test',
        loadComponent: () =>
          import('./carousel-test/carousel-test.component').then(
            (m) => m.CarouselTestComponent
          ),
        title: 'Manu Claeys | carousel-test',
      },
      {
        path: 'food-app-project',
        loadChildren: () =>
          import('./projects/food-app-project/food-app-project.module').then(
            (m) => m.FoodAppProjectModule
          ),
        data: { animation: 'food-app' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'js-in-practice',
        loadComponent: () =>
          import('./projects/js-in-practice/js-in-practice.component').then(
            (m) => m.JSinPractice
          ),
        data: { animation: 'js-in-practice' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'roadster-api-project',
        loadChildren: () =>
          import('./projects/car-api/car-api.module').then(
            (m) => m.CarApiModule
          ),
        data: { animation: 'roadster-api' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'eco-actions-project',
        loadChildren: () =>
          import('./projects/eco-actions/eco-actions.module').then(
            (m) => m.EcoActionsModule
          ),
        data: { animation: 'eco-actions' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'coffee-api-project',
        loadChildren: () =>
          import('./projects/coffee-api/coffee-api.module').then(
            (m) => m.CoffeeApiModule
          ),
        data: { animation: 'coffee-api' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'music-school-project',
        loadChildren: () =>
          import('./projects/music-school/music-school.module').then(
            (m) => m.MusicSchoolModule
          ),
        data: { animation: 'music-school' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'demand-project',
        loadChildren: () =>
          import('./projects/demand/demand.module').then((m) => m.DemandModule),
        data: { animation: 'demand' },
        title: 'Manu Claeys | Projects',
      },

      {
        path: 'other-projects',
        loadChildren: () =>
          import('./projects/other-projects/other-projects.module').then(
            (m) => m.OtherProjectsModule
          ),
        data: { animation: 'others' },
        title: 'Manu Claeys | Projects',
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
        data: { animation: 'blog' },
        title: 'Manu Claeys | Blog',
      },
      {
        path: 'blog',
        children: [
          {
            path: 'what-makes-a-good-dev',
            loadChildren: () =>
              import(
                './blog/articles/good-dev-article/good-dev-article.module'
              ).then((m) => m.GoodDevArticleModule),
            data: { animation: 'goodDev' },
          },
          {
            path: 'clean-code',
            loadChildren: () =>
              import(
                './blog/articles/clean-code-article/clean-code-article.module'
              ).then((m) => m.CleanCodeArticleModule),
            data: { animation: 'CleanCode' },
          },
          {
            path: 'code-maintenance',
            loadChildren: () =>
              import(
                './blog/articles/code-maintenance-article/code-maintenance-article.module'
              ).then((m) => m.CodeMaintenanceArticleModule),
            data: { animation: 'CodeMaintenance' },
          },
        ],
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
