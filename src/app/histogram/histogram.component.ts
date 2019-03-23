import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { NgForm } from '@angular/forms';
import { ApicallsService } from './../apicalls.service';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor(private api: ApicallsService, public ngProgress: NgProgress) { }
  color: any;

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    let c = 'black';
    let w = 1;
    let quality = 100;
    this.ngProgress.start();
    const x = f.value['x'].split(',').map(Number);
    const range = f.value['range'].split(',').map(Number);
    if (f.value['color'] !== undefined) {
      c = f.value['color'];
    }
    if (f.value['lwidth'] !== '') {
      w = f.value['lwidth'];
    }
    if (f.value['quality'] !== '') {
      quality = f.value['quality'];
    }
    this.api.hist({'x': x, 'range': range, 'col': c,
    'width': w,
    'quality': quality, 'xlabel': f.value['xlabel'], 'ylabel': f.value['ylabel'],
    'gname': f.value['gname']});
  }

}
