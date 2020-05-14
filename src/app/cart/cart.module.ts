import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent
  ],
  providers: [CartService],
  exports: [
    CartListComponent,
    CartComponent
  ]
})
export class CartModule {}
