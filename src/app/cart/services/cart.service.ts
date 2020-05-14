import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService{
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

  getTotalSum(){
    return this.currentCart.totalSum;
  }

  getTotalQuantity(){
    return this.currentCart.totalQuantity;
  }

  getCartInfo(){
    return this.currentCart;
  }

  increaseQuantity(product: Product){
    const productIndex = this.getProductIndex(product);
    if (productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity ++;
    }
    this.updateCartData();
  }

  decreaseQuantity(product: Product){
    const productIndex = this.getProductIndex(product);
    if (productIndex !== -1) {
      if (this.currentCart.cartProducts[productIndex].quantity !== 0){
        this.currentCart.cartProducts[productIndex].quantity --;
      }
    }
    this.updateCartData();
  }

  addProductToCart(product: Product) {
    const productIndex = this.getProductIndex(product);
    if ( productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity += 1;
    } else {
      this.currentCart.cartProducts.push({ ...product, quantity: 1 });
    }
    this.updateCartData();
  }

  addProductsToCart(product: Product, quantity: number) {
    const productIndex = this.getProductIndex(product);
    if ( productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity += quantity;
    } else {
      this.currentCart.cartProducts.push({ ...product, quantity: quantity });
    }
    this.updateCartData();
  }

  remoreProductFromCart(product: Product){
    // console.log(`Product ${product.name} was deleted from cart`);
    this.currentCart.cartProducts = this.currentCart.cartProducts.filter(item => item.id !== product.id);
    this.updateCartData();
  }

  removeAllProducts(){
    this.currentCart.cartProducts = [];
    this.currentCart.totalSum = 0;
    this.currentCart.totalQuantity = 0;
  }

  private updateCartData(){
    this.currentCart.totalQuantity = 0;
    this.currentCart.totalSum = 0;
    this.currentCart.cartProducts.forEach( item => {
      this.currentCart.totalQuantity += item.quantity;
      this.currentCart.totalSum += item.quantity * item.price
    });
  }

  private getProductIndex(product: Product): number{
    return this.currentCart.cartProducts.findIndex(item => item.id === product.id);
  }
}
