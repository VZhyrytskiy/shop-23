import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeBackgroundDirective, RandomColorDirective } from './directives';
import { OrderByPipe } from './pipes';

const directives = [ChangeBackgroundDirective, RandomColorDirective];
const pipes = [OrderByPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...directives, ...pipes],
  exports: [...directives, ...pipes]
})
export class SharedModule {}
