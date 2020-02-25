import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[imgSwitch]',
})

export class ImageDirective {
    constructor(public viewContainerRef: ViewContainerRef)
    {}
}