import { ApicallsService } from './apicalls.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LinegraphComponent } from './linegraph/linegraph.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgProgressModule } from 'ngx-progressbar';
import { BargraphComponent } from './bargraph/bargraph.component';
import { HistogramComponent } from './histogram/histogram.component';
import { PieComponent } from './pie/pie.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'line', component: LinegraphComponent},
  {path: 'graph', component: GraphComponent},
  {path: 'bar', component: BargraphComponent},
  {path: 'histogram', component: HistogramComponent},
  {path: 'pie', component: PieComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinegraphComponent,
    GraphComponent,
    BargraphComponent,
    HistogramComponent,
    PieComponent,
    HistoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    HttpClientModule,
    ColorPickerModule,
    NgProgressModule
  ],
  providers: [
    ApicallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
