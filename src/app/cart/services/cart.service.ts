import { Injectable, OnInit } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Injectable({
  providedIn: 'root'
})

export class CartService{
  purchasedGoods: Array<Product>;

  constructor(private productsService: ProductsService) {
    this.purchasedGoods = this.productsService.getProducts();
   }
}
