import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  template: `
    <div class="col"><span class="badge">Date</span> {{today | date}}</div>
    <div class="col"><span class="badge">Time</span> {{today | date:'shortTime'}}</div>
  `,
  styles: [".badge { width: 2em; }", "div { margin: 5px;}"]
})
export class DateComponent {
  today = new Date();
}
