import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evil',
  template: `
    <p><span><b>"{{evilString}}"</b> is the <i>interpolated</i> evil string</span></p>
    <p><b>"<span [innerHTML]="evilString"></span>"</b> is the <i>property bound</i> evil string, Angular has sanitized the script</p>
  `,
  styles: [".badge { width: 2em; }", "div { margin: 5px;}"]
})
export class EvilComponent {
  evilString = `Template <script>alert("evil never sleeps")</script> Syntax`;
}
