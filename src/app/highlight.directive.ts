import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(private element: ElementRef ) {}

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }
}
