import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CartListComponent],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {}
