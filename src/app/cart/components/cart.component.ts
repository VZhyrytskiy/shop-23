import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  purchasedProducts: Array<Product>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.purchasedProducts = this.cartService.getPurchasedProducts();
  }

}
