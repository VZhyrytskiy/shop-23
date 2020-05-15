import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  @Output() incItemQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() gainItemQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decItemQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  inputValue: number = this.item.quantity;
  constructor() {
  }

  ngOnInit(): void {
  }

  increaseQuantityOfProduct(){
    this.incItemQuantity.emit(this.item);
  }

  increaseQuantityOfProductWithValue(){
    this.item.quantity = this.inputValue;
    this.gainItemQuantity.emit(this.item);
  }

  decreaseQuantityOfProduct(){
    this.decItemQuantity.emit(this.item);
  }

  removeFromCart(){
    this.removeItem.emit(this.item);
  }
}
