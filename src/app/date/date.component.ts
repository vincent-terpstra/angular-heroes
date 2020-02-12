import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  template: `
    <div class="col">Date: {{today | date}}</div>
    <div class="col">Time: {{today | date:'shortTime'}}</div>
  `
})
export class DateComponent {
  today = new Date();
}
