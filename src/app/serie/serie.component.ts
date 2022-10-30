import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  numcur:number=0;
  numsea:number=0;
  promedio:number=0;
 series: Array<Serie> = [];
 constructor(private serieService: SerieService) { }

 getSerieList(): Array<Serie> {
  return dataSeries;
}

getSeries() {
  this.serieService.getSeries().subscribe(series => {
    this.series = series;
    this.numcur= this.series.length;
    for (let index = 0; index < this.series.length; index++) {

      console.log(this.numcur);
      this.numsea+=this.series[index].seasons;

      }
      this.promedio = this.numsea/this.numcur;
  });
}

  ngOnInit() {
    this.getSeries();
  }

}
