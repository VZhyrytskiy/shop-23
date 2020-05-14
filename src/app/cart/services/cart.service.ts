import { Injectable, OnInit } from '@angular/core';

<<<<<<< HEAD
import { Product } from 'src/app/products/models/product.model';
import { Cart } from '../models/cart.model';
=======
import { CartItem } from '../models/cart-item.model';
>>>>>>> a99e55538971a3cdf34a973d71fb27339583643d

@Injectable({
  providedIn: 'root'
})

<<<<<<< HEAD
export class CartService{
  private currentCart: Cart = new Cart();
=======
export class CartService implements OnInit {
  purchasedProducts: Array<CartItem> = [];
>>>>>>> a99e55538971a3cdf34a973d71fb27339583643d

  constructor() {
    this.currentCart.purchasedProducts = [];
    this.currentCart.totalPrice = 0;
    this.currentCart.totalProducts = 0;
  }

  ngOnInit() {

  }

  getPurchasedProducts() {
    return this.currentCart.purchasedProducts;
  }

  getCartInfo(){
    return this.currentCart;
  }

  addProductToCart(product: Product) {
    this.currentCart.purchasedProducts.push(product);
    this.currentCart.totalPrice += product.price;
    this.currentCart.totalProducts = this.currentCart.purchasedProducts.length;
  }

  remoreProductFromCart(product: Product){
    this.currentCart.purchasedProducts.forEach((item, index) => {
      if (item === product) { this.currentCart.purchasedProducts.splice(index, 1); }
    });
    this.currentCart.totalPrice -= product.price;
    this.currentCart.totalProducts = this.currentCart.purchasedProducts.length;
  }

<<<<<<< HEAD
  clearCart(){
    this.currentCart.purchasedProducts.splice(0, this.currentCart.purchasedProducts.length);
    this.currentCart.totalPrice = 0;
    this.currentCart.totalProducts = 0;
=======
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
>>>>>>> a99e55538971a3cdf34a973d71fb27339583643d
  }
}
