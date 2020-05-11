import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {}
