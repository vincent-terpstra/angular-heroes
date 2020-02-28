import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.css']
})
export class SliderImageComponent {

  width = 200;
  constructor() { }

  ngOnInit(){
    
  }

  onMouseMove($event: MouseEvent){
    if($event.buttons == 1)
      this.setWidth($event.clientX - document.getElementById("slider").offsetLeft);
  }

  setWidth(_width: number){
    this.width = Math.max(0, Math.min(_width, 400));
  }
}
