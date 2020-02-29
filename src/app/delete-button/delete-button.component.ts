import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-delete-button',
  template: `<button class="delete" (click)="delete()">{{label}}</button>`,
  styles:[`.delete { padding: 5px 10px 7px 10px;}
           .delete:hover{background-color: rgb(146, 18, 18) !important; color: white !important;}`]
})

export class DeleteButtonComponent implements OnInit {
  @Input() hero: Hero;
  @Input() label: string;

  @Output() deleteRequest = new EventEmitter<Hero>();

  delete(){
    this.deleteRequest.emit(this.hero);
  }

  constructor() { }

  ngOnInit() {
  }

  
}
