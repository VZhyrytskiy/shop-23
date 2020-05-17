import { Injectable } from '@angular/core';

import { products } from './products';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Array<Product> = products.sort((a, b) => {
    if (!a.isAvailable) { return 1; }
    if (!b.isAvailable) { return -1; }
  });

  constructor() {}

  getProducts() {
    return this.products;
  }
}
