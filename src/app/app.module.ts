import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/components/cart.component';
import { CartService } from './cart/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ProductsModule,
    SharedModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
