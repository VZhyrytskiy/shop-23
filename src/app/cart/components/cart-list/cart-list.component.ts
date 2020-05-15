import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {

  get CartProducts(): Array<CartItem> {
    return this.cartService.getCartProducts();
  }

  get TotalSum(): number {
    return this.cartService.getTotalSum();
  }

  get TotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  increaseQuantityOfProduct(product: CartItem){
    console.log('cart-list increase', product.quantity);
    this.cartService.incrementQuantity(product);
  }

  addQuantityOfProduct(product: CartItem){
    console.log('cart-list increase', product.quantity);
    this.cartService.addQuantity(product);
  }

  decreaseQuantityOfProduct(product: CartItem){
    this.cartService.decrementQuantity(product);
  }

  removeFromCart(product: CartItem) {
    this.cartService.remoreProductFromCart(product);
  }
}
