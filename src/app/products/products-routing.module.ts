import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsListComponent, ProductComponent } from './';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: ':id',
        component: ProductComponent,
      },
      {
        path: '',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
