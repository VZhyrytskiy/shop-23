import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {
  public cart: Cart = new Cart();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartInfo();
  }
}
