import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  screenHeight = 0;
  screenWidth = 0;
  @HostListener('window:resize', ['$event'])
    onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }
  constructor() {
    this.onResize();
    // 622 is minimum
  }
  ngOnInit() {
    if (this.screenWidth < 622) {
      const element = <HTMLInputElement> document.getElementById('slide-sidebar');
      element.checked = true;
    }
  }
}
