import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item: CartItem;

  @Output() incItemQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() addItemQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decItemQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() {
  }

  increaseQuantityOfProduct(){
    this.incItemQuantity.emit(this.item);
  }

  onInputChange(inputValue: number){
    this.item.quantity = +inputValue;
    this.addItemQuantity.emit(this.item);
  }

  decreaseQuantityOfProduct(){
    this.decItemQuantity.emit(this.item);
  }

  removeFromCart(){
    this.removeItem.emit(this.item);
  }
}
