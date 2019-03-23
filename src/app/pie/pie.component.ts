import { ApicallsService } from './../apicalls.service';
import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  errors = '';
  showerror = false;

  constructor(private api: ApicallsService, public ngProgress: NgProgress) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.ngProgress.start();
    const x = f.value['x'].split(',').map(Number);
    const y = f.value['y'].split(',');
    const exp = f.value['exp'].split(',');
    let quality = 100;
    const arr = [];
    let i = 0, j = 0;
    if (f.value['quality'] !== '') {
      quality = f.value['quality'];
    }
    for (i = 0; i < y.length; i++) {
      let temp = 0;
      for (j = 0; j < exp.length; j++) {
        if (y[i] === exp[j]) {
          temp = 1;
          arr.push(0.2);
          break;
        }
      }
      if (temp === 0) {
        arr.push(0);
      }
    }
    this.api.pie({'x': x, 'y': y, 'exp': arr, 'quality': quality});
  }

}
