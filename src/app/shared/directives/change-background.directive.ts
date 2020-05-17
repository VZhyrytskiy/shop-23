import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[changeBgOnHover]'
})
export class ChangeBackgroundDirective {
  @HostBinding('class')
  attrClass = ''

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.attrClass = 'hovered'
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.attrClass = ''
  }
}
