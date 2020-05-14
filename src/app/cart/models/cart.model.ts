import { CartItem } from './cart-item.model';

export interface Cart {
    cartProducts: Array<CartItem>;
    totalQuantity: number;
    totalSum: number;
}
