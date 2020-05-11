import { Product } from 'src/app/products/models/product.model';

export class Cart {
    purchasedProducts: Array<Product>;
    totalProducts: number;
    totalPrice: number;
}
