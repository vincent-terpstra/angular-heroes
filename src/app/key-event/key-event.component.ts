import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-event',
  template: `<div>
              <p>Input values here:
              <input (keydown)="onKey($event)"/></p>
              <p>{{values}}</p><div>`,
  styles:[ `div { float: left; clear: both;} input { background-color: ivory;}`]
})
export class KeyEventComponent {
  values: string = '';
  constructor() { }

  onKey(event: any){
    this.values += event.key + ' | ';
  }
}
