import { Injectable } from '@angular/core';

import { Categories } from '../models/categories.model';
import { MacDevices, IpadDevices, IphoneDevices } from '../models/products.model';
import { Product } from '../models/product.model';

const products = [
  {
    id: 1,
    name: MacDevices.MackBookAir,
    description: `Description for ${MacDevices.MackBookAir}`,
    price: 700,
    category: Categories.Mac,
    isAvailable: true
  },
  {
    id: 2,
    name: IphoneDevices.Iphone11,
    description: `Description for ${IphoneDevices.Iphone11}`,
    price: 1000,
    category: Categories.Iphone,
    isAvailable: true
  },
  {
    id: 3,
    name: IpadDevices.IpadMini,
    description: `Description for ${IpadDevices.IpadMini}`,
    price: 800,
    category: Categories.Ipad,
    isAvailable: false
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Array<Product> = products;

  constructor() { }

  getProducts() {
    return this.products;
  }
}
