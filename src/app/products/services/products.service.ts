import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  getProduct(id: number): Observable<Product> {
    return this.products.pipe(
      map(products => products.find((product: Product) => product.id === id))
    );
  }
}
