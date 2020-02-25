import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-multi-image',
  templateUrl: './multi-image.component.html',
  styleUrls: ['./multi-image.component.css']
})
export class MultiImageComponent implements OnInit, OnDestroy {
  input = "innerHTML as Input";

  values: string[] = ["innerHTML as InputA", "innerHTML as InputB","innerHTML as InputC"];
  index = 0;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(
      ()=>{this.input = this.values[this.index++ % this.values.length]}, 
      3000
    );
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
