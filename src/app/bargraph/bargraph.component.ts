import { ApicallsService } from './../apicalls.service';
import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css']
})
export class BargraphComponent implements OnInit {

  constructor(private api: ApicallsService, public ngProgress: NgProgress) { }
  color: any;

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    let c = 'black';
    let w = 0.5;
    let quality = 100;
    this.ngProgress.start();
    const x = f.value['x'].split(',').map(Number);
    const y = f.value['y'].split(',').map(Number);
    if (f.value['color'] !== undefined) {
      c = f.value['color'];
    }
    if (f.value['lwidth'] !== '') {
      w = f.value['lwidth'];
    }
    if (f.value['quality'] !== '') {
      quality = f.value['quality']
    }
    this.api.bar({'x': x, 'y': y, 'xlabel': f.value['xlabel'], 'ylabel': f.value['ylabel'],
    'gname': f.value['gname'], 'lcol': c, 'lwidth': w, 'quality': quality});
  }


}
