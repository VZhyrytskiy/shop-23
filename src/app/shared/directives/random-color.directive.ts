import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[randomColor]'
})
export class RandomColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {};

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.createRandomColor())
  }

  createRandomColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16); 
  }
}
