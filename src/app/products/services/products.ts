import { Categories } from '../enums/categories';
import { MacDevices, IpadDevices, IphoneDevices } from '../enums/products';

export const products = [
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
  {
    id: 4,
    name: MacDevices.MackBookPro,
    description: `Description for ${MacDevices.MackBookPro}`,
    price: 1500,
    category: Categories.Mac,
    isAvailable: false
  },
  {
    id: 5,
    name: IphoneDevices.IphoneSE,
    description: `Description for ${IphoneDevices.IphoneSE}`,
    price: 800,
    category: Categories.Iphone,
    isAvailable: true
  },
  {
    id: 6,
    name: IpadDevices.IpadPro,
    description: `Description for ${IpadDevices.IpadPro}`,
    price: 1200,
    category: Categories.Ipad,
    isAvailable: true
  },
  {
    id: 7,
    name: IpadDevices.Ipad,
    description: `Description for ${IpadDevices.Ipad}`,
    price: 900,
    category: Categories.Ipad,
    isAvailable: true
  },
  {
    id: 8,
    name: IphoneDevices.IphoneXR,
    description: `Description for ${IphoneDevices.IphoneXR}`,
    price: 1400,
    category: Categories.Iphone,
    isAvailable: true
  },
  {
    id: 9,
    name: IpadDevices.IpadAir,
    description: `Description for ${IpadDevices.IpadAir}`,
    price: 900,
    category: Categories.Ipad,
    isAvailable: false
  },
];
