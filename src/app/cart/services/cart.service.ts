import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private currentCart: Cart;

  constructor() {
    this.currentCart = {
      cartProducts: [],
      totalSum: 0,
      totalQuantity: 0
    };
   }

  getCartProducts() {
    return this.currentCart.cartProducts;
  }

  getTotalSum() {
    return this.currentCart.cartProducts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
  }

  getTotalQuantity() {
    return this.currentCart.cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  increaseQuantity(product: CartItem) {
    const productIndex = this.getProductIndex(product);

    if (productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity++;
    }
  }

  decreaseQuantity(product: CartItem) {
    const productIndex = this.getProductIndex(product);

    if (productIndex !== -1 && this.currentCart.cartProducts[productIndex].quantity !== 0) {
      this.currentCart.cartProducts[productIndex].quantity--;
    }
  }

  setQuantity(product: CartItem) {
    const productIndex = this.getProductIndex(product);

    if (productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity = product.quantity;
    }
  }

  addProduct(product: Product) {
    const productIndex = this.getProductIndex(product);

    if ( productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity += 1;
    } else {
      this.currentCart.cartProducts.push({ ...product, quantity: 1 });
    }
  }

  removeProduct(product: Product) {
    this.currentCart.cartProducts = this.currentCart.cartProducts.filter(item => item.id !== product.id);
  }

  removeAllProducts() {
    this.currentCart.cartProducts = [];
    this.currentCart.totalSum = 0;
    this.currentCart.totalQuantity = 0;
  }

  private getProductIndex(product: Product): number {
    return this.currentCart.cartProducts.findIndex(item => item.id === product.id);
  }
}
