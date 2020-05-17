import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  @Output() increaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decreaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() setQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeFromCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @HostBinding('class') attrClass = 'cart-item';

  constructor() {}

  onIncreaseQuantity(){
    this.increaseQuantity.emit(this.cartItem);
  }

  onDecreaseQuantity(){
    this.decreaseQuantity.emit(this.cartItem);
  }

  onSetQuantity(inputValue: number){
    this.cartItem.quantity = +inputValue;
    this.setQuantity.emit(this.cartItem);
  }

  onRemoveFromCart(){
    this.removeFromCart.emit(this.cartItem);
  }
}
