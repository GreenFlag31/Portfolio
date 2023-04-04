import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [GameComponent],
  imports: [GameRoutingModule, SharedModule],
})
export class GameModule {}
