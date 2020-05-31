import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') heading: ElementRef<HTMLHeadingElement>;

  title = 'Devices Shop';

  constructor(private cartService: CartService ) { }

  get productsInCart(): number {
    return this.cartService.getTotalQuantity();
  }

  ngAfterViewInit() {
    this.heading.nativeElement.innerText = this.title;
  }
}
