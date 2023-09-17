import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab, TabContent, TabLabel } from './tab-content.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, Tab, TabLabel, TabContent],
  exports: [Tab, TabLabel, TabContent],
})
export class TabModule {}
