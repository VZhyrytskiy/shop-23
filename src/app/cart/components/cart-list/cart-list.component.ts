import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {

  get purchasedProducts(): Array<CartItem> {
    return this.cartService.getPurchasedProducts();
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(product: CartItem) {
    this.cartService.remoreProductFromCart(product);
  }
}
