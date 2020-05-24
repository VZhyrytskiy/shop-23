import { NgModule } from '@angular/core';

import { CartListComponent, CartItemComponent } from './components/index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [CartListComponent]
})
export class CartModule {}
