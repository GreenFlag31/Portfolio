import { NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigateComponent } from '../navigate/navigate.component';
import { ProContraComponent } from '../pro-contra/pro-contra.component';
import { SafeHTMLPipe } from './safe-html.pipe';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    NavigateComponent,
    ProContraComponent,
    SafeHTMLPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    NavigateComponent,
    ProContraComponent,
    CommonModule,
    SafeHTMLPipe,
  ],
})
export class SharedModule {}
