import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

import { products } from './products';
import { Product } from '../models/product.model';

const productsObservable: Observable<Array<Product>> = of(products.sort((a, b) => {
  if (!a.isAvailable) { return 1; }
  if (!b.isAvailable) { return -1; }
}));

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<Array<Product>> = productsObservable;

  constructor() {}

  getProducts(): Observable<Array<Product>> {
    return this.products;
  }
}
