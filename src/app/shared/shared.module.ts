import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChangeBackgroundDirective, RandomColorDirective } from './directives';
import { OrderByPipe } from './pipes';

const directives = [ChangeBackgroundDirective, RandomColorDirective];
const pipes = [OrderByPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...directives, ...pipes],
  exports: [
    CommonModule,
    FormsModule,
    ...directives,
    ...pipes
  ]
})
export class SharedModule {}
