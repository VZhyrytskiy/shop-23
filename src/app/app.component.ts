import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') heading: ElementRef<HTMLInputElement>; 

  title = 'Devices Shop';

  ngAfterViewInit() {
    this.heading.nativeElement.innerText = this.title;
  }
}
