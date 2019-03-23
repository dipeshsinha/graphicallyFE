import { Router } from '@angular/router';
import { ApicallsService } from './../apicalls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  converted_image: any;

  constructor(private http: ApicallsService, private router: Router) { }

  ngOnInit() {
    if (this.http.imagestring === 'nil') {
      this.router.navigate(['']);
    }
    this.converted_image = 'data:image/png;base64,' + this.http.imagestring;
  }

}
