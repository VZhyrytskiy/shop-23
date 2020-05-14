import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductsListComponent } from './components';

import { ProductsService } from './services/products.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent, ProductsListComponent],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
