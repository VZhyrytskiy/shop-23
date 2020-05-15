import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';

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
    this.currentCart.totalSum = 0;
    this.currentCart.cartProducts.forEach( item => {
      this.currentCart.totalSum += item.quantity * item.price;
    });
    return this.currentCart.totalSum;
  }

  getTotalQuantity(){
    this.currentCart.totalQuantity = 0;
    this.currentCart.cartProducts.forEach( item => {
      this.currentCart.totalQuantity += item.quantity;
    });
    return this.currentCart.totalQuantity;
  }

  getCartInfo(){
    return this.currentCart;
  }

  incrementQuantity(product: CartItem){
    const productIndex = this.getProductIndex(product);
    console.log('cart-service', product.quantity, this.currentCart.cartProducts[productIndex].quantity);
    if (productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity ++;
    }
  }

  addQuantity(product: CartItem){
    const productIndex = this.getProductIndex(product);
    console.log('cart-service', product.quantity, this.currentCart.cartProducts[productIndex].quantity);
    if (productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity = product.quantity;
    }
  }

  decrementQuantity(product: CartItem){
    const productIndex = this.getProductIndex(product);
    if (productIndex !== -1) {
      if (this.currentCart.cartProducts[productIndex].quantity !== 0){
        this.currentCart.cartProducts[productIndex].quantity --;
      }
    }
  }

  addProductToCart(product: Product, quantityOfProducts?: number) {
    const productIndex = this.getProductIndex(product);
    if ( productIndex !== -1) {
      this.currentCart.cartProducts[productIndex].quantity += quantityOfProducts ?? 1;
    } else {
      this.currentCart.cartProducts.push({ ...product, quantity: quantityOfProducts ?? 1 });
    }
  }

  remoreProductFromCart(product: Product){
    // console.log(`Product ${product.name} was deleted from cart`);
    this.currentCart.cartProducts = this.currentCart.cartProducts.filter(item => item.id !== product.id);
  }

  removeAllProducts(){
    this.currentCart.cartProducts = [];
    this.currentCart.totalSum = 0;
    this.currentCart.totalQuantity = 0;
  }

  private getProductIndex(product: Product): number{
    return this.currentCart.cartProducts.findIndex(item => item.id === product.id);
  }
}
