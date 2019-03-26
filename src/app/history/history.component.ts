import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterContentInit {
  im = [];

  constructor() { }
  ngAfterContentInit() {
    const count = +localStorage.getItem('countitems');
    let i = 0;
    for (i = 1; i <= count && i <=  9; i++) {
      this.im.push(localStorage.getItem('item' + i));
    }
  }

  ngOnInit() {
  }

}
