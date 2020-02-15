import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
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
