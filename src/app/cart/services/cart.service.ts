import { Injectable, OnInit } from '@angular/core';

import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  purchasedProducts: Array<CartItem> = [];

  constructor() {}

  // ngOnInit() {

  // }

  getPurchasedProducts() {
    return this.purchasedProducts;
  }

  addToCart(product: CartItem) {
    const productIndex = this.purchasedProducts.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      this.purchasedProducts[productIndex].quantity += 1;
    } else {
      this.purchasedProducts.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: CartItem) {
    console.log(`Product ${product.name} was deleted from cart`);

    this.purchasedProducts = this.purchasedProducts.filter(item => item.id !== product.id);
  }
  // Есть добавление, есть увеличение количества, есть удаление, логично добавить уменьшение количества.
}
