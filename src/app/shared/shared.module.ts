import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeHostBackground } from './directives/change-host-background';

@NgModule({
  imports: [CommonModule],
  declarations: [ChangeHostBackground],
  exports: [ChangeHostBackground]
})
export class SharedModule {}
