import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
})
export class ResizeComponent {
  @Input() font: number | string;
  @Output() fontChange = new EventEmitter<number>();

  dec(){
    this.resize(-1);
  }
  inc(){
    this.resize(+1);
  }

  resize(delta: number){
    this.font= Math.min(40, Math.max(8, +this.font + delta))
    this.fontChange.emit(this.font);
  }

}
