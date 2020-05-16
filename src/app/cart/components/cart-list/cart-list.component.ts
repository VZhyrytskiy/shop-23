import { Component } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  constructor(private cartService: CartService) { }

  get cartProducts(): Array<CartItem> {
    return this.cartService.getCartProducts();
  }

  get totalSum(): number {
    return this.cartService.getTotalSum();
  }

  get totalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onIncreaseQuantity(product: CartItem){
    this.cartService.increaseQuantity(product);
  }

  onDecreaseQuantity(product: CartItem){
    this.cartService.decreaseQuantity(product);
  }

  onSetQuantity(product: CartItem){
    this.cartService.setQuantity(product);
  }

  onRemoveFromCart(product: CartItem) {
    this.cartService.removeProduct(product);
  }
}
