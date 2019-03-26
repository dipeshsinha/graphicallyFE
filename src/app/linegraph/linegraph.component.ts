import { ApicallsService } from './../apicalls.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {
  col: '';
  color: any;
  marcolor: any;
  error = '';
  showerror = false;

  constructor(public api: ApicallsService, public ngProgress: NgProgress) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.ngProgress.start();
    let c = 'black';
    let mc = 'black';
    let w = 1;
    let op = 1;
    let type = '-';
    let ms = 10;
    let quality = 100;
    const name = {};
    const x = f.value['x'].split(',').map(Number);
    const y = f.value['y'].split(',').map(Number);
    if (x.length !== y.length) {
      this.error = 'The lengths of X and Y does not match';
      this.showerror = true;
      this.ngProgress.done();
      setTimeout(() => {
        this.showerror = false;
      }, 5000);
      return;
    }
    if (f.value['color'] !== undefined) {
      c = f.value['color'];
    }
    if (f.value['lwidth'] !== '') {
      w = f.value['lwidth'];
    }
    if (f.value['marcolor'] !== undefined) {
      mc = f.value['marcolor'];
    }
    if (f.value['opacity'] !== '') {
      op = f.value['opacity'] / 100;
    }
    if (f.value['inlineDefaultRadiosExample'] !== '') {
      type = f.value['inlineDefaultRadiosExample'];
    }
    if (f.value['mwidth'] !== '') {
      ms = f.value['mwidth'];
    }
    if (f.value['quality'] !== '') {
      quality = f.value['quality'];
    }
    this.api.line({'x': x, 'y': y,
     'lcol': c, 'lwidth': w,
      'opacity': op, 'linestyle': type,
      'xlabel': f.value['xlabel'], 'ylabel': f.value['ylabel'],
      'gname': f.value['gname'], 'marker': f.value['marker'],
      'mcolor': mc, 'msize': ms, 'quality': quality});
  }

}
