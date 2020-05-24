import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductComponent, ProductsListComponent } from './components';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ProductComponent,
    ProductsListComponent
  ],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
