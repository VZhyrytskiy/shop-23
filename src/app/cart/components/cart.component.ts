import { Component } from '@angular/core';

import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get purchasedProducts(): Array<CartItem> {
    return this.cartService.getPurchasedProducts();
  }

  removeFromCart(product: CartItem) {
    this.cartService.remoreProductFromCart(product);
  }

}
