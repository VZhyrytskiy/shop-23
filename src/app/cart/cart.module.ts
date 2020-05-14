import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent],
  // providers: [CartService], // уже зарегистрирован с помощью своего декоратора
  exports: [CartComponent]
})
export class CartModule {}
