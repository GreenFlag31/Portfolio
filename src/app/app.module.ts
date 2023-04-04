import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClickOutsideDirective } from './shared/click-outside.directive';
import { SharedModule } from './shared/shared-module.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ClickOutsideDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
