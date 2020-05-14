import { CartItem } from './cart-item.model';

  export interface Cart {
    purchasedProducts: Array<CartItem>;
    totalProducts: number;
    totalPrice: number;
}
