import { NgProgress } from 'ngx-progressbar';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ApicallsService {
  link = 'http://dipeshsinha.pythonanywhere.com/';
  imagestring = 'nil';
  image: any;

  constructor(private http: HttpClient, private router: Router, public ngProgress: NgProgress) { }
  line(body: {}) {
    this.http.post(this.link + 'graph/line', body).subscribe(
      (result) => {
        this.image = result;
        this.imagestring = this.image['0'].image;
        this.ngProgress.done();
        this.router.navigate(['/graph']);
      },
      (error) => {
        this.ngProgress.done();
        console.log(error);
      }
    );
  }
  bar(body: {}) {
    this.http.post(this.link + 'graph/bar', body).subscribe(
      (result) => {
        this.image = result;
        this.imagestring = this.image['0'].image;
        this.ngProgress.done();
        this.router.navigate(['/graph']);
      },
      (error) => {
        this.ngProgress.done();
        console.log(error);
      }
    );
  }
  hist(body: {}) {
    this.http.post(this.link + 'graph/hist', body).subscribe(
      (result) => {
        this.image = result;
        this.imagestring = this.image['0'].image;
        this.ngProgress.done();
        this.router.navigate(['/graph']);
      },
      (error) => {
        this.ngProgress.done();
        console.log(error);
      }
    );
  }
  pie(body: {}) {
    this.http.post(this.link + 'graph/pie', body).subscribe(
      (result) => {
        this.image = result;
        this.imagestring = this.image['0'].image;
        this.ngProgress.done();
        this.router.navigate(['/graph']);
      },
      (error) => {
        this.ngProgress.done();
        console.log(error);
      }
    );
  }
}
