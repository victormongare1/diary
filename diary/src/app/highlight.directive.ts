import { Directive ,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("click") onclicks(){
    this.decor("blue")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.decor("black")
  }

  private decor(action :string){
  this.elem.nativeElement.style.color = action;
  }
}
