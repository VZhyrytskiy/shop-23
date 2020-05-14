import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService{
  private currentCart: Cart;

  constructor() { }

  getPurchasedProducts() {
    return this.currentCart.purchasedProducts;
  }

  getCartInfo(){
    return this.currentCart;
  }

  addProductToCart(product: Product) {
    const productIndex = this.currentCart.purchasedProducts.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      this.currentCart.purchasedProducts[productIndex].quantity += 1;
    } else {
      this.currentCart.purchasedProducts.push({ ...product, quantity: 1 });
    }
  }

  remoreProductFromCart(product: Product){
    //console.log(`Product ${product.name} was deleted from cart`);

    this.currentCart.purchasedProducts = this.currentCart.purchasedProducts.filter(item => item.id !== product.id);
  }

  clearCart(){
    this.currentCart.purchasedProducts.splice(0, this.currentCart.purchasedProducts.length);
    this.currentCart.totalPrice = 0;
    this.currentCart.totalProducts = 0;
  }
}
