import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent, ProductsListComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductsComponent
  ]
})
export class ProductsModule {}
