import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { Cart } from 'src/app/cart/models/cart.model';

@Component({
  selector: 'app-cart-list',
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
