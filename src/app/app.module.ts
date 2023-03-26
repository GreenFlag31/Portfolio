import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClickOutsideDirective } from './shared/click-outside.directive';
import { FoodAppComponent } from './food-app-project/food-app.component';
import { ProContraComponent } from './pro-contra/pro-contra.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumVitaeComponent,
    BlogComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ClickOutsideDirective,
    FoodAppComponent,
    ProContraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
