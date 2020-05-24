import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Array<Product>>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product) {
    this.cartService.addProduct(product);
  }
}
