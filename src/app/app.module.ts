import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClickOutsideDirective } from './shared/click-outside.directive';
import { FoodAppComponent } from './food-app-project/food-app.component';
import { ProContraComponent } from './pro-contra/pro-contra.component';
import { SafeHTMLPipe } from './shared/safe-html.pipe';
import { EcoActionsComponent } from './eco-actions/eco-actions.component';
import { MusicSchoolComponent } from './music-school/music-school.component';
import { DemandComponent } from './demand/demand.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GameComponent } from './game/game.component';
import { GoodDevArticleComponent } from './good-dev-article/good-dev-article.component';
import { NavigateComponent } from './navigate/navigate.component';
import { CleanCodeArticleComponent } from './clean-code-article/clean-code-article.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumVitaeComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ClickOutsideDirective,
    FoodAppComponent,
    ProContraComponent,
    SafeHTMLPipe,
    EcoActionsComponent,
    MusicSchoolComponent,
    DemandComponent,
    CalculatorComponent,
    GameComponent,
    GoodDevArticleComponent,
    NavigateComponent,
    CleanCodeArticleComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
