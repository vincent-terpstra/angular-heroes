import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-multi-image',
  templateUrl: './multi-image.component.html',
  styleUrls: ['./multi-image.component.css']
})
export class MultiImageComponent implements OnInit, OnDestroy {
  values: string[] = ["IMAG0173.jpg", "IMAG0178.jpg", "IMAG0185.jpg",  "IMAG0210.jpg"];
  path: string;
  index = 0;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.resume();
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  @HostListener('mouseenter')
  pause(){
    clearInterval(this.interval);
  }

  @HostListener('mouseleave')
  resume(){
    this.pause();
    this.loadInterval();
  }

  loadInterval(){
    this.interval = setInterval(
      ()=>{ this.index = ((this.index + 1) % this.values.length);}, 
      3000
    );
  }

  getClass(idx: number): string{
    return idx == this.index ?   "select" : "circle";
  }
}
