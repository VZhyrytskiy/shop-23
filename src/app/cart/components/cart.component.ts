import { Component, OnInit } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  purchasedGoods: Array<Product>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.purchasedGoods = this.cartService.purchasedGoods;
  }

}
