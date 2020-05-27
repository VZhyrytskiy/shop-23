import { NgModule } from '@angular/core';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [SharedModule, CartRoutingModule],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [],
  exports: [
    CartListComponent
  ]
})
export class CartModule {}
