import { Component, OnInit, HostListener } from '@angular/core';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'scroll-to-top',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.css']
})
export class ScrolltopComponent implements OnInit {
  show = false;
  upArrow = faChevronUp;
  constructor() { }

  ngOnInit() {
  }


  scrollUp(){
    document.documentElement.scrollTop = document.body.scrollTop =  0;
    /*
    let depth = this.getScroll();

    let interval = setInterval(()=>{
      if((depth-=10) < 0){
        depth = 0;
        clearInterval(interval);
      }

      document.body.scrollTop = document.documentElement.scrollTop = depth; // For Chrome, Firefox, IE and Opera
    }, 20);
     this.show = false;
     /**/
  }

  getScroll():number{
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', [])
  onScroll(){
    this.show = this.getScroll()>200;
  }
}
