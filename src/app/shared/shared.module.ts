import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeBackgroundDirective, RandomColorDirective } from './directives';

const directives = [ChangeBackgroundDirective, RandomColorDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...directives],
  exports: [...directives]
})
export class SharedModule {}
