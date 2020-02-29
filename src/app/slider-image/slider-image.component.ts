import { Component, OnInit, HostListener } from '@angular/core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.css']
})

export class SliderImageComponent implements OnInit {
  left = faChevronLeft;
  right = faChevronRight;

  width = 200;
  offset: number;
  constructor() { }
  ngOnInit(){
    this.offset = document.getElementById("slider").offsetLeft;
  }

  onMouseMove($event: MouseEvent){
    if($event.buttons == 1)
      this.setWidth($event.clientX - this.offset);
  }

  @HostListener("window:resize")
  onResize(){
    this.offset = document.getElementById("slider").offsetLeft;
  }

  setWidth(_width: number){
    this.width = Math.max(5, Math.min(_width, 395));
  }
}
