import { Directive, ElementRef, HostListener, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective implements OnChanges {

  constructor(private el: ElementRef) {
  //  el.nativeElement.style.color = "#e61742b6";
  }
  // @HostBinding ('style.background-color') bgColour : string;
  // @HostListener('mouseover') OnMouseOver(){
  //   this.el.nativeElement.style.border = "2px solid gray";
  //   this.bgColour = "red";
  // }
  @HostListener("keyup") ngOnChanges()
  {
    let count = this.el.nativeElement.value.length;
    if(count<=25)
      this.el.nativeElement.style.backgroundColor = "#ff5858";
    else if(count>25 && count<50)
      this.el.nativeElement.style.backgroundColor = "#ffe56c";
    else if(count>=50)
      this.el.nativeElement.style.backgroundColor = "#c5ff9a";
  }
  
}