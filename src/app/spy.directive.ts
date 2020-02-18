import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({selector: '[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy {
    ngOnInit() {
        console.log(`mySpy directive onInit`);
    }

    ngOnDestroy(){
        console.log(`mySpy directive onDestroy`);
    }

}