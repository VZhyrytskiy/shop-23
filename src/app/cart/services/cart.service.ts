import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService{
  purchasedProducts: Array<Product> = [];

  constructor() {}

  getPurchasedProducts() {
    return this.purchasedProducts;
  }

  addToCart(product: Product) {
    this.purchasedProducts.push(product);
  }
}
