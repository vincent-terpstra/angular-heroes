import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  template: `
    <div class="col"><span [class.badge]="classBind" [style.background-color]="styleString">
      Date</span> {{today | date}}</div>
    <div class="col"><span [class]="badgeString">
      Time</span> {{today | date:'shortTime'}}</div>
  `,
  styles: [".badge { width: 2em; }", "div { margin: 5px;}", ".red { background-color: red; }"]
})
export class DateComponent {
  today = new Date();
  classBind = true;
  badgeString= "badge red";
  styleString= "black";
}
