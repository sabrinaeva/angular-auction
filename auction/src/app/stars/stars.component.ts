import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  stars: boolean[];
  @Input()
  readonly :boolean = true;

  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  rating: number =0;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for(let i=1; i<=5; i++){
      this.stars.push(i > this.rating);
    }
  }
  getNewStar(index){
    if(!this.readonly){
      this.rating = index+1;
      this.ratingChange.emit(this.rating)
    }

  }


}
